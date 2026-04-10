import Header from "./components/Header/Header";
import "./index.css";
import MainContent from "./components/MainContent/MainContent";
import BlackLine from "./components/BlackLine/BlackLine";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import Browse from "./components/Browse/Browse";
import Slider from "./components/Slider/Slider";
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <BlackLine />
      <NewArrivals />
      <Browse />
      <Slider />
    </>
  );
}

export default App;
