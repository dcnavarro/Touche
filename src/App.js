import "./App.css";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Virtual from "./components/Virtual/Virtual";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
    </div>
  );
}

export default App;