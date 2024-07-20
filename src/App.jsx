import { useGlobalContext } from "../contexts/useGlobalContext";
import About from "./components/About";
import AppWrapper from "./components/AppWrapper";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Menu from "./components/Menu";
import MobileMenuOverlay from "./components/MobileMenuOverlay";
import Pricing from "./components/Pricing";

function App() {
  const { isMobileMenuOpen } = useGlobalContext();

  return (
    <AppWrapper>
      {isMobileMenuOpen && <MobileMenuOverlay />}
      <Menu />
      <Header />
      <Highlights />
      <About />
      <Pricing />
    </AppWrapper>
  );
}

export default App;
