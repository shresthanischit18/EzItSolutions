import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when in view
    delay: 500, // Delay before triggering in milliseconds
  });

  return (
    <div className="lg:px-40 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 text-center font-semibold">
        <div ref={ref}>
          <h2 className="text-[84px]">
            {inView && <CountUp start={0} end={200} duration={2.75} />}K
          </h2>
          <p className="text-[18px]">Happy Client</p>
        </div>
        <div ref={ref}>
          <h2 className="text-[84px]">
            {inView && <CountUp start={0} end={20} duration={2.75} />}+
          </h2>
          <p className="text-[18px]">Team Members</p>
        </div>
        <div ref={ref}>
          <h2 className="text-[84px]">
            {inView && <CountUp start={0} end={102} duration={2.75} />}+
          </h2>
          <p className="text-[18px]">Winning Award</p>
        </div>
        <div ref={ref}>
          <h2 className="text-[84px]">
            {inView && <CountUp start={0} end={10} duration={2.75} />}K
          </h2>
          <p className="text-[18px]">Complete Project</p>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
