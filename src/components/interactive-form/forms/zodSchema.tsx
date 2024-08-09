import { z } from "zod";

export const interactiveFormSchema = z.object({
  fullName: z.string().min(3).max(30),
  email: z.string().email(),
  gender: z.string().min(3),
  country: z.string().min(1),
  levelOfEducation: z.string().min(1),
  yearsOfWorkExperience: z.string().min(1),
  areaOfExpertise: z.string().min(1).array(),
  currentRole: z.string().min(1),
  workingInYourField: z.string().min(1),
  sustainableDevelopmentGoals: z.string().min(1).array(),
  mentorshipFrequency: z.string().min(1),
  careerPathExtent: z.string(),
  primaryMotivationUniversity: z.string().min(1).array(),
  primaryMotivationCareer: z.string().min(1).array(),
  linkToSocialMedia: z.string().url().optional(),
});

export const interactiveFormPartialSchema = interactiveFormSchema.partial();

export type TInteractiveFormSchema = z.infer<typeof interactiveFormSchema>;
export type TInteractiveFormPartialSchema = z.infer<
  typeof interactiveFormPartialSchema
>;
