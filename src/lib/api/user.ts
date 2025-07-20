export async function updateUserData(form: { name: string }) {
  const res = await fetch("/api/user", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: form.name }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json;
}
