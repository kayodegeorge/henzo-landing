"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      className={cn({ "opacity-30": pending })}
      disabled={pending}
      type="submit"
    >
      {pending ? (
        <div className="flex items-center justify-center space-x-1">
          <span className="sr-only">Loading...</span>
          <div className="h-3 w-3 animate-pulse rounded-full bg-[#081637] [animation-delay:-0.5s]"></div>
          <div className="h-3 w-3 animate-pulse rounded-full bg-[#081637] [animation-delay:-0.25s]"></div>
          <div className="h-3 w-3 animate-pulse rounded-full bg-[#081637]"></div>
        </div>
      ) : (
        "Join Waitlist"
      )}
    </Button>
  );
}
