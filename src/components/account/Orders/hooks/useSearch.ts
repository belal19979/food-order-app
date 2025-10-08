import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export function useSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);
  const search = searchParams?.get("search") || "";

  const [localSearch, setLocalSearch] = useState(search);

  useEffect(() => {
    const urlSearch = searchParams?.get("search") || "";
    setLocalSearch(urlSearch);
  }, [searchParams]);

  const updateSearch = useCallback(
    (next: string) => {
      setLocalSearch(next);
      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams(searchParams?.toString());
        if (!next.trim()) params.delete("search");
        else params.set("search", next);
        const qs = params.toString();
        router.replace(qs ? `${pathname}?${qs}` : (pathname ?? ""), {
          scroll: false,
        });
      }, 300);
    },
    [searchParams, pathname, router]
  );

  return { search, localSearch, updateSearch };
}
