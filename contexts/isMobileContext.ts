import { createContext } from "react";

type IsMobileContextType = {
    isMobile: boolean;
    setIsMobile: (isMobile: boolean) => void;
};

export const IsMobileContext = createContext<IsMobileContextType>({
    isMobile: true,
    setIsMobile: () => {},
});
