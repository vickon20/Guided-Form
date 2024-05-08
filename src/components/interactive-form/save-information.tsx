"use client";

import { saveFormInformation } from "@/action/server";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import useInteractiveForm from "./use-interactive-form-hook";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  isIncompleteInfo: boolean;
};
const SaveInformation = ({ isIncompleteInfo }: Props) => {
  const { form, previousPage, setCurrentPage } = useInteractiveForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSave = async () => {
    if (isIncompleteInfo) return;

    setIsLoading(true);
    try {
      const response = await saveFormInformation(form);

      if (response.status === "failure" && response.data === null) {
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
      {isIncompleteInfo && (
        <div className="space-y-4 w-full h-[50vh] pb-10 overflow-auto">
          {!form.fullName && (
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
          {!form.email && (
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
          {!form.gender && (
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
          {!form.country && (
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
          {!form.levelOfEducation && (
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
          {!form.yearsOfWorkExperience && (
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
          {!form.areaOfExpertise ||
            (form.areaOfExpertise.length === 0 && (
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
            ))}
          {!form.currentRole && (
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
          {!form.workingInYourField && (
            <p className="text-sm text-destructive flex items-center gap-x-1">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setCurrentPage("working-in-your-field")}
                className="text-xs !h-6 rounded-none"
              >
                &larr; Go
              </Button>
              Field Data is Required
            </p>
          )}

          {!form.sustainableDevelopmentGoals ||
            (form.sustainableDevelopmentGoals.length === 0 && (
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
            ))}

          {!form.mentorshipFrequency && (
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

      {!isIncompleteInfo && (
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
