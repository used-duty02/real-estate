"use client";

import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export function SocialSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Follow Us on Social Media
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Stay updated with the latest luxury properties and real estate insights
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Facebook className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}