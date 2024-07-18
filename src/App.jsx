import About from "./components/About";
import AppWrapper from "./components/AppWrapper";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Menu from "./components/Menu";
import Tarifs from "./components/Tarifs";

function App() {
  return (
    <AppWrapper>
      <Menu />
      <Header />
      <Highlights />
      <About />
      <Tarifs />
    </AppWrapper>
  );
}

export default App;
