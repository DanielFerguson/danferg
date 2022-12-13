import type { APIRoute } from "astro";

export const get: APIRoute = async ({ params }) => {
  const email = params.email;

  if (!email) {
    return new Response("Email is required", { status: 400 });
  }

  const response = await fetch("https://app.loops.so/api/v1/contacts/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.LOOPS_API_KEY}`,
    },
    body: JSON.stringify({
      email,
      danferg: true,
      userGroup: "danferg",
    }),
  });

  return response;
};
