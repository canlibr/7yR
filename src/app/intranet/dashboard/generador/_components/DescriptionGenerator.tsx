"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { generateDescriptionAction } from "../actions";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader, Sparkles, Clipboard, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useActionState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  features: z.string().min(20, {
    message: "Por favor, introduzca al menos 20 caracteres de características.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const initialState = {
  description: "",
  error: "",
};

export function DescriptionGenerator() {
  const [state, formAction] = useActionState(generateDescriptionAction, initialState);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      features: "",
    },
  });

  const { isSubmitting, isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if(state.error) {
        toast({
            title: "Error al generar descripción",
            description: state.error,
            variant: "destructive"
        })
    }
  }, [state.error, toast])

  useEffect(() => {
    if(isSubmitSuccessful && state.description) {
      form.reset({ features: form.getValues("features") });
    }
  }, [isSubmitSuccessful, state.description, form])


  const copyToClipboard = () => {
    navigator.clipboard.writeText(state.description);
    setIsCopied(true);
    toast({ title: "Copiado al portapapeles" });
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Form {...form}>
          <form action={formAction} className="space-y-6">
            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Características de la Propiedad</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ej: Villa de 3 dormitorios y 2 baños con piscina privada, vistas al mar, cocina moderna, amplio jardín, garaje para 2 coches..."
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" /> Generando...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" /> Generar Descripción
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
      <div>
        <label className="text-lg font-medium">Descripción Generada</label>
        <Card className="mt-2 min-h-[268px] relative">
          <CardContent className="p-4">
            {isSubmitting ? (
              <div className="flex flex-col items-center justify-center h-full pt-16">
                 <Loader className="mr-2 h-8 w-8 animate-spin text-primary" />
                 <p className="text-muted-foreground mt-2">Creando la descripción perfecta...</p>
              </div>
            ) : state.description ? (
              <>
                <p className="text-sm whitespace-pre-wrap text-muted-foreground">{state.description}</p>
                 <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={copyToClipboard}
                    aria-label="Copiar al portapapeles"
                  >
                    {isCopied ? <ClipboardCheck className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                  </Button>
              </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full pt-16">
                    <p className="text-muted-foreground text-center">La descripción generada por la IA aparecerá aquí.</p>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
