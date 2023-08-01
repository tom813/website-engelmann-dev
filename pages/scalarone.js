import Header from "./components/Header";
import Footer from "./components/Footer";
import FinancialSupport from "./components/FinancialSupport";
import ContactUs from "./components/ContactUs";
import Testimonials from "./components/CounterBlock/Testimonial";
import content from "../public/advantages.json";
import FirstSection from "./components/FirstSection";
import Info1 from "./components/Info1";
import ChatbotExample from "./components/ChatbotExample";
import MultiCard from "./components/MultiCard";
import Timeline from "./components/Timeline";


export default function ScalarOne(){
    return(
        
        <div className="main-container">
            <FirstSection 
            headline="Das Revit kompatible KI-ERP für den modularen Bau."
            description=""
            c2a="ScalarOne kennenlernen"
            letter_url="/scalarone.png"
            link="https://meetings-eu1.hubspot.com/tom-engelmann/scalarsoft"
            />
        
            
          <div className="our-modules-container">
            
            <img src="/laptop2.png" id="laptop"/>
            <h2 >
              Unsere Module
            </h2>
          <MultiCard />
          </div>

          <div className="revit-workflow">
            <h2 style={{textAlign: 'center', fontSize: '3rem'}}>
              Revit Workflow
            </h2>
            <Timeline />
          </div>

          <Info1
            headline1="CAD-Daten automatisch übertragen"
            description1="ScalarOne ist ein ERP System, das mit mit allen gängigen CAD-Programmen interagieren kann. Besonders gut ist die Verknüpfung zu Autodesk-Revit. Die Daten können so mühelos per Knopfdruck übertragen werden."
            headline2="Steuerung durch KI-Chatbot"
            description2="ScalarOne ist bedienbar durch einen KI basierten Chatbot, der Ihnen das Leben erleichtert. Kein rumsuchen nach den richtigen Formularen und Seiten. Sagen Sie einfach was Sie wollen, unser Chabot macht den Rest."
            headline3="Was ScalarOne kann"
            />

           <div className="testimonials-wrapper">
            <div id="scroll-point-3" />
            <img src="/sphere-8.png" id="ball1" />
            <img src="sphere-10.png" id="ball2" />
            <img src="/sphere-slider-7.png" id="ball3" />
            
            <ChatbotExample 
            chats={"chat1"}
            headline={"Objekte erstellen"}
            />
            <ChatbotExample 
            chats={"chat2"}
            headline={"Tabellen generieren"}
            />
            <ChatbotExample 
            chats={"chat3"}
            headline={"Tabellen bearbeiten"}
            />
            <ChatbotExample 
            chats={"chat4"}
            headline={"Statistiken generieren"}
            />
            <a href="https://meetings-eu1.hubspot.com/tom-engelmann/scalarsoft" rel="noreferrer" target="_blank">
                    <button className="call-btn">
                        Hier ScalarOne-Chatbots testen
                        {/* ScalarOne entdecken */}
                    </button>
                </a>
        </div>            

        
            
            <Testimonials 
              companyName={content.testimonials[0].company_name}
              testimonialText={content.testimonials[0].testimonial_text}
              name={content.testimonials[0].name}
              position={content.testimonials[0].position}
              imgUrl={content.testimonials[0].img_url}
              externalLink={content.testimonials[0].external_link}
              />

            <Testimonials 
              companyName={content.testimonials[1].company_name}
              testimonialText={content.testimonials[1].testimonial_text}
              name={content.testimonials[1].name}
              position={content.testimonials[1].position}
              imgUrl={content.testimonials[1].img_url}
              externalLink={content.testimonials[1].external_link}
              />
            

            <Testimonials 
              companyName={content.testimonials[2].company_name}
              testimonialText={content.testimonials[2].testimonial_text}
              name={content.testimonials[2].name}
              position={content.testimonials[2].position}
              imgUrl={content.testimonials[2].img_url}
              externalLink={content.testimonials[2].external_link}
              />
            

              <Testimonials 
              companyName={content.testimonials[3].company_name}
              testimonialText={content.testimonials[3].testimonial_text}
              name={content.testimonials[3].name}
              position={content.testimonials[3].position}
              imgUrl={content.testimonials[3].img_url}
              externalLink={content.testimonials[3].external_link}
              />
            

           <FinancialSupport />
           <ContactUs />
        </div>
    )
}