import { memo } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export const FavoriteForm = memo(({ isFavorite }: { isFavorite: boolean }) => {
  const IconComponent = isFavorite ? StarIcon : StarBorderIcon;

  return <IconComponent sx={{ color: "var(--yellow)" }} />;
});
