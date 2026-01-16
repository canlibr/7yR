"use server";

import { generatePropertyDescription } from '@/ai/flows/generate-property-description';

interface FormState {
    description: string;
    error: string;
}

export async function generateDescriptionAction(
    prevState: FormState,
    formData: FormData,
): Promise<FormState> {
    const features = formData.get('features');

    if (typeof features !== 'string' || features.length < 20) {
        return {
            description: "",
            error: "Por favor, introduzca al menos 20 caracteres de características."
        }
    }

    try {
        const result = await generatePropertyDescription({ propertyFeatures: features });
        if (result.propertyDescription) {
            return {
                description: result.propertyDescription,
                error: ""
            }
        }
        return {
            description: "",
            error: "La IA no pudo generar una descripción. Intente de nuevo."
        }
    } catch (error) {
        console.error("Error generating property description:", error);
        return {
            description: "",
            error: "Ocurrió un error en el servidor. Por favor, intente más tarde."
        }
    }
}
