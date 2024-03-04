"use server";

import axios from "axios";

export async function addToWaitlist(prevState: any, formData: FormData) {
  const data = { email: formData.get("email") };

  try {
    const res = await axios.post<{ message: string }>(
      "https://harlequin-kitten-cape.cyclic.app/api/admin/addToWaitlist",
      data,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
    );

    return {
      message: res.data.message,
    };
  } catch (error) {
    return {
      error: "An error occurred. Please try again.",
    };
  }
}
