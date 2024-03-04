import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function PrivacyPolicy() {
  return (
    <>
      <main className="px-5 md:px-8 lg:px-20">
        <div className="mt-6 border-b pb-20">
          <h1 className="text-4xl font-semibold leading-[1.2] text-primary-black md:text-[4rem]">
            Privacy policy
          </h1>

          <div className="mt-6 rounded-2xl border border-[#081637]/10 bg-[#F5F5F5] p-6">
            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                1. Introduction
              </h2>

              <p className="mt-2 font-medium text-[#8B8F9A]">
                Henzo Logistics (“we,” “us,” or “our”) is committed to
                protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy outlines how we
                collect, use, disclose, and protect your data when you use our
                package delivery service app. By using our app, you agree to the
                terms outlined in this policy.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                2. Information We Collect
              </h2>

              <p className="mt-2 font-medium text-[#8B8F9A]">
                We collect the following types of information:
              </p>

              <ul className="ml-1.5 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>
                  Personal Information: This includes your name, contact
                  details, address, and payment information.
                </li>
                <li>
                  Delivery Details: Information related to your packages,
                  delivery addresses, and tracking history.
                </li>
                <li>
                  Device Information: We collect data about the device you use
                  to access our app, including IP address, browser type, and
                  operating system.
                </li>
                <li>
                  Location Data: We may collect your location data to provide
                  accurate delivery services.
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                3. How We Use Your Information
              </h2>

              <p className="mt-2 font-medium text-[#8B8F9A]">
                We use your information for the following purposes:
              </p>

              <ul className="ml-1.5 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>
                  Service Delivery: To process and deliver packages efficiently.
                </li>
                <li>
                  Customer Support: To address inquiries, resolve issues, and
                  improve our services.
                </li>
                <li>
                  Analytics: To analyze app usage and enhance user experience.
                </li>
                <li>
                  Marketing: To send promotional offers and updates (you can opt
                  out at any time).
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                4. Data Retention
              </h2>

              <p className="mt-2 font-medium text-[#8B8F9A]">
                We retain your information for as long as necessary to fulfill
                the purposes outlined in this policy or as required by law.z
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                5. Data Security
              </h2>

              <p className="mt-2 font-medium text-[#8B8F9A]">
                We implement security measures to protect your data from
                unauthorized access, alteration, or disclosure. However, no
                method of transmission over the internet is entirely secure, and
                we cannot guarantee absolute security.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                6. Sharing Your Information
              </h2>

              <p className="mt-2 font-medium text-[#8B8F9A]">
                We may share your information with:
              </p>

              <ul className="ml-1.5 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>Delivery Partners: To facilitate package delivery.</li>
                <li>
                  Service Providers: To assist with app development, analytics,
                  and customer support.
                </li>
                <li>
                  Legal Authorities: When required by law or to protect our
                  rights.
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                7. Your Rights
              </h2>

              <p className="mt-2 font-medium text-[#8B8F9A]">
                You have the right to:
              </p>

              <ul className="ml-1.5 list-inside list-disc font-medium text-[#8B8F9A]">
                <li>Access: Request access to your personal information.</li>
                <li>Correction: Correct any inaccuracies in your data.</li>
                <li>
                  Deletion: Request deletion of your data (subject to legal
                  requirements).
                </li>
                <li>Withdraw Consent: Opt out of marketing communications.</li>
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                8. Changes to this Policy
              </h2>

              <p className="mt-2 font-medium text-[#8B8F9A]">
                We may update this Privacy Policy periodically. Any changes will
                be posted on our app.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold leading-[1.4]">
                9. Contact Us
              </h2>

              <p className="mt-2 font-medium text-[#8B8F9A]">
                If you have questions or concerns about our privacy practices,
                please contact us at contact@henzologistics.com. <br /> Thank
                you for trusting Henzo Logistics with your package deliveries!
                📦🚚
              </p>
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
