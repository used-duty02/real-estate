"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PROPERTIES } from "@/app/data/properties";

export function PropertyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROPERTIES.map((property) => (
        <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="relative h-64">
            <img
              src={property.images[0]}
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
  );
}