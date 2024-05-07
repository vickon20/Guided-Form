"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, CircleCheckBig } from "lucide-react";
import { useState } from "react";
import { workingInYourFieldData } from "../constants";
import useInteractiveForm from "../use-interactive-form-hook";
import { toast } from "sonner";

const excludedEditable = workingInYourFieldData.filter(
  (item) => item !== "Others (please specify)"
);

type Props = {};

function WorkingInYourField({}: Props) {
  const {
    setFormData,
    nextPage,
    previousPage,
    currentPage,
    form: defaultData,
  } = useInteractiveForm();

  const [workingFieldData, setWorkingFieldData] = useState(
    defaultData.workingInYourField || ""
  );
  const [others, setOthers] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  async function onNext() {
    let newWorkingFieldData = workingFieldData;

    if (!!others && others.startsWith("Oth")) {
      newWorkingFieldData = "";
    } else if (!!others && !others.startsWith("Oth")) {
      newWorkingFieldData = others;
    }

    if (!newWorkingFieldData) return toast.error("Please select a field");

    setIsLoading(true);
    setFormData({ workingInYourField: newWorkingFieldData });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
    nextPage();
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        {workingInYourFieldData.map((item, index) => {
          const excluded = excludedEditable.includes(item);
          return (
            <div
              key={item}
              className={cn(
                "flex items-center gap-x-2 text-clampMd bg-accent hover:bg-border transition-all duration-300 rounded cursor-pointer",
                {
                  "bg-border": workingFieldData.includes(item),
                }
              )}
              onClick={(e) => {
                setOthers("");
                setWorkingFieldData(item);
              }}
            >
              <span className="p-1 sm:p-2 text-white bg-primary">
                {index + 1}
              </span>
              <span
                suppressContentEditableWarning
                contentEditable={!excluded}
                className={cn(
                  "border-none outline-none w-full h-full text-sm sm:text-clampSm",
                  {
                    "max-w-[220px] border-[2px] px-1 border-dashed border-primary/20":
                      !excluded,
                  }
                )}
                onBlur={(e) => setOthers(e.target.innerText)}
              >
                {item}
              </span>
              {workingFieldData === item && (
                <CircleCheckBig className="size-[16px] sm:size-[20px] ml-auto mr-4" />
              )}
            </div>
          );
        })}
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

export default WorkingInYourField;
