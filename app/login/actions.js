"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function login(formData) {
  const supabase = await createClient();

  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    redirect(
      "/login?error=Email and password are required.",
    );
  }

  const { error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    redirect(
      `/login?error=${encodeURIComponent(
        error.message,
      )}`,
    );
  }

  revalidatePath("/", "layout");

  redirect("/");
}

export async function signup(formData) {
  const supabase = await createClient();

  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    redirect(
      "/login?error=Email and password are required.",
    );
  }

  if (password.length < 8) {
    redirect(
      "/login?error=Password must be at least 8 characters.",
    );
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

  const { error } =
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo:
          `${siteUrl}/auth/confirm`,
      },
    });

  if (error) {
    redirect(
      `/login?error=${encodeURIComponent(
        error.message,
      )}`,
    );
  }

  redirect(
    "/login?message=Check your email to confirm your account.",
  );
}