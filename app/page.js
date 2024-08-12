import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";
// import { guests } from "./_lib/data-guest";

export default async function Page() {
  // const { data, error } = await supabase.from("guests").insert(guests).select();

  return (
    <main className="mt-24 ">
      <Image
        fill
        className="object-cover object-top"
        placeholder="blur"
        quality={80}
        src={bg}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 font-normal tracking-tight text-8xl text-primary-50">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="px-8 py-6 text-lg font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
