import React from "react";
import { Heart, PatchCheckFill } from "react-bootstrap-icons";

// Mock Data (unchanged)
const properties = [
  {
    id: 1,
    name: "GreenView Residences",
    location: "Whitefield",
    price: "₹ 85L",
    tag: "Trending",
    tagType: "bg-[#6a9e61]",
    verified: true,
    image: "https://placehold.co/600x400/e0e0e0/909090?text=GreenView",
  },
  {
    id: 2,
    name: "Prestige Lakeside",
    location: "Varthur",
    price: "₹ 1.2Cr",
    tag: null,
    verified: true,
    image: "https://placehold.co/600x400/e0e0e0/909090?text=Prestige",
  },
  {
    id: 3,
    name: "Skylight Tower",
    location: "HSR Layout",
    price: "₹ 65L",
    tag: "High Demand",
    tagType: "bg-[#d99c58]",
    verified: true,
    image: "https://placehold.co/600x400/e0e0e0/909090?text=Skylight",
  },
  {
    id: 4,
    name: "Sobha Dream Acres",
    location: "Balagere",
    price: "₹ 75L",
    tag: "New Launch",
    tagType: "bg-[#9cc45c]",
    verified: true,
    image: "https://placehold.co/600x400/e0e0e0/909090?text=Sobha",
  },
  {
    id: 5,
    name: "Orchid Aura",
    location: "Hubarhalli",
    price: "₹ 1.8Cr",
    tag: "Trending",
    tagType: "bg-[#6a9e61]",
    verified: true,
    image: "https://placehold.co/600x400/e0e0e0/909090?text=Orchid",
  },
  {
    id: 6,
    name: "Prestige Elysian",
    location: "Bannerghatta",
    price: "₹ 92L",
    tag: "High Demand",
    tagType: "bg-[#d99c58]",
    verified: true,
    image: "https://placehold.co/600x400/e0e0e0/909090?text=Prestige",
  },
  {
    id: 7,
    name: "Parkside Meadows",
    location: "Jakkur",
    price: "₹ 92L",
    tag: "Trending",
    tagType: "bg-[#6a9e61]",
    verified: true,
    image: "https://placehold.co/600x400/e0e0e0/909090?text=Parkside",
  },
  {
    id: 8,
    name: "BVR Blossoms",
    location: "Sarjapur Road",
    price: "₹ 1.8Cr",
    tag: "High Demand",
    tagType: "bg-[#d99c58]",
    verified: true,
    image: "https://placehold.co/600x400/e0e0e0/909090?text=BVR",
  },
];

const PropertyList = () => {
  return (
    <section
      className="py-20 property-bg"
    //   bg-gray-50 
      aria-label="Trending Properties Collection"
    >
      <div className="container mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700">
            Trending Properties in <span className="font-bold text-gray-900">Mumbai</span>
          </h2>
        </div>

        {/* CSS Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            // SEO: itemscope & itemtype tells Google this is a "Residence" or "SingleFamilyResidence"
            <article
              key={property.id}
              className="group h-full"
              itemScope
              itemType="https://schema.org/SingleFamilyResidence"
            >
              {/* Card Component */}
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100 cursor-pointer">
                {/* Image Wrapper */}
                <div className="relative h-48 bg-gray-200">
                  {/* Tag Badge */}
                  {property.tag && (
                    <span
                      className={`absolute top-2 left-0 text-white px-3 py-1 rounded-r-full z-10 ${property.tagType}`}
                    >
                      {property.tag}
                    </span>
                  )}

                  {/* Verified Badge */}
                  {property.verified && (
                    <span className="absolute bottom-2 left-2 bg-white/95 text-gray-800 text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm flex items-center">
                      <PatchCheckFill
                        className="mr-1 text-keywe-dark"
                        size={14}
                        aria-hidden="true"
                      />
                      Verified
                    </span>
                  )}

                  {/* Heart Icon - Added aria-label for accessibility */}
                  {/* <button
                    className="absolute top-2 right-2 bg-white/80 rounded-full p-2 text-gray-500 hover:bg-white hover:text-red-500 transition-colors z-10"
                    aria-label={`Add ${property.name} to favorites`}
                  >
                    <Heart size={16} />
                  </button> */}

                  {/* SEO: Dynamic Alt Text including Name & Location */}
                  <img
                    src={property.image}
                    alt={`${property.name} in ${property.location}, Mumbai`}
                    itemProp="image"
                    className="w-full h-full object-cover"
                    loading="lazy" // SEO: Improves initial page load speed
                  />
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col flex-1">
                  {/* SEO: Changed h5 to h3 for proper heading hierarchy under h2 */}
                  <h3
                    className="text-2xl font-semibold text-gray-600 truncate mb-1"
                    itemProp="name"
                  >
                    {property.name}
                  </h3>

                  {/* SEO: Address Schema */}
                  <p
                    className=" text-gray-500"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="addressLocality">{property.location}</span>
                  </p>

                  {/* Price Wrapper - "From" and "Price" side-by-side */}
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-gray-500 font-medium">
                      From
                    </span>
                    <span
                      className="text-3xl font-semibold text-gray-600"
                      itemProp="price"
                    >
                      {property.price}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 mb-12">
          <button className="btn-keywe-gradient px-12 py-3">View All</button>
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
