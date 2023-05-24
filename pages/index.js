import Head from 'next/head';

import CounterBlock from './components/CounterBlock/CounterBlock'
import Testimonials from './components/CounterBlock/Testimonial'
import OurValues from './components/CounterBlock/OurValues'
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import WayOfWorking from './components/WayOfWorking';
import FirstSection from './components/FirstSection';
import Header from './components/Header';
import Info1 from './components/Info1';
import FinancialSupport from './components/FinancialSupport';
import TestimonialBlock from './components/TestimonialBlock';


import content from '../public/testimonials.json';

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <title>Scalarsoft GmbH</title>
        
        <link rel='icon' type='image/x-icon' href='./browser-icon.png' />
      </Head>
      
      <Header />
      <FirstSection />
      <WayOfWorking />
      <Info1 />
      <div className="testimonials-wrapper">
            <div id="scroll-point-3" />
            <img src="/sphere-8.png" id="ball1" />
            <img src="sphere-10.png" id="ball2" />
            <img src="/sphere-slider-7.png" id="ball3" />
        {content.testimonials.map((testimonial) => (
          <>
            <Testimonials 
              companyName={testimonial.company_name}
              testimonialText={testimonial.testimonial_text}
              name={testimonial.name}
              position={testimonial.position}
              imgUrl={testimonial.img_url}
              externalLink={testimonial.external_link}
              />
          </>
        ))}
      </div>

      <TestimonialBlock />
      
      <CounterBlock />
      <OurValues />
      <FinancialSupport />
      <ContactUs />
      <Footer />
    </div>
  )
}
