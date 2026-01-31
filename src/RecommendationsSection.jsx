import { HouseDoor, People, GeoAlt, Telephone } from 'react-bootstrap-icons';

const RecommendationsSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-keywe-pale py-24 overflow-hidden text-center">
      
      {/* Decorative Images (Hidden on mobile) */}
      <div className="hidden md:block">
        {/* Add images here with absolute positioning if needed */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Text Content */}
        <div className="flex justify-center mb-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get personalised recommendations
            </h2>
            <p className="text-xl text-gray-500">
              Based on your budget, location & preferences
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="btn-keywe-gradient px-8 py-3 text-lg">
                Continue with Phone
              </button>
              <button className="btn-keywe-outline">
                Login to personalise
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-2xl shadow-soft p-8 mt-16 max-w-5xl mx-auto">
          {/* Grid with dividers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:divide-x divide-gray-100">
            
            {/* Stat Items */}
            {[
              { icon: <HouseDoor />, label: "Properties", value: "153" },
              { icon: <People />, label: "Partners", value: "1,475" },
              { icon: <GeoAlt />, label: "On-site Visits", value: "331" },
              { icon: <Telephone />, label: "Enquiries", value: "512" }
            ].map((stat, index) => (
              <div key={index} className="text-center px-4">
                <div className="text-gray-500 font-medium flex items-center justify-center gap-2 text-lg">
                  <span className="text-keywe-dark">{stat.icon}</span> {stat.label}
                </div>
                <span className="block text-3xl font-bold text-keywe-dark mt-2">
                  {stat.value}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default RecommendationsSection;