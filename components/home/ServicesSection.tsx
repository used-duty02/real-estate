"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="mb-6">
              <h3 className="text-2xl font-light mb-2">Looking</h3>
              <p className="text-3xl font-bold">To Buy?</p>
            </div>
            <p className="text-gray-600 mb-8">
              Discover your perfect home from our curated collection of luxury properties.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="mb-6">
              <h3 className="text-2xl font-light mb-2">Looking</h3>
              <p className="text-3xl font-bold">To Sell?</p>
            </div>
            <p className="text-gray-600 mb-8">
              Let our experts help you get the best value for your property.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="mb-6">
              <h3 className="text-2xl font-light mb-2">Want to know the</h3>
              <p className="text-3xl font-bold">Current Value?</p>
            </div>
            <p className="text-gray-600 mb-8">
              Get a detailed estimate of your property&apos;s current market value.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" className="flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}