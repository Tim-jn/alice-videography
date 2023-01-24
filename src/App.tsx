import "./App.scss";
import Banner from "./Components/Banner/Banner";
import DropDownMenu from "./Components/DropDownMenu/DropDownMenu";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <main className="App">
      <Banner />
      <DropDownMenu />
      <Home />
    </main>
  );
}

export default App;
