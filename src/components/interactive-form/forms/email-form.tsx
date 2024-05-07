"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import CustomForm from "@/components/custom-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useInteractiveForm from "../use-interactive-form-hook";
import { TInteractiveFormSchema, interactiveFormSchema } from "./zodSchema";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

type Props = {};

function EmailForm({}: Props) {
  const {
    setFormData,
    nextPage,
    previousPage,
    currentPage,
    form: defaultData,
  } = useInteractiveForm();
  const form = useForm<TInteractiveFormSchema>({
    resolver: zodResolver(interactiveFormSchema),
    defaultValues: { email: defaultData.email },
  });

  async function onNext(values: TInteractiveFormSchema) {
    if (!values.email) return toast.error("Email is required");
    setFormData({ email: values.email });
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
          name="email"
          formLabel="Email"
          disabled={isLoading}
          placeholder="Your email here..."
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

export default EmailForm;
