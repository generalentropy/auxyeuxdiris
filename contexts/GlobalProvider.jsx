import { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMiniBioOpen, setIsMiniBioOpen] = useState(false);
  const [formObject, setFormObject] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(true);
  const [modalContent, setModalContent] = useState(null);
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
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isNotificationActive,
        setIsNotificationActive,
        isNotificationOpen,
        setIsNotificationOpen,
        modalContent,
        setModalContent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
