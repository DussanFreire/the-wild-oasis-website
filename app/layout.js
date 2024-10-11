import { Josefin_Sans as josefinSans } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_contexts/ReservationContext";
import { PAGE_NAME } from "./_lib/pageConstants";

const josefin = josefinSans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: `%s - ${PAGE_NAME}`,
    default: `Welcome - ${PAGE_NAME}`,
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forest",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} flex min-h-screen flex-col bg-primary-950 text-primary-100`}
      >
        <Header />
        <div className="grid   flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
