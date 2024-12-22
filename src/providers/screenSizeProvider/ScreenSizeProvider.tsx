import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type ScreenSize = {
  width: number;
  height: number;
  mobile: boolean;
};

const ScreenSizeContext = createContext<ScreenSize | null>(null);

type ScreenSizeProviderProps = {
  children: ReactNode;
};

export const ScreenSizeProvider: React.FC<ScreenSizeProviderProps> = ({
  children,
}) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
    mobile: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
          mobile: window.innerWidth <= 768,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = (): ScreenSize => {
  const context = useContext(ScreenSizeContext);
  if (!context) {
    throw new Error("useScreenSize must be used within a ScreenSizeProvider");
  }
  return context;
};
