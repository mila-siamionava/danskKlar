import "server-only";

import { createClient } from "@/lib/supabase/server";

async function getPlanResources(
  supabase,
  planId,
) {
  const { data, error } = await supabase
    .from("plan_resources")
    .select(`
      resources (
        resource_type,
        resource_key,
        name
      )
    `)
    .eq("plan_id", planId);

  if (error) {
    console.error(
      "Could not load plan resources:",
      error,
    );

    return [];
  }

  return data
    .map((item) => item.resources)
    .filter(Boolean);
}

async function getGuestAccess(supabase) {
  const { data: guestPlan, error } =
    await supabase
      .from("plans")
      .select("id, code")
      .eq("code", "guest")
      .single();

  if (error || !guestPlan) {
    console.error(
      "Could not load guest plan:",
      error,
    );

    return {
      plan: "guest",
      resources: [],
      isAuthenticated: false,
    };
  }

  const resources =
    await getPlanResources(
      supabase,
      guestPlan.id,
    );

  return {
    plan: guestPlan.code,
    resources,
    isAuthenticated: false,
  };
}

export async function getCurrentAccess() {
  const supabase = await createClient();

  const { data } =
    await supabase.auth.getClaims();

  const userId =
    data?.claims?.sub ?? null;

  if (!userId) {
    return getGuestAccess(supabase);
  }

  const {
    data: profile,
    error: profileError,
  } = await supabase
    .from("profiles")
    .select(`
      plan_id,
      plans (
        code
      )
    `)
    .eq("user_id", userId)
    .single();

  if (
    profileError ||
    !profile?.plan_id ||
    !profile?.plans
  ) {
    console.error(
      "Could not load user profile:",
      profileError,
    );

    return getGuestAccess(supabase);
  }

  const resources =
    await getPlanResources(
      supabase,
      profile.plan_id,
    );

  return {
    plan: profile.plans.code,
    resources,
    isAuthenticated: true,
  };
}