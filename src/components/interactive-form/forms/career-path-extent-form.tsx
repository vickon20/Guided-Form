"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import useInteractiveForm from "../use-interactive-form-hook";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {};

function CareerPathExtentForm({}: Props) {
  const {
    setFormData,
    nextPage,
    previousPage,
    currentPage,
    form: defaultData,
  } = useInteractiveForm();

  const [careerPathExtent, setCareerPathExtent] = useState(
    defaultData.careerPathExtent
  );
  const [isLoading, setIsLoading] = useState(false);

  async function onNext() {
    setIsLoading(true);
    setFormData({ careerPathExtent });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
    nextPage();
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-x-3 flex-wrap">
        {["1", "2", "3", "4", "5"].map((item) => (
          <div
            key={item}
            className="flex flex-col gap-y-4 items-center "
            onClick={() => setCareerPathExtent(item)}
          >
            <div
              className={cn(
                "border-[2px] size-[50px] rounded-full border-primary/50 hover:bg-primary transition-all duration-300 cursor-pointer",
                {
                  "bg-primary": careerPathExtent === item,
                }
              )}
            />
            <span className="text-clampMd font-semibold">{item}</span>
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

export default CareerPathExtentForm;
