"use client";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

type FavoritesContextValue = {
  favorites: Set<string>;
  loading: boolean;
  toggleFavorite: (foodId: string) => Promise<void>;
};

const FavoriteContext = createContext<FavoritesContextValue | undefined>(
  undefined
);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      try {
        const res = await fetch("/api/favorites");
        const { favorites: favIds }: { favorites: string[] } = await res.json();
        setFavorites(new Set(favIds));
      } finally {
        setLoading(false);
      }
    }
    loadFavorites();
  }, []);
  const toggleFavorite = async (foodId: string) => {
    const isFav = favorites.has(foodId);
    const action = isFav ? "remove" : "add";

    setFavorites((prev) => {
      const nextSet = new Set(prev);
      if (action === "add") {
        nextSet.add(foodId);
      } else {
        nextSet.delete(foodId);
      }
      return nextSet;
    });
    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        body: JSON.stringify({ foodId, action }),
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (err) {
      console.error("Failed to toggle favorite:", err);
      // rollback
      setFavorites((prev) => {
        const nextSet = new Set(prev);
        if (action === "add") {
          nextSet.delete(foodId);
        } else {
          nextSet.add(foodId);
        }
        return nextSet;
      });
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorites, loading, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoriteContext);
  if (!ctx) throw new Error("useFavorites must be inside FavoritesProvider");
  return ctx;
};
