"use client";

import { PROPERTIES } from "@/app/data/properties";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

export function PropertyDetail({ id }: { id: string }) {
  const property = PROPERTIES.find(p => p.id.toString() === id);
  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.title} - View ${index + 1}`}
                className="w-full rounded-xl"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <p className="text-xl text-primary font-semibold mb-6">{property.price}</p>
          <p className="text-gray-600 mb-8">{property.address}</p>

          <div className="flex items-center gap-12 mb-8">
            <div className="text-center">
              <span className="block text-2xl font-bold">{property.beds}</span>
              <span className="text-gray-500">Beds</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold">{property.baths}</span>
              <span className="text-gray-500">Baths</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold">{property.sqft}</span>
              <span className="text-gray-500">Sqft</span>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-600 mb-8">{property.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="grid grid-cols-2 gap-4 mb-12">
            {property.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Agent</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone" />
              <Textarea placeholder="Message" className="h-32" />
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}