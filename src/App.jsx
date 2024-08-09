import { useGlobalContext } from "../contexts/useGlobalContext";
import About from "./components/About";
import AppWrapper from "./components/AppWrapper";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Menu from "./components/Menu";
import MobileMenuAndLogo from "./components/MobileMenuAndLogo";
import MobileMenuOverlay from "./components/MobileMenuOverlay";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import NavigationMap from "./components/NavigationMap";
import Instagram from "./components/Instagram";
import OpeningHours from "./components/OpeningHours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Minibio from "./components/Minibio";
import useScrollToHash from "../hooks/useScrollToHash";
import Modal from "./components/Modal";
import { useEffect } from "react";
import { fetchDocuments } from "../lib/appwriteClient";

function App() {
  const {
    isMobileMenuOpen,
    isMiniBioOpen,
    isNotificationActive,
    isNotificationOpen,
    setIsNotificationActive,
    setModalContent,
  } = useGlobalContext();
  useScrollToHash();

  useEffect(() => {
    const fetchModal = async () => {
      try {
        const modalData = await fetchDocuments();
        if (modalData) {
          setModalContent(modalData[0]);
          setIsNotificationActive(modalData[0].modalStatus);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchModal();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isNotificationActive && isNotificationOpen && <Modal />}
      {isMobileMenuOpen && <MobileMenuOverlay />}
      {isMiniBioOpen && <Minibio />}

      <AppWrapper>
        <MobileMenuAndLogo />
        <Menu />
        <Header />
        <Highlights />
        <About />
        <Pricing />
        <Testimonial />
        <Faq />
        <Instagram />
        <NavigationMap />
        <OpeningHours />
        <Contact />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
