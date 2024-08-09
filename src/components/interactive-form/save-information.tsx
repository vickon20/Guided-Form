"use client";

import { saveFormInformation } from "@/action/server";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { interactiveFormSchema } from "./forms/zodSchema";
import useInteractiveForm from "./use-interactive-form-hook";

const SaveInformation = () => {
  const { form, previousPage, setCurrentPage } = useInteractiveForm();
  const [isLoading, setIsLoading] = useState(false);
  const validator = interactiveFormSchema.safeParse(form);

  const onSave = async () => {
    if (!validator.success)
      return toast.error("Please fill all the required fields");

    setIsLoading(true);
    try {
      const response = await saveFormInformation(validator.data);

      if (!response.status && !response.data) {
        return toast.error(response.message);
      }
      toast.success("Form saved successfully", {
        description: "Thank you for your response.",
      });

      window.location.assign(
        `${process.env.NEXT_PUBLIC_URL}/thank-you?id=${response.data}`
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to save details");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full py-2">
      {!validator.success && (
        <div className="space-y-4 w-full h-[50vh] pb-10 overflow-auto">
          {validator.error.formErrors.fieldErrors.fullName && (
            <p className="text-sm text-destructive flex items-center gap-x-1">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCurrentPage("your-full-name")}
                className="text-xs !h-6 rounded-none"
              >
                &larr; Go
              </Button>
              Full Name is Required
            </p>
          )}
          {validator.error.formErrors.fieldErrors.email && (
            <p className="text-sm text-destructive flex items-center gap-x-1">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCurrentPage("your-email")}
                className="text-xs !h-6 rounded-none"
              >
                &larr; Go
              </Button>
              Email is Required
            </p>
          )}
          {validator.error.formErrors.fieldErrors.gender && (
            <p className="text-sm text-destructive flex items-center gap-x-1">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCurrentPage("your-gender")}
                className="text-xs !h-6 rounded-none"
              >
                &larr; Go
              </Button>
              Gender is Required
            </p>
          )}
          {validator.error.formErrors.fieldErrors.country && (
            <p className="text-sm text-destructive flex items-center gap-x-1">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCurrentPage("your-country")}
                className="text-xs !h-6 rounded-none"
              >
                &larr; Go
              </Button>
              Country is Required
            </p>
          )}
          {validator.error.formErrors.fieldErrors.levelOfEducation && (
            <p className="text-sm text-destructive flex items-center gap-x-1">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCurrentPage("level-of-education")}
                className="text-xs !h-6 rounded-none"
              >
                &larr; Go
              </Button>
              Level Of Education is Required
            </p>
          )}
          {validator.error.formErrors.fieldErrors.yearsOfWorkExperience && (
            <p className="text-sm text-destructive flex items-center gap-x-1">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCurrentPage("years-of-work-experience")}
                className="text-xs !h-6 rounded-none"
              >
                &larr; Go
              </Button>
              Years of Work Experience is Required
            </p>
          )}
          {validator.error.formErrors.fieldErrors.areaOfExpertise && (
            <p className="text-sm text-destructive flex items-center gap-x-1">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCurrentPage("area-of-expertise")}
                className="text-xs !h-6 rounded-none"
              >
                &larr; Go
              </Button>
              Area of Expertise is Required
            </p>
          )}
          {validator.error.formErrors.fieldErrors.currentRole && (
            <p className="text-sm text-destructive flex items-center gap-x-1">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCurrentPage("current-role")}
                className="text-xs !h-6 rounded-none"
              >
                &larr; Go
              </Button>
              Current Role is Required
            </p>
          )}
          {validator.error.formErrors.fieldErrors.workingInYourField && (
            <p className="text-sm text-destructive flex items-center gap-x-1">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCurrentPage("working-in-your-field")}
                className="text-xs !h-6 rounded-none"
              >
                &larr; Go
              </Button>
              Working Field Data is Required
            </p>
          )}

          {validator.error.formErrors.fieldErrors
            .sustainableDevelopmentGoals && (
            <p className="text-sm text-destructive flex items-center gap-x-1">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCurrentPage("sustainable-development-goal")}
                className="text-xs !h-6 rounded-none"
              >
                &larr; Go
              </Button>
              SDG is Required
            </p>
          )}

          {validator.error.formErrors.fieldErrors.mentorshipFrequency && (
            <p className="text-sm text-destructive flex items-center gap-x-1">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCurrentPage("mentorship-frequency")}
                className="text-xs !h-6 rounded-none"
              >
                &larr; Go
              </Button>
              Mentorship Frequency is Required
            </p>
          )}
        </div>
      )}

      {validator.success && (
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="secondary" size="lg" onClick={previousPage}>
            &larr; Previous
          </Button>
          <Button isLoading={isLoading} size="lg" onClick={onSave}>
            Submit &rarr;
          </Button>
        </div>
      )}
    </div>
  );
};

export default SaveInformation;
