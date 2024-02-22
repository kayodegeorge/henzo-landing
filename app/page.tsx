import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="px-5 md:px-8">
        <div className="mx-auto mt-20 max-w-5xl">
          <h1 className="max-w-sm text-5xl font-semibold leading-[1.2] tracking-[-0.04em] text-primary-black lg:max-w-xl lg:text-[4rem]">
            The future of delivery logistics
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-[1.4] tracking-[-0.02em] text-primary-grey">
            Henzo is a logistics company that offers fast, reliable, and
            affordable delivery services in Uyo. You can track your shipment in
            real-time with our app and we offer cost effective delivery rates.
          </p>

          <div className="mt-6 flex flex-col gap-4 md:flex-row">
            <Link
              className={`${montserrat.className} flex w-full items-center justify-center gap-6 rounded-xl border border-primary-grey bg-white py-3.5 font-semibold uppercase leading-[1.4] tracking-[-0.02em]`}
              href="/"
              target="_blank"
            >
              <Image
                src="/apple-logo.svg"
                alt="apple logo"
                width={25}
                height={30}
              />
              Get on iPhone
            </Link>

            <Link
              className={`${montserrat.className} flex w-full items-center justify-center gap-6 rounded-xl border border-primary-grey bg-white py-3.5 font-semibold uppercase leading-[1.4] tracking-[-0.02em]`}
              href="/"
              target="_blank"
            >
              <Image
                src="/google-logo.svg"
                alt="Playstore Logo"
                width={25}
                height={30}
              />
              Get on Android
            </Link>
          </div>

          <div className="relative mt-20 h-72 sm:h-[38rem]">
            <div className="absolute left-0 top-0 h-72 w-3/5 overflow-hidden sm:h-[38rem] md:w-[43%]">
              <Image
                src="/3.png"
                alt="hero image"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="absolute left-0 right-0 top-0 mx-auto h-72 w-3/5 overflow-hidden sm:h-[38rem] md:w-[43%]">
              <Image
                src="/1.png"
                alt="hero image"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="absolute right-0 top-0 h-72 w-3/5 overflow-hidden sm:h-[38rem] md:w-[43%]">
              <Image
                src="/2.png"
                alt="hero image"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-primary-green/30 px-5 py-6">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
          <Link
            className="font-semibold leading-[1.4] tracking-[-0.02em]"
            href="/terms-of-use"
          >
            Terms of Service
          </Link>

          <Link
            className="font-semibold leading-[1.4] tracking-[-0.02em]"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </>
  );
}
