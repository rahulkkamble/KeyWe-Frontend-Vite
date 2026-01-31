import { Heart, PatchCheckFill, LightningChargeFill } from 'react-bootstrap-icons';

// Mock Data (Same as your file)
const properties = [
    { id: 1, name: "GreenView Residences", location: "Whitefield", price: "₹ 85 L", tag: "Trending", tagType: "bg-[#6a9e61]", verified: true, image: "https://placehold.co/600x400/e0e0e0/909090?text=GreenView" },
    { id: 2, name: "Prestige Lakeside ...", location: "Varthur", price: "₹ 1.2 Cr", tag: null, verified: true, image: "https://placehold.co/600x400/e0e0e0/909090?text=Prestige" },
    { id: 3, name: "Skylight Tower", location: "HSR Layout", price: "₹ 65,000", tag: "High Demand", tagType: "bg-[#d99c58]", verified: true, image: "https://placehold.co/600x400/e0e0e0/909090?text=Skylight" },
    { id: 4, name: "Sobha Dream Acres", location: "Balagere", price: "₹ 75 L", tag: "New Launch", tagType: "bg-[#9cc45c]", verified: true, image: "https://placehold.co/600x400/e0e0e0/909090?text=Sobha" },
    { id: 5, name: "Orchid Aura", location: "Hubarhalli", price: "₹ 1.8 Cr", tag: "Trending", tagType: "bg-[#6a9e61]", verified: true, image: "https://placehold.co/600x400/e0e0e0/909090?text=Orchid" },
    { id: 6, name: "Prestige Elysian", location: "Bannerghatta", price: "₹ 92 L", tag: "High Demand", tagType: "bg-[#d99c58]", verified: true, image: "https://placehold.co/600x400/e0e0e0/909090?text=Prestige" },
    { id: 7, name: "Parkside Meadows", location: "Jakkur", price: "₹ 92 L", tag: "Trending", tagType: "bg-[#6a9e61]", verified: true, image: "https://placehold.co/600x400/e0e0e0/909090?text=Parkside" },
    { id: 8, name: "BVR Blossoms", location: "Sarjapur Road", price: "₹ 1.8 Cr", tag: "High Demand", tagType: "bg-[#d99c58]", verified: true, image: "https://placehold.co/600x400/e0e0e0/909090?text=BVR" },
];

const PropertyList = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-12">

                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Trending Properties in <span className="text-gray-900">Mumbai</span>
                    </h2>
                </div>

                {/* CSS Grid System */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {properties.map((property) => (
                        <div key={property.id} className="group">
                            
                            {/* Card Component */}
                            <div className="bg-white rounded-2xl shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100">

                                {/* Image Wrapper */}
                                <div className="relative h-48 bg-gray-200">
                                    {/* Tag Badge */}
                                    {property.tag && (
                                        <span className={`absolute top-2 left-0 text-xs font-bold text-white px-3 py-1 rounded-r-full z-10 ${property.tagType}`}>
                                            {property.tag}
                                        </span>
                                    )}

                                    {/* Verified Badge */}
                                    {property.verified && (
                                        <span className="absolute bottom-2 left-2 bg-white/95 text-gray-800 text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm flex items-center">
                                            <PatchCheckFill className="mr-1 text-keywe-dark" size={14} />
                                            KeyWe Verified
                                        </span>
                                    )}

                                    {/* Heart Icon */}
                                    <button className="absolute top-2 right-2 bg-white/80 rounded-full p-2 text-gray-500 hover:bg-white hover:text-red-500 transition-colors z-10">
                                        <Heart size={16} />
                                    </button>

                                    {/* Image */}
                                    <img
                                        src={property.image}
                                        alt={property.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Card Body */}
                                <div className="p-4 flex flex-col flex-1">
                                    <h5 className="text-lg font-bold text-gray-800 truncate mb-1">{property.name}</h5>
                                    <p className="text-sm text-gray-500 mb-auto">{property.location}</p>

                                    {/* Price & Book Wrapper */}
                                    <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-100">
                                        <div>
                                            <span className="text-gray-400 text-xs block leading-tight">From</span>
                                            <span className="text-lg font-bold text-gray-900">{property.price}</span>
                                        </div>

                                        <button className="bg-white border border-keywe-dark text-keywe-dark font-semibold rounded-lg px-4 py-1.5 text-sm hover:bg-keywe-dark hover:text-white hover:shadow-md transition-all flex items-center">
                                            <LightningChargeFill size={14} className="mr-1" /> Book
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12 mb-12">
                    <button className="btn-keywe-gradient px-12 py-3">
                        View All
                    </button>
                </div>

            </div>
        </section>
    );
};

export default PropertyList;