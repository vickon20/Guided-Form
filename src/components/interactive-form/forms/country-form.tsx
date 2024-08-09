"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import CustomForm from "@/components/custom-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { countries, TCountryCode } from "countries-list";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo } from "react";
import { toast } from "sonner";
import useInteractiveForm from "../use-interactive-form-hook";
import {
  interactiveFormPartialSchema,
  TInteractiveFormPartialSchema,
} from "./zodSchema";

type Props = {};

function CountryForm({}: Props) {
  const {
    setFormData,
    nextPage,
    previousPage,
    currentPage,
    form: defaultData,
  } = useInteractiveForm();

  const form = useForm<TInteractiveFormPartialSchema>({
    resolver: zodResolver(interactiveFormPartialSchema),
    defaultValues: { country: defaultData.country },
  });

  async function onNext(values: TInteractiveFormPartialSchema) {
    if (!values.country) return toast.error("Please select a country");
    setFormData({ country: values.country });
    await new Promise((resolve) => setTimeout(resolve, 500));
    nextPage();
  }

  const isLoading = form.formState.isSubmitting;

  const countryData = useMemo(() => {
    const countryCodeArray = Object.keys(countries) as TCountryCode[];
    return countryCodeArray
      .map((countryCode) => ({
        id: countryCode,
        value: `${countries[countryCode].name} (${countryCode})`,
        title: `${countries[countryCode].name} (${countryCode})`,
      }))
      .sort((a, b) => a.value.localeCompare(b.value));
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-8">
        <CustomForm
          form={form}
          type="select"
          name="country"
          formLabel="Country"
          placeholder="Select your country"
          disabled={isLoading}
          selectData={countryData}
          selectTriggerClassName="w-full max-w-full"
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

export default CountryForm;
