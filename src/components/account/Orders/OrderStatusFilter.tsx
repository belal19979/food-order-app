import { GenericDropDown } from "@/components/Menu/FilterBar/GenericDropDown";
import { useOrderStatus } from "./hooks/useOrderStatus";
import { STATUS_VALUES } from "@/utils/sortOrder";

export const OrderStatusFilter = () => {
  const { status, handleStatusChange } = useOrderStatus();

  return (
    <GenericDropDown
      options={STATUS_VALUES}
      value={status}
      label="Status"
      onChange={handleStatusChange}
    />
  );
};
