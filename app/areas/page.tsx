import { AREAS } from "@/app/data/areas";

export default function AreasPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Service Areas</h1>
            <p className="text-lg text-gray-600">
              Explore luxury properties in Southern California&apos;s most sought-after locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AREAS.map((area) => (
              <div key={area.id} className="group relative overflow-hidden rounded-xl">
                <div className="relative h-96">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <h2 className="text-3xl font-bold mb-3">{area.name}</h2>
                    <p className="text-lg mb-3">{area.description}</p>
                    <p className="text-lg font-semibold">{area.properties} Properties Available</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}