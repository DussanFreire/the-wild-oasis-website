import React from "react";
import Link from "next/link";

import { auth } from "../_lib/auth";
import { Paths } from "../_lib/paths";

export default async function Navigation() {
  const session = await auth();
  const userImage = session?.user?.image;

  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href={Paths.CABINS}
            className="transition-colors hover:text-accent-400"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href={Paths.ABOUT}
            className="transition-colors hover:text-accent-400"
          >
            About
          </Link>
        </li>
        {userImage ? (
          <li>
            <Link
              href={Paths.ACCOUNT}
              className="flex items-center gap-4 transition-colors hover:text-accent-400"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          </li>
        ) : (
          <li>
            <Link
              href={Paths.ACCOUNT}
              className="transition-colors hover:text-accent-400"
            >
              Guest area
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
