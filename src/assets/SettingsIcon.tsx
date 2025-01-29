export const SettingsIcon = ({
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
      data-testid="settings-icon"
    >
      <path d="M21.81 10.328a2.75 2.75 0 0 1-1.69-4.082c.442-.737.309-1.373-.13-1.81l-.426-.426c-.437-.437-1.073-.57-1.81-.13a2.75 2.75 0 0 1-4.082-1.69C13.464 1.354 12.92 1 12.302 1h-.603c-.619 0-1.162.355-1.371 1.19a2.75 2.75 0 0 1-4.082 1.69c-.737-.442-1.374-.309-1.811.128l-.426.427c-.438.437-.571 1.074-.128 1.81a2.75 2.75 0 0 1-1.692 4.083c-.832.208-1.189.75-1.189 1.37v.603c0 .619.355 1.162 1.19 1.371a2.75 2.75 0 0 1 1.69 4.082c-.442.737-.309 1.373.13 1.81l.426.426c.439.439 1.075.57 1.81.13a2.749 2.749 0 0 1 4.082 1.69c.208.835.752 1.19 1.37 1.19h.603c.619 0 1.162-.355 1.371-1.19a2.75 2.75 0 0 1 4.082-1.69c.736.44 1.371.309 1.81-.13l.426-.426c.437-.437.57-1.073.13-1.81a2.749 2.749 0 0 1 1.69-4.082c.835-.208 1.19-.752 1.19-1.37v-.603c0-.62-.358-1.163-1.19-1.371ZM12 16.125a4.125 4.125 0 1 1 0-8.25 4.125 4.125 0 0 1 0 8.25Z"></path>
    </svg>
  );
};
