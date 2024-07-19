import About from "./components/About";
import AppWrapper from "./components/AppWrapper";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Menu from "./components/Menu";
import Pricing from "./components/Pricing";

function App() {
  return (
    <AppWrapper>
      <Menu />
      <Header />
      <Highlights />
      <About />
      <Pricing />
    </AppWrapper>
  );
}

export default App;
