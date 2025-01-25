"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TEAM_MEMBERS } from "@/app/data/team";
import { Users } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Looking to Speak with an Expert?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team of experienced professionals is here to help you find your dream home
          </p>
          <div className="flex justify-center sm:w-full">
          <Link href="/team">
            <Button className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Meet Our Team
            </Button>
          </Link>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {TEAM_MEMBERS.slice(0, 3).map((member) => (
            <div key={member.id} className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}