import { HouseDoor, People, GeoAlt, Telephone } from 'react-bootstrap-icons';

const RecommendationsSection = () => {
  return (
    <section className="relative bg-gradient-to-b recommendations-bg recommendations-bg-2 from-white to-keywe-pale py-24 overflow-hidden text-center">
      
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

      </div>
    </section>
  );
};

export default RecommendationsSection;