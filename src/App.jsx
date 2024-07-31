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

function App() {
  const { isMobileMenuOpen } = useGlobalContext();

  return (
    <>
      {isMobileMenuOpen && <MobileMenuOverlay />}
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
