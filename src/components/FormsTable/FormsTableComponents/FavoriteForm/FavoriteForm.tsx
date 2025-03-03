import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { memo } from "react";

export const FavoriteForm = memo(({ isFavorite }: { isFavorite: boolean }) => {
  const IconComponent = isFavorite ? StarIcon : StarBorderIcon;

  return <IconComponent sx={{ color: "var(--yellow)" }} />;
});
