"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, CircleCheckBig, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { areaOfExpertiseData } from "../constants";
import useInteractiveForm from "../use-interactive-form-hook";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {};

function AreaOfExpertise({}: Props) {
  const {
    setFormData,
    nextPage,
    previousPage,
    currentPage,
    form: defaultData,
  } = useInteractiveForm();
  const [areaOfExpertise, setAreaOfExpertise] = useState<string[]>(
    defaultData.areaOfExpertise || []
  );
  const [others, setOthers] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  async function onNext() {
    if (areaOfExpertise.length === 0)
      return toast.error("Please select area of expertise");

    setIsLoading(true);
    setFormData({ areaOfExpertise });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
    nextPage();
  }

  return (
    <div className="space-y-4 sm:space-y-8">
      <div className="w-full border p-2 min-h-[35px] max-h-[80px] overflow-auto border-dashed border-black/50 rounded flex gap-3 flex-wrap">
        {areaOfExpertise.length === 0 ? (
          <p className="text-sm text-center w-full text-muted-foreground">
            ...Please select from the list below...
          </p>
        ) : (
          areaOfExpertise.map((item) => (
            <div
              key={item}
              className="bg-foreground text-background max-w-[150px] rounded-lg flex items-center justify-center px-2 py-0.5 relative"
            >
              <span className="text-clamp2Xs w-full truncate">{item}</span>
              <span
                className="absolute -top-1.5 -right-1.5 bg-destructive rounded-full p-0.5 cursor-pointer"
                onClick={() =>
                  setAreaOfExpertise((prev) =>
                    prev.filter((exp) => exp !== item)
                  )
                }
              >
                <X className="text-destructive-foreground size-2.5 sm:size-3" />
              </span>
            </div>
          ))
        )}
      </div>

      <div className="space-y-2 sm:space-y-5 overflow-auto w-full h-full max-h-[30svh] sm:max-h-[40svh] px-2 sm:px-6">
        {areaOfExpertiseData.map((item, index) => (
          <div
            key={item}
            className={cn(
              "flex items-center gap-x-2 text-clampMd bg-accent hover:bg-border transition-all duration-300 cursor-pointer rounded"
            )}
            onClick={(e) => {
              setAreaOfExpertise((prev) =>
                prev.includes(item) ? prev : [item, ...prev]
              );
            }}
          >
            <span className="p-1 sm:p-2 text-white bg-primary">
              {index + 1}
            </span>
            <span
              className={cn(
                "border-none outline-none w-full h-full text-clampSm"
              )}
            >
              {item}
            </span>
            {areaOfExpertise.includes(item) && (
              <CircleCheckBig size={22} className="ml-auto mr-4" />
            )}
          </div>
        ))}

        <div className="space-y-1">
          <Label className="text-clampSm">Others? Please specify</Label>

          <div className="flex gap-x-1">
            <Input
              value={others}
              onChange={(e) => setOthers(e.target.value)}
              className="h-8 sm:h-10"
              type="text"
              placeholder="specify here..."
            />
            <Button
              onClick={(e) => {
                if (!others) return toast.error("Please Specify a value");
                setAreaOfExpertise((prev) => [others, ...prev]);
                setOthers("");
              }}
            >
              Add
            </Button>
          </div>
        </div>
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

export default AreaOfExpertise;
