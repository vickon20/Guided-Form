import { z } from "zod";

export const interactiveFormSchema = z.object({
  fullName: z.string().min(3).max(30).optional(),
  email: z.string().email().optional(),
  gender: z.string().min(1).optional(),
  country: z.string().min(1).optional(),
  levelOfEducation: z.string().min(1).optional(),
  yearsOfWorkExperience: z.string().min(1).optional(),
  areaOfExpertise: z.array(z.string()).optional(),
  currentRole: z.string().min(1).optional(),
  primaryMotivationUniversity: z.array(z.string()).optional(),
  primaryMotivationCareer: z.array(z.string()).optional(),
  workingInYourField: z.string().min(1).optional(),
  careerPathExtent: z.string().min(1).optional(),
  sustainableDevelopmentGoals: z.string().min(1).optional(),
  linkToSocialMedia: z.string().url().optional(),
  mentorshipFrequency: z.string().min(1).optional(),
});

export type TInteractiveFormSchema = z.infer<typeof interactiveFormSchema>;
