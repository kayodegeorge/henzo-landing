import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function TermsOfUse() {
  return (
    <>
      <main className="px-5 md:px-8 lg:px-20">
        <div className="mt-6 border-b pb-20">
          <h1 className="text-4xl font-semibold leading-[1.2] text-primary-black md:text-[4rem]">
            Terms of Use
          </h1>

          <div className="mt-6 rounded-2xl border border-[#081637]/10 bg-[#F5F5F5] p-6">
            <p className="text-sm leading-[1.4] tracking-[-0.002em] text-[#8B8F9A] md:text-lg">
              Welcome to Henzo Logistics! These Terms of Service (“Terms”)
              outline the rules and guidelines for using our package delivery
              application (“App”). By accessing or using the App, you agree to
              comply with these Terms. If you do not agree, please refrain from
              using our services.
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                1. Definitions
              </h2>

              <ul className="ml-1.5 mt-2 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>App: Refers to the Henzo Logistics mobile application.</li>
                <li>User: Anyone who accesses or uses the App.</li>
                <li>
                  Services: Our package delivery services facilitated through
                  the App.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                2. Acceptance of Terms
              </h2>

              <p className="mt-2 font-medium text-[#8B8F9A]">
                By using the App, you acknowledge that you have read,
                understood, and accepted these Terms. If you disagree with any
                part of these Terms, please discontinue use.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                3. User Responsibilities
              </h2>
              <ul className="ml-1.5 mt-2 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>
                  Account Creation: You must create an account to use our
                  Services. Provide accurate and complete information during
                  registration.
                </li>
                <li>
                  Security: Keep your login credentials confidential. You are
                  responsible for all activities under your account.
                </li>
                <li>
                  Compliance: Abide by all applicable Nigerian laws and
                  regulations while using the App.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                4. Use of Services
              </h2>
              <ul className="ml-1.5 mt-2 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>
                  Delivery Requests: Submit accurate delivery requests through
                  the App.
                </li>
                <li>
                  Delivery Conditions: Ensure packages comply with legal
                  requirements and safety standards.
                </li>
                <li>
                  Payment: Pay for services as agreed upon during booking.
                </li>
                <li>
                  Feedback: Provide feedback to help us improve our services.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                5. Privacy and Data Protection
              </h2>
              <ul className="ml-1.5 mt-2 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>
                  Refer to our Privacy Policy for details on how we collect,
                  use, and protect your personal information.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                6. Service Limitations
              </h2>

              <p className="mt-2 font-medium text-[#8B8F9A]">
                The App and its content are protected by intellectual property
                laws. You may not reproduce, modify, or distribute any part
                without our consent.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                7. Intellectual Property
              </h2>

              <ul className="ml-1.5 mt-2 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>
                  Delivery Requests: Submit accurate delivery requests through
                  the App.
                </li>
                <li>
                  Delivery Conditions: Ensure packages comply with legal
                  requirements and safety standards.
                </li>
                <li>
                  Payment: Pay for services as agreed upon during booking.
                </li>
                <li>
                  Feedback: Provide feedback to help us improve our services.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                8. Termination
              </h2>

              <ul className="ml-1.5 mt-2 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>
                  We reserve the right to terminate or suspend your account if
                  you violate these Terms.
                </li>
                <li>You may terminate your account at any time.</li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                9. Dispute Resolution
              </h2>

              <ul className="ml-1.5 mt-2 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>
                  Any disputes arising from these Terms will be resolved
                  amicably.
                </li>
                <li>
                  Nigerian courts have jurisdiction over any legal actions.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                10. Termination
              </h2>

              <ul className="ml-1.5 mt-2 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>
                  We reserve the right to terminate or suspend your account if
                  you violate these Terms.
                </li>
                <li>You may terminate your account at any time.</li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                11. Contact Us
              </h2>

              <ul className="ml-1.5 mt-2 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>
                  If you have questions or concerns, please contact us at
                  support@henzologistics.com.
                </li>
                <li>Thank you for choosing Henzo Logistics</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* <footer className="pb-10 pt-[7.5rem]">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Henzo Logo" width={247} height={114} />
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <Link
            className={`${montserrat.className} mx-auto flex w-full max-w-80 items-center justify-center gap-6 rounded-xl border border-primary-grey bg-white py-3.5 font-semibold uppercase leading-[1.4] tracking-[-0.02em]`}
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
            className={`${montserrat.className} mx-auto flex w-full max-w-80  items-center justify-center gap-6 rounded-xl border border-primary-grey bg-white py-3.5 font-semibold uppercase leading-[1.4] tracking-[-0.02em]`}
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
      </footer> */}
    </>
  );
}
