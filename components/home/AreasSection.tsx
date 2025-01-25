"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AREAS } from "@/app/data/areas";
import { MapPin, ArrowRight } from "lucide-react";

export function AreasSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Areas We Serve</h2>
            <p className="mt-2 text-lg text-gray-600">Discover luxury properties across Southern California&apos;s most desirable locations</p>
          </div>
          <Link href="/areas" className="hidden md:block">
            <Button variant="outline" className="flex items-center">
              View All Areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {AREAS.slice(0, 3).map((area) => (
            <div key={area.id} className="group relative overflow-hidden rounded-xl">
              <div className="relative h-80">
                <img
                  src={area.image}
                  alt={area.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-2">{area.name}</h3>
                  <p className="text-sm mb-2">{area.description}</p>
                  <p className="text-sm font-semibold">{area.properties} Properties</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/areas">
            <Button variant="outline" className="w-full">
              View All Areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}