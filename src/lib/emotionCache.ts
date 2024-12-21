import createCache from "@emotion/cache";

export const createEmotionCache = () =>
  createCache({
    key: "emotion-css",
    prepend: true,
  });
