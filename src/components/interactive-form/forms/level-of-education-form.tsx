"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";
import { levelOfEducationData } from "../constants";
import useInteractiveForm from "../use-interactive-form-hook";
import { TInteractiveFormSchema } from "./zodSchema";
import { ChevronLeft, ChevronRight, CircleCheckBig } from "lucide-react";

type Props = {};

function LevelOfEducationForm({}: Props) {
  const {
    setFormData,
    nextPage,
    previousPage,
    currentPage,
    form: defaultData,
  } = useInteractiveForm();

  const [levelOfEducation, setLevelOfEducation] = useState(
    defaultData.levelOfEducation
  );
  const [isLoading, setIsLoading] = useState(false);

  async function onNext() {
    if (!levelOfEducation)
      return toast.error("Please select a level Of Education");
    setIsLoading(true);
    setFormData({ levelOfEducation });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
    nextPage();
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        {levelOfEducationData.map((item, index) => (
          <div
            key={item.value}
            className={cn(
              "flex items-center gap-x-2 text-clampMd bg-accent hover:bg-border transition-all duration-300 cursor-pointer rounded",
              {
                "bg-border": levelOfEducation === item.value,
              }
            )}
            onClick={() => setLevelOfEducation(item.value)}
          >
            <span className="p-2 text-white bg-primary">{index + 1}</span>
            <span>{item.value}</span>
            {levelOfEducation === item.value && (
              <CircleCheckBig size={22} className="ml-auto mr-4" />
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

export default LevelOfEducationForm;
