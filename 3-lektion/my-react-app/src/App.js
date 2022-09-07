import "./App.css";
import { Image, Flexform, Table, List, Garage } from "./components";
import BackToTop from "react-back-to-top-button";

function App() {
  return (
    <div className="App">
      <List />
      <Image />

      {/* <Car /> */}
      <Garage nrOfCars={3} carColorsArray={["green", "pink", "white"]} />

      <Flexform />
      <Table />

      <BackToTop
        showOnScrollUp={false}
        showAt={100}
        speed={100}
        easing="easeInOutSine"
      >
        <span>^</span>
      </BackToTop>
    </div>
  );
}

export default App;
