import { Paths } from "@/app/_lib/paths";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <main className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">
        This cabin could not be found 🏠
      </h1>
      <Link
        href={Paths.CABINS}
        className="inline-block bg-accent-500 px-6 py-3 text-lg text-primary-800"
      >
        Back to all cabins
      </Link>
    </main>
  );
}

export default NotFound;
