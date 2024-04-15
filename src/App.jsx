import "./App.css";
import Header from "./components/Header";
import HorizontalScroll from "./components/HorizontalScroll";

function App() {
  return (
    <>
      <div className="h-screen w-[577px] bg-white">
        <Header />
        <HorizontalScroll />
      </div>
    </>
  );
}

export default App;
