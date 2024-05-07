import { GuidedLogo } from "@/lib/svgs";
import { Footprints } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  footPrintSize?: number;
  footPrintClassName?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoFill?: string;
};

const GuidedLogoComponent = ({
  className,
  footPrintSize,
  footPrintClassName,
  logoHeight,
  logoWidth,
  logoFill,
}: Props) => {
  return (
    <span
      className={buttonVariants({
        variant: "secondary",
        className: cn(
          "!text-clampMd font-semibold flex items-center gap-x-1",
          className
        ),
      })}
    >
      <Footprints
        size={footPrintSize || undefined}
        className={cn("", footPrintClassName)}
      />
      <GuidedLogo
        width={logoWidth || 60}
        height={logoHeight || 44}
        fill={logoFill || "#000"}
      />
    </span>
  );
};

export default GuidedLogoComponent;
