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
import { Suspense } from "react";

function App() {
  const { isMobileMenuOpen, isMiniBioOpen } = useGlobalContext();

  return (
    <>
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
        <Suspense fallback={<div>Chargement...</div>}>
          <NavigationMap />
        </Suspense>
        <OpeningHours />
        <Contact />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
