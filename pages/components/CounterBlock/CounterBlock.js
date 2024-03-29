import CountUp, { useCountUp } from "react-countup";


export default function CounterBlock()  {
    
    useCountUp({
        ref: "counter1",
        start: 0,
        end: 147,
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        duration: 0.5
      });
      useCountUp({
        ref: "counter2",
        start: 0,
        end: 178174,
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        duration: 2
      });
      
      useCountUp({
        ref: "counter3",
        start: 0,
        end: 156,
        enableScrollSpy: true,
        scrollSpyDelay: 0,
        duration: 2
      });
     

    return(
        <section
        style={{backgroundImage: "url(/section_02.jpg)"}}
        className="counterBlock"
        >
            <div className="countup">
                <CountUp enableScrollSpy
                    style={{display: "none", height: 0}}
                />
                    
                <span id="counter1" />
                
                <p>
                    {"<commits_per_month>"}
                </p>
            </div>

            <div className="countup">
                <CountUp enableScrollSpy 
                    style={{display: "none"}}
                />
                    
                <span id="counter2" />
                <p>
                    {"<lines_of_code>"}
                </p>
                
            </div>

            <div className="countup">
                <CountUp enableScrollSpy
                    style={{display: "none"}}
                />
                    
                <span id="counter3" />
                <p>
                    {"< tickets_per_month >"}
                </p>
            </div>

        </section>
    )
}

