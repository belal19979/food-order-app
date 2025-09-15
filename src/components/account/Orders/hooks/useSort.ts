import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { SortKey, DEFAULT_SORT, SORT_KEYS } from "@/utils/sortOrder";

function parseSortParam(raw: string | null | undefined): SortKey {
  if (!raw) return DEFAULT_SORT;
  return isSortKey(raw) ? raw : DEFAULT_SORT;
}
const isSortKey = (x: string): x is SortKey =>
  (SORT_KEYS as readonly string[]).includes(x);

export const useSort = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname() as string;
  const router = useRouter();

  const sort = parseSortParam(searchParams?.get("sort"));

  const updateSort = useCallback(
    (next: SortKey) => {
      const params = new URLSearchParams(searchParams?.toString());
      if (next === DEFAULT_SORT) params.delete("sort");
      else params.set("sort", next);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [searchParams, router, pathname]
  );
  return { sort, updateSort };
};
