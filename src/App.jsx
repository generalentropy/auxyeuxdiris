import About from "./components/About";
import AppWrapper from "./components/AppWrapper";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Menu from "./components/Menu";

function App() {
  return (
    <AppWrapper>
      <Menu />
      <Header />
      <Highlights />
      <About />
    </AppWrapper>
  );
}

export default App;
