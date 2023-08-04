import "./App.css";
import HomePage from "./components/Home";
import SideNav from "./components/sidenav";

function App() {
  return (
    <div className=" ms-5">
      <div className="d-flex">
        <SideNav />
      </div>
      <div style={{ backgroundColor: "#c9e6e8" }} className=" ">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
