import { InteractiveForm } from "@/components/interactive-form";
import ClientOnly from "@/components/client-only";
import SlideButtons from "@/components/interactive-form/slide-buttons";
import { HeroHighlight } from "@/components/interactive-form/hero-highlights";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <HeroHighlight>
      <section
        className={cn(
          "w-full h-screen overflow-auto sm:overflow-hidden relative flex flex-col",
          "h-[calc(100dvh)]"
        )}
      >
        <ClientOnly>
          <InteractiveForm />
          <div className="w-full flex items-center justify-end static sm:absolute bottom-0 right-0  p-4">
            <SlideButtons />
          </div>
        </ClientOnly>
      </section>
    </HeroHighlight>
  );
}
