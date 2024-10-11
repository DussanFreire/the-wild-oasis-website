import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { Paths } from "../_lib/paths";
import { PAGE_NAME } from "../_lib/pageConstants";
function Logo() {
  return (
    <Link href={Paths.ROOT} className="z-10 flex items-center gap-4">
      <Image src={logo} height="60" width="60" alt={`${PAGE_NAME} logo`} />
      <span className="text-xl font-semibold text-primary-100">
        {PAGE_NAME}
      </span>
    </Link>
  );
}

export default Logo;
