import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMiniBioOpen, setIsMiniBioOpen] = useState(false);
  const [poseType, setPoseType] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        poseType,
        setPoseType,
        isMiniBioOpen,
        setIsMiniBioOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
