"use client";

import { FoodList, FilterBar } from "@/components";
import { useDebounce } from "@/hooks";
import { Container } from "@mui/material";
import { useMemo, useState } from "react";
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

  const filteredItems = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    return foodItems
      .filter((item) => category === "" || item.category === category)
      .filter((item) => !q || item.name.toLowerCase().includes(q));
  }, [foodItems, debouncedSearch, category]);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 2 }}>
      <FilterBar
        categories={categories}
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />

      <FoodList foodItems={filteredItems} />
    </Container>
  );
}
