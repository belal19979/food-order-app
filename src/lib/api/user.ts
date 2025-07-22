export async function updateUserData(form: { name: string }) {
  const res = await fetch("/api/user", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: form.name }),
  });
  if (!res.ok) throw new Error(await res.text());
  const body = await res.json();
  return body;
}

export async function updateUserPassword(
  currentPassword: string,
  newPassword: string
) {
  const res = await fetch("/api/user/password", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ currentPassword, newPassword }),
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Unknown error");
  }

  const body = await res.json();
  return body;
}
