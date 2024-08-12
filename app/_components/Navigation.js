import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  const session = await auth();

  // console.log(session);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-400"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.name ? (
            <Link
              href="/account"
              className="flex items-center gap-4 transition-colors hover:text-accent-400"
            >
              <Image
                className="rounded-full"
                width={32}
                height={32}
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="transition-colors hover:text-accent-400"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
