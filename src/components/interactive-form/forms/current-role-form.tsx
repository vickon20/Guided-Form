"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import CustomForm from "@/components/custom-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import useInteractiveForm from "../use-interactive-form-hook";
import {
  TInteractiveFormPartialSchema,
  interactiveFormPartialSchema,
} from "./zodSchema";

type Props = {};

function CurrentRoleForm({}: Props) {
  const {
    setFormData,
    nextPage,
    currentPage,
    previousPage,
    form: defaultData,
  } = useInteractiveForm();

  const form = useForm<TInteractiveFormPartialSchema>({
    resolver: zodResolver(interactiveFormPartialSchema),
    defaultValues: { currentRole: defaultData.currentRole },
  });

  async function onNext(values: TInteractiveFormPartialSchema) {
    if (!values.currentRole)
      return toast.error("Your Current Role is required");
    setFormData({ currentRole: values.currentRole });
    await new Promise((resolve) => setTimeout(resolve, 500));
    nextPage();
  }

  const isLoading = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-8">
        <CustomForm
          form={form}
          type="text"
          name="currentRole"
          formLabel="Current Role"
          disabled={isLoading}
          placeholder="Your current role here..."
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

export default CurrentRoleForm;
