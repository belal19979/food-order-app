import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { OrderStatus } from "@/generated/prisma";
import { STATUS_VALUES } from "@/utils/sortOrder";

function parseStatusParam(raw: string | null | undefined): OrderStatus | "" {
  if (!raw) return "";
  return STATUS_VALUES.includes(raw.toUpperCase() as OrderStatus)
    ? (raw.toUpperCase() as OrderStatus)
    : "";
}
export const useOrderStatus = () => {
  const router = useRouter();
  const pathname = usePathname() as string;
  const searchParams = useSearchParams();
  const status = parseStatusParam(searchParams?.get("status"));

  const handleStatusChange = (value: OrderStatus | "") => {
    const params = new URLSearchParams(searchParams?.toString());
    if (!value) params.delete("status");
    else {
      params.set("status", value.toLowerCase());
    }
    const next = params.toString();
    router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
  };

  return { status, handleStatusChange };
};
