"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative pt-14 md:h-screen md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100vh-8rem)] flex flex-col md:flex-row items-center justify-between py-20 md:py-0">
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-image.jpg"
                alt="Luxury Home"
                width={2000}
                height={1333}
                className="w-full h-[300px] md:h-[600px] object-cover rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Find Your Dream
              <span className="block text-primary">Luxury Home</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Discover exceptional properties that redefine luxury living. Our
              curated collection of premium real estate offers unparalleled
              elegance and comfort.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full">
              <Button size="lg" className="flex items-center w-full">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Appointment
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link href="/properties">
                  View Properties
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}