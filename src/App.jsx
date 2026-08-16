import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import HeroinSection from './components/HeroinSection';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className='bg-[#111827] min-h-screen'>
      <Header /> {/* <-- Rendered as a JSX component */}
      <HeroinSection />
      <Education />
      <Projects />
      <Certificate />
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>
  );
};

export default App;