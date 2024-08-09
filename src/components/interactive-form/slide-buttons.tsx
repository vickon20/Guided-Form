"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronsLeft, ChevronsRight, Power } from "lucide-react";
import useInteractiveForm from "./use-interactive-form-hook";
import GuidedLogoComponent from "../guided-logo-component";

type Props = {};

const SlideButtons = ({}: Props) => {
  const { currentPage, firstPage, lastPage, resetStore, pages } =
    useInteractiveForm();

  return (
    <div className="flex items-center gap-3">
      <p>
        <span className="p-2 bg-primary text-white text-clampMd">
          {" "}
          {pages.reduce((acc, item) => (acc += item.question), 0)}
        </span>{" "}
        Questions
      </p>
      <div className="divide-x-4">
        <Button
          disabled={currentPage.prev === ""}
          onClick={firstPage}
          title="First page"
          icon={<ChevronsLeft />}
          className="rounded-none p-2"
        />
        <Button
          onClick={resetStore}
          title="Reset"
          variant="destructive"
          icon={<Power />}
          className="rounded-none p-2"
        />
        <Button
          disabled={currentPage.next === ""}
          onClick={lastPage}
          title="Last page"
          icon={<ChevronsRight />}
          className="rounded-none p-2"
        />
      </div>

      <GuidedLogoComponent className="max-sm:hidden" />
    </div>
  );
};

export default SlideButtons;
