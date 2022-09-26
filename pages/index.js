import CounterBlock from './components/CounterBlock/CounterBlock'
import Testimonials from './components/CounterBlock/Testimonial'
import OurValues from './components/CounterBlock/OurValues'
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import WayOfWorking from './components/WayOfWorking';
import FirstSection from './components/FirstSection';
import Header from './components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="main-container">
      <Header />
      <FirstSection />
      <WayOfWorking />
      <Testimonials test={"lul"} />
      <CounterBlock />
      <OurValues />
      <ContactUs />
      <Footer />
    </div>
  )
}
