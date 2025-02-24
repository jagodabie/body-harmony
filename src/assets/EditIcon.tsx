export const EditIcon = ({
  className = "",
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`field-iconSvg ${className}`}
      color={color}
      data-testid="edit-icon"
    >
      <path
        fillRule="evenodd"
        d="M4 5a1 1 0 0 1 1-1h7a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7a1 1 0 1 0-2 0v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm6.84 4.17c.12-.375.33-.716.608-.995l5.443-5.443c.97-.97 2.542-.97 3.512 0l.869.87c.97.97.97 2.541 0 3.51l-5.443 5.444c-.279.279-.62.487-.995.608l-2.314.744c-1.494.481-2.905-.93-2.424-2.424l.744-2.314Zm2.022.42a.483.483 0 0 0-.118.193l-.7 2.178 2.177-.7a.483.483 0 0 0 .194-.12l3.312-3.311-1.553-1.553-3.312 3.313Zm6.996-3.891-.717.717-1.552-1.553.716-.717a.483.483 0 0 1 .683 0l.87.87a.483.483 0 0 1 0 .683Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
