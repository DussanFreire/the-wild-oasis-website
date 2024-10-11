import React from "react";
import Image from "next/image";
import Link from "next/link";

import about1 from "@/public/about-1.jpg";
import { Paths } from "../_lib/paths";
import { PAGE_NAME, WELCOME_PAGE_TEXT } from "../_lib/pageConstants";

export const metadata = {
  title: "About",
};

export const revalidate = 86400;

export default async function Page() {
  return (
    <div className="grid grid-cols-5 items-center gap-x-24 gap-y-32 text-lg">
      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-accent-400">
          Welcome to {PAGE_NAME}
        </h1>

        <div className="space-y-8">
          <p>{WELCOME_PAGE_TEXT.WELCOME_DESC_1}</p>
          <p>{WELCOME_PAGE_TEXT.WELCOME_DESC_2}</p>
          <p>{WELCOME_PAGE_TEXT.WELCOME_DESC_3}</p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={about1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative col-span-2 aspect-square">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-accent-400">
          {WELCOME_PAGE_TEXT.ABOUT_INFO_TITLE}
        </h1>

        <div className="space-y-8">
          <p>{WELCOME_PAGE_TEXT.ABOUT_INFO_1}</p>
          <p>{WELCOME_PAGE_TEXT.ABOUT_INFO_2}</p>

          <div>
            <Link
              href={Paths.CABINS}
              className="mt-4 inline-block bg-accent-500 px-8 py-5 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
            >
              {WELCOME_PAGE_TEXT.ABOUT_INFO_BUTTON}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
