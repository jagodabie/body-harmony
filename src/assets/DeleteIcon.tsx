export const DeleteIcon = ({
  className = "",
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={`field-iconSvg ${className}`}
      width={size}
      height={size}
      color={color}
    >
      <path
        fillRule="evenodd"
        d="M4 5h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2.764c-.55-.614-1.348-1-2.236-1H9a2.99 2.99 0 0 0-2.236 1H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Zm.036 1.534A.5.5 0 0 1 4.535 6h14.93a.5.5 0 0 1 .5.534l-.92 13.667A3 3 0 0 1 16.052 23H7.948a3 3 0 0 1-2.993-2.799l-.92-13.667ZM10 11a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1Zm4 0a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
