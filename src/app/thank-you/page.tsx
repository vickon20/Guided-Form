import { Button, buttonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { db } from "@/lib/db";
import { FaceBook, LinkedIn } from "@/lib/svgs";
import { cn } from "@/lib/utils";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import ThankYouClient from "./components/thank-you-client";

type Props = {
  searchParams: {
    id: string;
  };
};

const UnAuthorized = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center text-center">
      <div className="space-y-4">
        <Heading
          heading="UnAuthorized to access this page"
          description="Please, complete the form to get access to this page"
        />
        <Link
          href={process.env.NEXT_PUBLIC_URL as string}
          className={buttonVariants({ size: "lg" })}
        >
          Complete form
        </Link>
      </div>
    </section>
  );
};

const ThankYouPage = async ({ searchParams }: Props) => {
  if (!searchParams.id) return <UnAuthorized />;
  const form = await db.guidedForm.findUnique({
    where: { id: searchParams.id },
  });

  if (!form) return <UnAuthorized />;

  return (
    <section className="flex items-center justify-center w-full">
      <ThankYouClient />
      <div className="w-full max-w-[800px] flex flex-col my-20 items-center gap-y-4 text-center shadow-border/20 shadow-xl drop-shadow-xl px-6 py-8">
        <div className="flex flex-col items-center gap-y-3">
          <CircleCheckBig className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] shrink-0 text-emerald-700" />
          <h1 className={cn("font-semibold !text-clampLg text-emerald-700")}>
            Information Saved Successfully
          </h1>
        </div>

        <p className="text-clampMd max-w-[400px] flex flex-col gap-y-2 text-muted-foreground">
          We thank you for your time and response. Your information is safe with
          us.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link
            href={"https://myguidedcareers.com"}
            className={buttonVariants({})}
          >
            Proceed to our website &rarr;
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <Link href={"#"}>
            <FaceBook width={20} fill="steelblue" />
          </Link>
          <Link href={"#"}>
            <LinkedIn width={20} fill="steelblue" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYouPage;
