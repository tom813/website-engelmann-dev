import CountUp, { useCountUp } from "react-countup";

export default function CounterBlock()  {
    
    useCountUp({
        ref: "counter1",
        start: 0,
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        duration: 5000
      });
      useCountUp({
        ref: "counter2",
        start: 0,
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        duration: 5000
      });
      useCountUp({
        ref: "counter3",
        start: 0,
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        duration: 5000
      });
      useCountUp({
        ref: "counter4",
        start: 0,
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        duration: 5000
      });

    return(
        <div
        style={{backgroundImage: "url(/section_02.jpg)"}}
        className="counterBlock"
        >
            <div className="countup">
                <CountUp enableScrollSpy
                    style={{display: "none"}}
                />
                    <br />
                <span id="counter1" />
            </div>

            <div className="countup">
                <CountUp enableScrollSpy 
                    style={{display: "none"}}
                />
                    <br />
                <span id="counter2" />
            </div>

            <div className="countup">
                <CountUp enableScrollSpy
                    style={{display: "none"}}
                />
                    <br />
                <span id="counter3" />
            </div>

            <div className="countup">
                <CountUp enableScrollSpy
                    style={{display: "none"}}
                />
                    <br />
                <span id="counter4" />
            </div>
        </div>
    )
}

