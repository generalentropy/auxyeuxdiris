import { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMiniBioOpen, setIsMiniBioOpen] = useState(false);
  const [formObject, setFormObject] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 768 }); // TW md breakpoint

  return (
    <GlobalContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        formObject,
        setFormObject,
        isMiniBioOpen,
        setIsMiniBioOpen,
        isMobile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
