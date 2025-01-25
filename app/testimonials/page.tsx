import { TESTIMONIALS } from "@/app/data/testimonials";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h1>
            <p className="text-lg text-gray-600">
              Discover how we&apos;ve helped our clients find their perfect homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-lg">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}