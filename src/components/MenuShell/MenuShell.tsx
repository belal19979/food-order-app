"use client";
import { Container } from "@mui/material";
import { useMemo, useState } from "react";

import { FilterBar } from "./FilterBar";
import { filterItems } from "./filterItems";
import { renderMenuContent } from "./renderMenuContent";

import { useDebounce } from "@/hooks";

import { FoodItem } from "@/types/food";

export function MenuShell({
  foodItems,
  categories,
}: {
  foodItems: FoodItem[];
  categories: string[];
}) {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const filteredItems = useMemo(
    () => filterItems(foodItems, category, debouncedSearch),
    [foodItems, debouncedSearch, category]
  );

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 2 }}>
      <FilterBar
        categories={categories}
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />

      {renderMenuContent(foodItems, filteredItems)}
    </Container>
  );
}
