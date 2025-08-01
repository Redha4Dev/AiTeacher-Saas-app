import CompanionForm from "@/components/CompanionForm";
import NavBar from "@/components/NavBar";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 justify-center items-center">
      {canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1>Companion Builder</h1>
          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <Image src="/images/cta.svg" alt="limit" width={362} height={232} />
          <div className="cta-badge">Upgrade Your Plan</div>
          <h1>You have reached your limit</h1>
          <p>
            You have reach your tutors limit. upgrade to create more companions
            and primuim features.
          </p>
          <Link
            href="/subscription"
            className="btn-primary w-full justify-center"
          >
            Upgrade Now
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanion;
