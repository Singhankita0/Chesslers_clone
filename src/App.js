import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import BackSupport from "./components/BackSupport";
import Footer from "./components/Footer";
// import './App.css';

function App() {
  return (
    <div className="bg-black">
      <div className="image">
      <Header />
      <HeroSection />
      <Card />
      <BackSupport />
      <Footer />
      </div>
    </div>
  );
}

export default App;
