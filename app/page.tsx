import { Facebook, Twitter } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <main className="px-5 md:px-8">
        <div className="mx-auto mt-20 max-w-5xl">
          <h1 className="max-w-sm text-5xl font-semibold leading-[1.2] text-primary-black md:max-w-xl md:text-[4rem]">
            The future of delivery logistics
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-[1.4] tracking-[-0.02em] text-primary-grey">
            Henzo is a logistics company that offers fast, reliable, and
            affordable delivery services in Uyo. You can track your shipment in
            real-time with our app and we offer cost effective delivery rates.
          </p>

          <div className="mt-6 max-w-xl space-y-4">
            <Input placeholder="Enter your email" />

            <Button>Join the Waitlist</Button>
          </div>

          {/* <div className="mt-6 flex flex-col gap-4 md:flex-row">
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
          </div> */}

          <div className="relative mt-20 h-72 sm:h-[38rem]">
            <div className="absolute left-0 top-0 h-72 w-7/12 overflow-hidden sm:h-[38rem] md:w-3/5 lg:w-[44%]">
              <Image
                src="/3.png"
                alt="hero image"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="absolute left-0 right-0 top-0 mx-auto h-72 w-7/12 overflow-hidden sm:h-[38rem] md:w-3/5 lg:w-[44%]">
              <Image
                src="/1.png"
                alt="hero image"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="absolute right-0 top-0 h-72 w-7/12 overflow-hidden sm:h-[38rem] md:w-3/5 lg:w-[44%]">
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

      <div className="absolute left-0 top-0 -z-10 hidden h-full w-full bg-pattern bg-cover bg-top bg-no-repeat opacity-40 md:block md:bg-auto" />

      <footer className="bg-primary-green/30 px-[200px] py-10">
        <Link href="/">
          <Image src="/logo.svg" alt="Henzo Logo" width={247} height={110} />
        </Link>
        <div className="mx-auto mt-3 flex w-full max-w-5xl gap-8">
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
          <Link
            className="font-semibold leading-[1.4] tracking-[-0.02em]"
            href="/privacy-policy"
          >
            info@henzologistics.com
          </Link>
        </div>
        <div className="mt-5 flex w-full gap-8">
          <Link href="/">
            <Facebook size={15} />
          </Link>
          <Link href="/">
            <Twitter size={15} />
          </Link>
          <Link href="/">
            <Image src="/logo.svg" alt="Henzo Logo" width={24} height={24} />
          </Link>
          <Link href="/">
            <Image src="/logo.svg" alt="Henzo Logo" width={24} height={24} />
          </Link>
          <Link href="/">
            <Image src="/logo.svg" alt="Henzo Logo" width={24} height={24} />
          </Link>
        </div>
      </footer>
    </>
  );
}
