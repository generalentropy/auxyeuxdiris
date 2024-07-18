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
    </AppWrapper>
  );
}

export default App;
