import Link from "next/link";
import React from "react";
import { Paths } from "../_lib/paths";

function Page() {
  return (
    <div className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">
        Thank you for your reservation!
      </h1>
      <Link
        href={Paths.RESERVATIONS}
        className="inline-block text-xl text-accent-500 underline"
      >
        Manage your reservations &rarr;
      </Link>
    </div>
  );
}

export default Page;
