/* import logo from './logo.svg'; */
import "./App.css";
import HeroImg from "./components/HeroImage";
import List from "./components/List";
import Table from "./components/Table";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Today's task.</h1>
      </header>
      <HeroImg />
      <List />
      <Table />
      <BackToTop />
    </div>
  );
}

export default App;
