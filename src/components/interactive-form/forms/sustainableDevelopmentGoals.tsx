"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import useInteractiveForm from "../use-interactive-form-hook";
import { Form } from "@/components/ui/form";
import CustomForm from "@/components/custom-form";
import { useForm } from "react-hook-form";
import { TInteractiveFormSchema, interactiveFormSchema } from "./zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

function SustainableDevelopmentGoalsForm({}: Props) {
  const {
    setFormData,
    nextPage,
    previousPage,
    currentPage,
    form: defaultData,
  } = useInteractiveForm();

  const form = useForm<TInteractiveFormSchema>({
    resolver: zodResolver(interactiveFormSchema),
    defaultValues: {
      sustainableDevelopmentGoals: defaultData.sustainableDevelopmentGoals,
    },
  });

  async function onNext(values: TInteractiveFormSchema) {
    if (!values.sustainableDevelopmentGoals)
      return toast.error("Please select a value");
    setFormData({
      sustainableDevelopmentGoals: values.sustainableDevelopmentGoals,
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    nextPage();
  }

  const isLoading = form.formState.isLoading;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-8">
        <CustomForm
          form={form}
          type="text"
          name="sustainableDevelopmentGoals"
          formLabel="SDG"
          disabled={isLoading}
          placeholder="type here..."
          isRequired
        />

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
            type="submit"
            isLoading={isLoading}
          >
            Next <ChevronRight />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SustainableDevelopmentGoalsForm;
