import { InteractiveForm } from "@/components/interactive-form";
import ClientOnly from "@/components/client-only";
import SlideButtons from "@/components/interactive-form/slide-buttons";
import { HeroHighlight } from "@/components/interactive-form/hero-highlights";

export default function Home() {
  return (
    <HeroHighlight>
      <section className="w-full h-[calc(100dvh)] overflow-auto sm:overflow-hidden relative flex flex-col">
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
