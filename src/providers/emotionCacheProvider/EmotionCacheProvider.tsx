"use client";

import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "@/lib/emotionCache";
import React, { ReactNode, useState } from "react";

type EmotionCacheProviderProps = {
  children: ReactNode;
};

export default function EmotionCacheProvider({
  children,
}: EmotionCacheProviderProps) {
  const [emotionCache] = useState(() => createEmotionCache());

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}
