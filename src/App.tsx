import "./App.css";

import SectionHero from "./components/SectionHero";
import WhyUs from "./components/WhyUs";
import MediaPlayer from "./components/MediaPlayer";
import BlogPosts from "./components/BlogPosts";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <SectionHero />
      <WhyUs />
      <MediaPlayer />
      <Slider />
      <BlogPosts />
      <Footer />
    </div>
  );
}

export default App;
