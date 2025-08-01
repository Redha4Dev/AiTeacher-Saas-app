import React from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import { recentSessions } from "@/constants";
import { cn } from "@/lib/utils";
import CTA from "@/components/CTA";
import { getAllCompanions, getRecentSessions, getUserSessions } from "@/lib/actions/companion.actions";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentCompanions = await getRecentSessions(10);
  console.log(recentCompanions);

  return (
    <main>
      <h1 className="text-2xl ">Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          
          <CompanionCard
            {...companion}
            key={companion.id}
            color="#FFFFFF"
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recent Sessions"
          companions={recentCompanions}
          classNames="w-2/3 lg:max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
