"use client";

import { SpiralPointer } from "@/lib/svgs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import GuidedLogoComponent from "../guided-logo-component";
import { fmVariants } from "./constants";
import { TPageId } from "./use-interactive-form-hook";
import SlideButtons from "./slide-buttons";

type Props = {
  sectionId: TPageId;
  heading: string;
  description?: string;
  subDescription?: string;
  children: React.ReactNode;
};

const FormSection = ({
  sectionId,
  children,
  heading,
  description,
  subDescription,
}: Props) => {
  const otherSection =
    sectionId === "home" ||
    sectionId === "learn-about-qualification" ||
    sectionId === "why-you-do-what-you-do" ||
    sectionId === "save-information";

  return (
    <motion.section
      className={cn("w-full flex flex-col flex-1", {
        "lg:flex-row ": otherSection,
        "items-center justify-center": !otherSection,
      })}
      initial={fmVariants.viewOpacity.initial}
      whileInView={fmVariants.viewOpacity.whileInView}
      viewport={fmVariants.viewOpacity.viewport}
      transition={fmVariants.transition}
    >
      {otherSection && (
        <motion.aside
          className="flex-[0.4] lg:flex-[0.5] bg-muted w-full h-full relative"
          initial={fmVariants.viewOpacity.initial}
          whileInView={fmVariants.viewOpacity.whileInView}
          viewport={fmVariants.viewOpacity.viewport}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Image
            src={
              sectionId === "home"
                ? "/students.jpeg"
                : sectionId === "learn-about-qualification"
                ? "/qualification.jpg"
                : sectionId === "why-you-do-what-you-do"
                ? "/motivation.jpg"
                : sectionId === "save-information"
                ? "/thank-you.jpg"
                : "/guided-hero.jpeg"
            }
            alt="Image"
            fill
            className={cn("h-full w-full object-cover brightness-[0.5]")}
          />
        </motion.aside>
      )}

      <aside
        className={cn("flex flex-1 flex-col h-full w-full", {
          "flex-[0.6] lg:flex-[0.5]": otherSection,
        })}
      >
        <motion.div
          className="flex justify-center flex-1 gap-y-2 flex-col h-full w-full relative max-w-[800px] mx-auto px-6"
          initial={fmVariants.viewMotion.initial}
          whileInView={fmVariants.viewMotion.whileInView}
          viewport={fmVariants.viewMotion.viewport}
          transition={fmVariants.transition}
          key={sectionId}
        >
          <GuidedLogoComponent
            logoWidth={80}
            logoFill="#377fb9"
            footPrintClassName="text-[#377fb9]"
            className="w-fit sm:mb-4 bg-transparent hover:bg-transparent !p-0"
          />
          <SpiralPointer width={30} className="sm:-ml-4" />
          <h2 className="text-clampMd sm:!text-clampBase font-semibold">
            {heading}
          </h2>
          {description && (
            <p className="text-muted-foreground tracking-wide text-clampMd max-w-prose">
              {description}
            </p>
          )}
          {subDescription && (
            <p className="text-muted-foreground tracking-wide text-clampSm max-w-prose">
              {subDescription}
            </p>
          )}
          <div className="my-4">{children}</div>
        </motion.div>

        <div className="w-full flex items-center justify-end px-4 py-2">
          <SlideButtons />
        </div>
      </aside>
    </motion.section>
  );
};

export default FormSection;
