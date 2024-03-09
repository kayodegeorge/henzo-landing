"use client";

import { AlignRight, Mail, MessageCircleMore, Phone } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="flex items-center justify-between px-5 py-6 md:px-8">
      <Link href="/">
        <Image src="/logo.svg" alt="Henzo Logo" width={88} height={40} />
      </Link>

      <Link
        className="font-medium leading-[1.4] tracking-[-0.02em] md:hidden"
        href="/contact"
      ></Link>

      {/* <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <div className="hidden h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-primary-green/30 lg:flex">
            <AlignRight className="h-6 w-6" />
          </div>

          <div className="text-lg font-semibold leading-[1.4] tracking-[-0.02em] text-[#44B242] underline lg:hidden">
            Contact Us
          </div>
        </SheetTrigger>

        <SheetContent>
          <div className="flex h-full flex-col justify-between">
            <div className="space-y-6 md:space-y-10">
              <div className="flex items-center gap-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-green/30">
                  <Mail className="h-6 w-6" />
                </div>

                <Link
                  className="text-xl font-semibold leading-[1.2] tracking-[-0.04em] hover:text-[#44B242] hover:underline md:text-4xl"
                  href="mailto:info@henzologistics.com"
                >
                  Email us
                </Link>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-green/30">
                  <MessageCircleMore className="h-6 w-6" />
                </div>

                <Link
                  className="text-xl font-semibold leading-[1.2] tracking-[-0.04em] hover:text-[#44B242] hover:underline md:text-4xl"
                  href="/"
                >
                  Chat with us
                </Link>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-green/30">
                  <Phone className="h-6 w-6" />
                </div>

                <Link
                  className="text-xl font-semibold leading-[1.2] tracking-[-0.04em] hover:text-[#44B242] hover:underline md:text-4xl"
                  href="/"
                >
                  Call us
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
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
          </div>
        </SheetContent>
      </Sheet> */}
      <Link
        href="https://facebook.com"
        className="text-primary-green underline"
      >
        Contact us
      </Link>
    </nav>
  );
}
