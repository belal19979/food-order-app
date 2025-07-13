import { IconButton, Tooltip } from "@mui/material";
import { useFavorites } from "@/context";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useAuth } from "../AuthProvider";

export const FavoriteAction = ({ id }: { id: string }) => {
  const { favorites, loading, toggleFavorite } = useFavorites();
  const { user } = useAuth();

  const isFav = favorites.has(id);

  return (
    <Tooltip title={isFav ? "Remove from favorites" : "Add to favorites"}>
      <span>
        {" "}
        {/* needed so Tooltip works even when button is disabled */}
        <IconButton
          onClick={() => toggleFavorite(id)}
          disabled={!user || loading}
          aria-label={isFav ? "Unfavorite" : "Favorite"}
        >
          {isFav ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
      </span>
    </Tooltip>
  );
};
