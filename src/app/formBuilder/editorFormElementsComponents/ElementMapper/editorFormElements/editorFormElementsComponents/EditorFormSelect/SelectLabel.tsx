import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./index.css";
export const SelectLabel = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="element-select-label"
      role="button"
      onClick={() => setIsActive((prev: boolean) => !prev)}
    >
      <span className="element-select-label__placeholder">
        Type an options below
      </span>
      <ExpandMoreIcon className={isActive ? "active" : ""} />
    </div>
  );
};
