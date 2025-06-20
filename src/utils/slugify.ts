export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export async function generateUniqueSlug(
  name: string,
  takenSlugs: string[]
): Promise<string> {
  const base = slugify(name);
  let slug = base;
  let counter = 1;

  while (takenSlugs.includes(slug)) {
    slug = `${base}-${counter}`;
    counter++;
  }

  return slug;
}
