"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

import { addToWaitlist } from "@/app/actions";
import { Input } from "@/components/ui/input";

import SubmitButton from "./submit-button";

const initialState = {
  message: "",
};

export default function WaitlistForm() {
  const [state, formAction] = useFormState(addToWaitlist, initialState);

  useEffect(() => {
    if (state.message) {
      toast.success(<SuccessMessage />);
    }

    if (state.error) {
      toast.error(state.error);
    }
  }, [state.error, state.message]);

  return (
    <form action={formAction} className="space-y-4">
      <label className="sr-only" htmlFor="email">
        Email
      </label>

      <Input
        name="email"
        placeholder="Enter your email"
        required
        type="email"
      />

      <SubmitButton />
    </form>
  );
}

const SuccessMessage = () => {
  return (
    <div className="flex items-center gap-6">
      <CheckIcon />
      <div>
        <p className="font-semibold leading-[1.4] tracking-[-0.02em]">
          A toast to your success 🎉
        </p>
        <p className="leading-[1.6] text-[#8B8F9A]">
          You’ve been added to the waitlist succesfully.
        </p>
      </div>
      ,
    </div>
  );
};

const CheckIcon = () => {
  return (
    <svg
      width="24"
      height="40"
      viewBox="0 0 24 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 9C5.92487 9 1 13.9249 1 20C1 26.0751 5.92487 31 12 31C18.0751 31 23 26.0751 23 20C23 13.9249 18.0751 9 12 9ZM17.2071 17.7071C17.5976 17.3166 17.5976 16.6834 17.2071 16.2929C16.8166 15.9024 16.1834 15.9024 15.7929 16.2929L10.5 21.5858L8.20711 19.2929C7.81658 18.9024 7.18342 18.9024 6.79289 19.2929C6.40237 19.6834 6.40237 20.3166 6.79289 20.7071L9.79289 23.7071C10.1834 24.0976 10.8166 24.0976 11.2071 23.7071L17.2071 17.7071Z"
        fill="#44B342"
      />
    </svg>
  );
};
