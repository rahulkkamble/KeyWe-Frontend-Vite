import React from 'react';
import { HouseDoor, People, GeoAlt, Telephone } from 'react-bootstrap-icons';

const StatsCounter = () => {
  // Define stats data for easy management
  const stats = [
    { icon: <HouseDoor />, label: "Properties", value: "153" },
    { icon: <People />, label: "Partners", value: "1,475" },
    { icon: <GeoAlt />, label: "On-site Visits", value: "331" },
    { icon: <Telephone />, label: "Enquiries", value: "512" }
  ];

  return (
    <section aria-label="KeyWe Platform Statistics">
      <div className="bg-white rounded-2xl shadow-soft p-8 my-16 max-w-5xl mx-auto">
        
        {/* SEO: Using <dl> (Description List) semantically links the Number to the Label */}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:divide-x divide-gray-100">
          
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4 flex flex-col items-center">
              
              {/* The Label (dt = Description Term) */}
              <dt className="text-gray-500 font-medium flex items-center justify-center gap-2 text-lg">
                <span className="text-keywe-dark" aria-hidden="true">
                  {stat.icon}
                </span>
                {stat.label}
              </dt>

              {/* The Value (dd = Description Details) */}
              <dd className="block text-3xl font-bold text-keywe-dark mt-2">
                {stat.value}
              </dd>
              
            </div>
          ))}

        </dl>
      </div>
    </section>
  );
};

export default StatsCounter;