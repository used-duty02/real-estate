"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/app/data/testimonials";
import { Star, ArrowRight } from "lucide-react";

export function SuccessStoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success
              <span className="block">Stories</span>
            </h2>
          </div>
          <div className="space-y-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{testimonial.location}</span>
                </div>
              </div>
            ))}
            <div className="hidden md:flex justify-end">
              <Link href="/testimonials">
                <Button variant="outline" className="flex items-center">
                  View All Testimonials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/testimonials">
            <Button variant="outline" className="w-full">
              View All Testimonials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}