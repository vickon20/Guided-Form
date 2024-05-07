import { InteractiveForm } from "@/components/interactive-form";
import ClientOnly from "@/components/client-only";
import SlideButtons from "@/components/interactive-form/slide-buttons";

export default function Home() {
  return (
    <section className="w-full h-[100svh] overflow-hidden relative">
      <ClientOnly>
        <InteractiveForm />
        <div className="w-full flex items-center justify-end absolute bottom-0 left-0 right-0 p-4">
          <SlideButtons />
        </div>
      </ClientOnly>
    </section>
  );
}
