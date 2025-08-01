import CompanionCard from "@/components/CompanionCard";
import SearchFilter from "@/components/SearchFilter";
import SearchInput from "@/components/SearchInput";
import { getAllCompanions } from "@/lib/actions/companion.actions";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filter = await searchParams;
  const subject = filter.subject ? filter.subject : "";
  const topic = filter.topic ? filter.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  console.log(companions);

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Tutors library</h1>
        <div className="gap-4 flex">
          <SearchInput />
          <SearchFilter />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard key={companion.id} {...companion} />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
