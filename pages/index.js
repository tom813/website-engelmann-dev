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
      
      <FirstSection 
      headline="Ihre Adresse bei der Entwicklung & Nutzung von Ki"
      description="Entdecken Sie mit uns, wie künstliche Intelligenz Ihre Geschäftsprozesse revolutionieren kann."
      c2a="Entdecken Sie KI-Lösungen"
      letter_url="/scalarsoft.png"
      link="https://meetings-eu1.hubspot.com/tom-engelmann/scalarsoft"
      />
      <WayOfWorking />
      <Info1
      headline1="Ki-CONSULTING"
      description1="Wir bieten strategische Beratung, um Unternehmen dabei zu unterstützen, das volle Potenzial künstlicher Intelligenz zu erschließen. Von der Ideenfindung bis zur Implementierung – wir navigieren Sie durch die Komplexität der KI-Technologien und finden die optimale Lösung für Ihre Herausforderungen."
      headline2="Ki-DEVELOPMENT"
      description2="Unser Entwicklungsteam spezialisiert sich auf die Erstellung individueller KI-basierter Softwarelösungen. Wir kombinieren modernste Technologien mit branchenspezifischem Know-how, um intelligente Systeme zu entwickeln, die Ihre Effizienz steigern, Kosten reduzieren und Entscheidungsprozesse optimieren."
      headline3="What we are doing best"
      />
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

      {/*< TestimonialBlock /> */}
      
      <CounterBlock />
      <OurValues />
      <FinancialSupport />
      <ContactUs />
    </div>
  )
}
