"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, CircleCheckBig } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { mentorshipFrequencyData } from "../constants";
import useInteractiveForm from "../use-interactive-form-hook";

type Props = {};

function MentorshipFrequencyForm({}: Props) {
  const {
    setFormData,
    nextPage,
    previousPage,
    currentPage,
    form: defaultData,
  } = useInteractiveForm();
  const [mentorshipFrequency, setMentorshipFrequency] = useState(
    defaultData.mentorshipFrequency
  );
  const [isLoading, setIsLoading] = useState(false);

  async function onNext() {
    if (!mentorshipFrequency)
      return toast.error("Please select a mentorship frequency");
    setIsLoading(true);
    setFormData({ mentorshipFrequency });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
    nextPage();
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        {mentorshipFrequencyData.map((item, index) => (
          <div
            key={item.value}
            className={cn(
              "flex items-center gap-x-2 text-clampMd bg-accent hover:bg-border transition-all duration-300 cursor-pointer rounded",
              {
                "bg-border": mentorshipFrequency === item.value,
              }
            )}
            onClick={() => setMentorshipFrequency(item.value)}
          >
            <span className="p-1 sm:p-2 text-white bg-primary">
              {index + 1}
            </span>
            <span>{item.title}</span>
            {mentorshipFrequency === item.value && (
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

export default MentorshipFrequencyForm;
