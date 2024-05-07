"use client";

import useInteractiveForm from "@/components/interactive-form/use-interactive-form-hook";
import { useEffect } from "react";

const ThankYouClient = () => {
  const { resetStore } = useInteractiveForm();

  useEffect(() => resetStore(), [resetStore]);
  return <></>;
};

export default ThankYouClient;
