import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMiniBioOpen, setIsMiniBioOpen] = useState(false);
  const [formObject, setFormObject] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        formObject,
        setFormObject,
        isMiniBioOpen,
        setIsMiniBioOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
