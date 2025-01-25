import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Luxury Villa with Ocean View",
    address: "123 Coastal Drive",
    price: "$4,500,000",
    beds: 5,
    baths: 6,
    sqft: "6,200",
    image: "/images/property-1.jpg"
  },
  {
    id: 2,
    title: "Modern Downtown Penthouse",
    address: "456 Urban Avenue",
    price: "$2,800,000",
    beds: 3,
    baths: 3.5,
    sqft: "3,100",
    image: "/images/property-2.jpg"
  }
];

export function FeaturedProperties() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Properties</h2>
            <p className="mt-2 text-lg text-gray-600">Discover our hand-picked luxury properties</p>
          </div>
          <Link href="/properties">
            <Button variant="outline" className="hidden md:flex items-center">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROPERTIES.map((property) => (
            <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full">
                  <span className="font-semibold text-primary">{property.price}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.address}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{property.beds} Beds</span>
                  <span>•</span>
                  <span>{property.baths} Baths</span>
                  <span>•</span>
                  <span>{property.sqft} sqft</span>
                </div>
                <Link href={`/properties/${property.id}`}>
                  <Button className="w-full">Learn More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/properties">
            <Button variant="outline" className="w-full">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}