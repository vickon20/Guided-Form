"use server";

import { TInteractiveFormSchema } from "@/components/interactive-form/forms/zodSchema";
import { db } from "@/lib/db";

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
    !values.mentorshipFrequency
  )
    return {
      status: "failure",
      message: "Information is Incomplete",
      data: null,
    };

  const checkIfEmailExists = await db.guidedForm.findUnique({
    where: { email: values.email },
  });

  if (checkIfEmailExists)
    return {
      status: "failure",
      message:
        "This Email Address has already submitted their information with us.",
      data: null,
    };

  const newData = await db.guidedForm.create({
    data: {
      fullName: values.fullName,
      email: values.email,
      gender: values.gender,
      country: values.country,
      levelOfEducation: values.levelOfEducation,
      yearsOfWorkExperience: values.yearsOfWorkExperience,
      areaOfExpertise: values.areaOfExpertise.join("---"),
      currentRole: values.currentRole,
      workingInYourField: values.workingInYourField,
      sustainableDevelopmentGoals: values.sustainableDevelopmentGoals,
      mentorshipFrequency: values.mentorshipFrequency,
      primaryMotivationCareer: values.primaryMotivationCareer?.join("---"),
      primaryMotivationUniversity:
        values.primaryMotivationUniversity?.join("---"),

      careerPathExtent: values.careerPathExtent || null,
      linkToSocialMedia: values.linkToSocialMedia || null,
    },
  });

  return {
    status: "success",
    message: "Successfully Created",
    data: newData.id,
  };
};
