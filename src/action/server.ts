"use server";

import { TInteractiveFormSchema } from "@/components/interactive-form/forms/zodSchema";
import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export const saveFormInformation = async (values: TInteractiveFormSchema) => {
  if (
    !values.fullName ||
    !values.email ||
    !values.gender ||
    !values.country ||
    !values.levelOfEducation ||
    !values.yearsOfWorkExperience ||
    !values.areaOfExpertise ||
    values.areaOfExpertise.length === 0 ||
    !values.currentRole ||
    !values.workingInYourField ||
    !values.sustainableDevelopmentGoals ||
    values.sustainableDevelopmentGoals.length === 0 ||
    !values.mentorshipFrequency
  )
    return {
      status: "failure",
      message:
        "Information is Incomplete. Check your information, or retake form questions",
      data: null,
    };

  const formData: Prisma.guidedFormCreateInput = {
    fullName: values.fullName,
    email: values.email,
    gender: values.gender,
    country: values.country,
    levelOfEducation: values.levelOfEducation,
    yearsOfWorkExperience: values.yearsOfWorkExperience,
    areaOfExpertise: values.areaOfExpertise.join("---"),
    currentRole: values.currentRole,
    workingInYourField: values.workingInYourField,
    sustainableDevelopmentGoals: values.sustainableDevelopmentGoals.join("---"),
    mentorshipFrequency: values.mentorshipFrequency,
    primaryMotivationCareer: values.primaryMotivationCareer?.join("---"),
    primaryMotivationUniversity:
      values.primaryMotivationUniversity?.join("---"),

    careerPathExtent: values.careerPathExtent || null,
    linkToSocialMedia: values.linkToSocialMedia || null,
  };

  const newData = await db.guidedForm.upsert({
    where: { email: values.email },
    update: formData,
    create: formData,
  });

  return {
    status: "success",
    message: "Successfully Created",
    data: newData.id,
  };
};
