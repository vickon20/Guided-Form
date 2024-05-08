"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { sdgData } from "../constants";
import useInteractiveForm from "../use-interactive-form-hook";

type Props = {};

function SustainableDevelopmentGoalsForm({}: Props) {
  const {
    setFormData,
    nextPage,
    previousPage,
    currentPage,
    form: defaultData,
  } = useInteractiveForm();

  const [sdgValue, setSdgValue] = useState(
    defaultData.sustainableDevelopmentGoals || []
  );
  const [isLoading, setIsLoading] = useState(false);

  async function onNext() {
    if (sdgValue.length === 0) return toast.error("Please select an SDG");

    setIsLoading(true);
    setFormData({
      sustainableDevelopmentGoals: sdgValue,
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
    nextPage();
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center flex-wrap justify-center gap-3 overflow-auto h-full max-h-[300px] sm:max-h-[400px] p-2">
        {sdgData.map((item, index) => (
          <div
            key={item.title + index}
            className={cn(
              "flex items-center gap-x-2 text-clampMd bg-accent hover:bg-border transition-all duration-300 cursor-pointer rounded relative h-[100px] sm:h-[150px] aspect-square overflow-hidden ",
              {
                "outline-primary outline-dashed outline-[2px] outline-offset-1 brightness-75":
                  sdgValue.includes(item.title),
              }
            )}
            onClick={() =>
              setSdgValue((prev) => {
                if (prev.includes(item.title)) {
                  return prev.filter((val) => val !== item.title);
                }
                return [...prev, item.title];
              })
            }
          >
            <Image
              src={item.href}
              alt="SDG-image"
              fill
              className="w-full h-full object-contain"
            />
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

export default SustainableDevelopmentGoalsForm;
