import useGameQueryStore from "@/store";
import {
  MenuRoot,
  MenuTrigger,
  Button,
  MenuContent,
  MenuItem,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Relase date" },
    { value: "-mteacritic", label: "Popularity" },
    { value: "-rating", label: "Averge rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOreder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" size="sm" marginBottom={5}>
          Oreder by : {currentSortOrder?.label || "Relevance"}{" "}
          <IoIosArrowDown />
        </Button>
      </MenuTrigger>
      <MenuContent
        position="absolute"
        top="200px"
        left={{ base: "115px", lg: "365px" }}
        width="200px"
        marginBottom={5}
      >
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
