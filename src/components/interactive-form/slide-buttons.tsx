"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import useInteractiveForm from "./use-interactive-form-hook";
import GuidedLogoComponent from "../guided-logo-component";

type Props = {};

const SlideButtons = ({}: Props) => {
  const { currentPage, nextPage, firstPage, lastPage, previousPage, pages } =
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
          title="first page"
          icon={<ChevronsLeft />}
          className={buttonVariants({ className: "rounded-none p-2" })}
        />
        <Button
          disabled={currentPage.next === ""}
          onClick={lastPage}
          title="last page"
          icon={<ChevronsRight />}
          className={buttonVariants({ className: "rounded-none p-2" })}
        />
      </div>

      <GuidedLogoComponent className="max-sm:hidden" />
    </div>
  );
};

export default SlideButtons;
