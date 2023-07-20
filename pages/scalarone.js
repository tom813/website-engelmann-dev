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
            headline="ScalarOne - Das ERP für den modularen Bau"
            description=""
            c2a="ScalarOne testen"
            letter_url="/letter-a.png"
            />
            
            <Info1
            headline1="CAD kompatibel"
            description1="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. sed diam nonumy eirmod tempor "
            headline2="Ki gesteuert"
            description2="invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,  sanctus est Lorem ipsum dolor sit amet."
            headline3="Was ScalarOne kann"
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
            <ChatbotExample />
           <FinancialSupport />
           <ContactUs />
           <Footer />
        </div>
    )
}