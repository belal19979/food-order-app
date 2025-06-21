"use client";

import { FoodList, ErrorMessage, FilterBar } from "@/components";
import { useDebounce, useFoodItems } from "@/hooks";
import { Container } from "@mui/material";
import { useMemo, useState } from "react";

export default function Menu() {
  const { foodItems, loading, error } = useFoodItems();
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const categories = useMemo(
    () => Array.from(new Set(foodItems.map((i) => i.category))),
    [foodItems]
  );

  const filteredItems = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    return foodItems
      .filter((item) => category === "" || item.category === category)
      .filter((item) => !q || item.name.toLowerCase().includes(q));
  }, [foodItems, debouncedSearch, category]);

  if (loading) return <>loading ..</>;
  if (error) return <ErrorMessage message={error.message} />;

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
