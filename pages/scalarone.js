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
import MultiCard from "./components/MultiCard";
import Timeline from "./components/Timeline";


export default function ScalarOne(){
    return(
        <div className="main-container">
            <Header />
            <FirstSection 
            headline="ScalarOne - Das Revit kompatible KI-ERP für den modularen Bau."
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

          <h2 style={{textAlign: 'center', fontSize: '3rem'}}>
            Fancy headline
          </h2>
          <img src="" />
          <MultiCard />

          <Timeline />

           <div className="testimonials-wrapper">
            <div id="scroll-point-3" />
            <img src="/sphere-8.png" id="ball1" />
            <img src="sphere-10.png" id="ball2" />
            <img src="/sphere-slider-7.png" id="ball3" />
            <Testimonials 
              companyName={content.testimonials[0].company_name}
              testimonialText={content.testimonials[0].testimonial_text}
              name={content.testimonials[0].name}
              position={content.testimonials[0].position}
              imgUrl={content.testimonials[0].img_url}
              externalLink={content.testimonials[0].external_link}
              />
        </div>
            

            {console.log("4444")}
            <ChatbotExample 
            chats={content.chat1}
            />

            <Testimonials 
              companyName={content.testimonials[1].company_name}
              testimonialText={content.testimonials[1].testimonial_text}
              name={content.testimonials[1].name}
              position={content.testimonials[1].position}
              imgUrl={content.testimonials[1].img_url}
              externalLink={content.testimonials[1].external_link}
              />
            <ChatbotExample 
            chats={content.chat2}
            />

            <Testimonials 
              companyName={content.testimonials[2].company_name}
              testimonialText={content.testimonials[2].testimonial_text}
              name={content.testimonials[2].name}
              position={content.testimonials[2].position}
              imgUrl={content.testimonials[2].img_url}
              externalLink={content.testimonials[2].external_link}
              />
            <ChatbotExample 
            chats={content.chat3}
            />

              <Testimonials 
              companyName={content.testimonials[3].company_name}
              testimonialText={content.testimonials[3].testimonial_text}
              name={content.testimonials[3].name}
              position={content.testimonials[3].position}
              imgUrl={content.testimonials[3].img_url}
              externalLink={content.testimonials[3].external_link}
              />
            <ChatbotExample 
            chats={content.chat4}
            />

            {console.log("5555")}

           <FinancialSupport />
           <ContactUs />
           <Footer />
        </div>
    )
}