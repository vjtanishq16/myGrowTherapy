import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Alone from './components/Alone';
import HiImLilac from './components/HiImLilac';
import Faq from './components/Faq';
import OurOffice from './components/OurOffice';
import Credentials from './components/Credentials';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Alone />
      <HiImLilac />
      <Faq />
      <OurOffice />
      <Credentials />
      <GetStarted />
      <Footer />
    </>
  );
}
