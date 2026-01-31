import { GeoAltFill, ChevronRight } from 'react-bootstrap-icons';

const HomeHeroSection = () => {
    return (
        <section className="flex flex-col justify-center py-32 bg-gradient-to-b from-transparent to-keywe-pale/50 text-center">
            <div className="container mx-auto px-4">

                {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    Find properties near you
                </h1>

                {/* "Showing properties in..." Badge */}
                <div className="mb-8 flex items-center justify-center flex-wrap gap-2 text-gray-500 text-xl">
                    <span className="font-light">Showing properties in</span>
                    
                    <div className="badge-location">
                        <GeoAltFill className="text-keywe-dark" />
                        Mumbai
                        <ChevronRight className="ml-2 text-gray-400" size={12} />
                    </div>
                </div>

                {/* "Not your city?" Floating Button */}
                <div className="mt-2">
                    <button className="bg-gray-100 border border-gray-300 text-gray-500 font-medium px-6 py-2 rounded-full inline-flex items-center shadow-sm hover:bg-gray-200 hover:-translate-y-px transition-all">
                        <span className="mr-1">Not your city?</span>
                        <span className="text-gray-500">Change</span>
                        <ChevronRight className="ml-2" size={12} />
                    </button>
                </div>

            </div>
        </section>
  );
};

export default HomeHeroSection;