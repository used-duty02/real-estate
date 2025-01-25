import { PropertyDetail } from "@/components/properties/PropertyDetail";
import { PROPERTIES } from "@/app/data/properties";

export async function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    id: property.id.toString(),
  }));
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen">
      <div className="pt-28 pb-20">
        <PropertyDetail id={params.id} />
      </div>
    </main>
  );
}