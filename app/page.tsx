import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <main className="px-5 md:px-8">
        <div className="mt-20">
          <div className="md:mx-auto md:max-w-xl lg:max-w-5xl">
            <h1 className="max-w-sm text-[2rem] font-semibold leading-[1.2] tracking-[-0.02em] text-primary-black md:max-w-xl md:text-[4rem] md:tracking-[-0.06em]">
              The future of delivery logistics
            </h1>

            <p className="mt-6 max-w-xl font-medium leading-[1.4] tracking-[-0.02em] text-primary-grey md:text-lg">
              Henzo is a logistics company that offers fast, reliable, and
              affordable delivery services in Uyo. You can track your shipment
              in real-time with our app and we offer cost effective delivery
              rates.
            </p>

            <div className="mt-6 gap-4 lg:flex">
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
                className={`${montserrat.className} mt-3 flex w-full items-center justify-center gap-6 rounded-xl border border-primary-grey bg-white py-3.5 font-semibold uppercase leading-[1.4] tracking-[-0.02em]`}
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
          </div>

          <div className="relative mx-auto mt-20 h-72 max-w-5xl sm:h-[38rem]">
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

      {/* background line stuff */}
      <div className="absolute left-0 top-0 -z-10 hidden h-full w-full bg-pattern bg-cover bg-top bg-no-repeat opacity-40 md:block md:bg-auto" />

      <Footer />
    </>
  );
}
