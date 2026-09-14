import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const tokenHash =
    searchParams.get("token_hash");

  const type =
    searchParams.get("type");

  const redirectTo =
    request.nextUrl.clone();

  redirectTo.pathname = "/";
  redirectTo.search = "";

  if (tokenHash && type) {
    const supabase =
      await createClient();

    const { error } =
      await supabase.auth.verifyOtp({
        type,
        token_hash: tokenHash,
      });

    if (!error) {
      return NextResponse.redirect(
        redirectTo,
      );
    }
  }

 redirectTo.pathname = "/login";
redirectTo.searchParams.set(
  "error",
  "This confirmation link has already been used or has expired. If your account is confirmed, sign in below. Otherwise, request a new confirmation email.",
);
redirectTo.searchParams.set(
  "showResend",
  "true",
);

  return NextResponse.redirect(
    redirectTo,
  );
}