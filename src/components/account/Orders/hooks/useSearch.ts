import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function useSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const search = searchParams?.get("search") || "";
  const updateSearch = (next: string) => {
    const params = new URLSearchParams(searchParams?.toString());
    if (!next.trim()) params.delete("search");
    else params.set("search", next);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : (pathname ?? ""), {
      scroll: false,
    });
  };

  return { search, updateSearch };
}
