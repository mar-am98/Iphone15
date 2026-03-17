import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Model from "../components/Model";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";



const App = () => {
  return (
    <main className="bg-black h-full w-full">
      <Navbar />
      <Hero />
      <Slider />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  )
}

export default App;
