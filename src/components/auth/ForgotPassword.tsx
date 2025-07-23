"use client";

import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

type FormData = { email: string };

export function ForgotPassword() {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();
  const qs = useSearchParams();
  const sent = qs.get("sent");

  const onSubmit = async (data: FormData) => {
    console.log("data onSubmit", data);
    await fetch("/api/auth/request-password-reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: data.email }),
    });
    // router.replace("/auth/forgot-password?sent=1");
  };

  return (
    <main className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-semibold mb-4">Forgot your password?</h1>

      {sent ? (
        <p className="max-w-sm text-center">
          If an account exists for that e-mail, we’ve sent a link to reset your
          password. Check your inbox!
        </p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 w-full max-w-sm"
        >
          <label className="flex flex-col gap-1">
            E-mail
            <input
              type="email"
              required
              {...register("email", { required: true })}
              className="border rounded px-2 py-1"
            />
          </label>
          <button
            type="submit"
            className="rounded bg-blue-600 text-white py-2 hover:bg-blue-700"
          >
            Send reset link
          </button>
        </form>
      )}
    </main>
  );
}
