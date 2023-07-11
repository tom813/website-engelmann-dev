import Header from "./components/Header";
import Footer from "./components/Footer";
import FinancialSupport from "./components/FinancialSupport";
import ContactUs from "./components/ContactUs";
import Testimonials from "./components/CounterBlock/Testimonial";
import TestimonialBlock from "./components/TestimonialBlock";
import content from "../public/advantages.json";
import FirstSection from "./components/FirstSection";
import Info1 from "./components/Info1";
import ChatbotExample from "./components/ChatbotExample";

export default function ScalarOne(){
    return(
        <div className="main-container">
            <Header />
            <FirstSection 
            headline="ScalarOne"
            description="Das intelligenteste ERP-System"
            c2a="ScalarOne testen"
            letter_url="/letter-a.png"
            />
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
            <ChatbotExample />
           <FinancialSupport />
           <ContactUs />
           <Footer />
        </div>
    )
}