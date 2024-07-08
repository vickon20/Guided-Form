"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, CircleCheckBig } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { yearsOfWorkExperienceData } from "../constants";
import useInteractiveForm from "../use-interactive-form-hook";

type Props = {};

function YearsOfWorkExperience({}: Props) {
  const {
    setFormData,
    nextPage,
    previousPage,
    currentPage,
    form: defaultData,
  } = useInteractiveForm();
  const [yearsOfWorkExperience, setYearsOfWorkExperience] = useState(
    defaultData.yearsOfWorkExperience
  );
  const [isLoading, setIsLoading] = useState(false);

  async function onNext() {
    if (!yearsOfWorkExperience)
      return toast.error("Please select a year of experience");
    setIsLoading(true);
    setFormData({ yearsOfWorkExperience });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
    nextPage();
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        {yearsOfWorkExperienceData.map((item, index) => (
          <div
            key={item.value}
            className={cn(
              "flex items-center gap-x-2 text-clampMd bg-accent hover:bg-border transition-all duration-300 cursor-pointer rounded",
              {
                "bg-border": yearsOfWorkExperience === item.value,
              }
            )}
            onClick={() => setYearsOfWorkExperience(item.value)}
          >
            <span className="p-1 sm:p-2 text-white bg-primary">
              {index + 1}
            </span>
            <span>{item.title}</span>
            {yearsOfWorkExperience === item.value && (
              <CircleCheckBig className="size-[16px] sm:size-[20px] ml-auto mr-4" />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <Button
          disabled={currentPage.prev === ""}
          onClick={previousPage}
          variant="secondary"
        >
          <ChevronLeft /> Previous
        </Button>
        <Button
          disabled={currentPage.next === ""}
          type="button"
          isLoading={isLoading}
          onClick={onNext}
        >
          Next <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default YearsOfWorkExperience;
