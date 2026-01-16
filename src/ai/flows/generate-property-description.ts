'use server';

/**
 * @fileOverview Generates property descriptions based on key features.
 *
 * - generatePropertyDescription - A function that generates property descriptions.
 * - GeneratePropertyDescriptionInput - The input type for the generatePropertyDescription function.
 * - GeneratePropertyDescriptionOutput - The return type for the generatePropertyDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePropertyDescriptionInputSchema = z.object({
  propertyFeatures: z
    .string()
    .describe('Key features of the property to be described.'),
});
export type GeneratePropertyDescriptionInput = z.infer<
  typeof GeneratePropertyDescriptionInputSchema
>;

const GeneratePropertyDescriptionOutputSchema = z.object({
  propertyDescription: z
    .string()
    .describe('A detailed and engaging description of the property.'),
});
export type GeneratePropertyDescriptionOutput = z.infer<
  typeof GeneratePropertyDescriptionOutputSchema
>;

export async function generatePropertyDescription(
  input: GeneratePropertyDescriptionInput
): Promise<GeneratePropertyDescriptionOutput> {
  return generatePropertyDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePropertyDescriptionPrompt',
  input: {schema: GeneratePropertyDescriptionInputSchema},
  output: {schema: GeneratePropertyDescriptionOutputSchema},
  prompt: `You are an expert real estate content writer.

  Based on the key features provided, create a detailed and engaging property description that highlights the unique selling points of the property.

  Key Features: {{{propertyFeatures}}}`,
});

const generatePropertyDescriptionFlow = ai.defineFlow(
  {
    name: 'generatePropertyDescriptionFlow',
    inputSchema: GeneratePropertyDescriptionInputSchema,
    outputSchema: GeneratePropertyDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
