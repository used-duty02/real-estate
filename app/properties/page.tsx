import { PropertyGrid } from "@/components/properties/PropertyGrid";

export default function PropertiesPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">All Properties</h1>
          <PropertyGrid />
        </div>
      </div>
    </main>
  );
}