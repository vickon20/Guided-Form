"use server";

import {
  interactiveFormSchema,
  TInteractiveFormSchema,
} from "@/components/interactive-form/forms/zodSchema";
import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export const saveFormInformation = async (values: TInteractiveFormSchema) => {
  const validator = interactiveFormSchema.safeParse(values);
  if (!validator.success)
    return {
      success: false,
      message:
        "Information is Incomplete. Check your information, or retake form questions",
    };

  const formData: Prisma.guidedFormCreateInput = {
    ...validator.data,
    areaOfExpertise: values.areaOfExpertise.join("--@--"),
    sustainableDevelopmentGoals:
      values.sustainableDevelopmentGoals.join("--@--"),
    primaryMotivationCareer: values.primaryMotivationCareer?.join("--@--"),
    primaryMotivationUniversity:
      values.primaryMotivationUniversity?.join("--@--"),

    careerPathExtent: values.careerPathExtent || null,
    linkToSocialMedia: values.linkToSocialMedia || null,
  };

  const newData = await db.guidedForm.upsert({
    where: { email: values.email },
    update: formData,
    create: formData,
  });

  return {
    status: true,
    message: "Successfully Created",
    data: newData.id,
  };
};
