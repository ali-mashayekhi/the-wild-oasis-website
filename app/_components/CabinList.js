import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";
import { notFound } from "next/navigation";
// import { unstable_noStore as noStore } from "next/cache";

export default async function CabinList({ filter }) {
  // noStore();

  const cabins = await getCabins();
  if (!cabins.length) return null;

  let displayedCabins;

  if (filter === "all") displayedCabins = cabins;
  else if (filter === "small") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  } else if (filter === "medium") {
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  } else if (filter === "large") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  } else {
    notFound();
  }

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
