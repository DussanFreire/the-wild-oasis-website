import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";
import { Paths } from "./_lib/paths";

export default function Home() {
  return (
    <main className=" mt-24">
      <Image
        fill
        src={bg}
        quality={80}
        placeholder="blur"
        alt="Mountains and forests with two cabins"
        className="object-cover object-top"
      />
      <div className="relative z-10 text-center">
        <h1 className="mb-10 text-8xl font-normal tracking-tight text-primary-50">
          Welcome to paradise.
        </h1>
        <Link
          href={Paths.CABINS}
          className="bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
