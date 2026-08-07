import { MOCK_PROPERTIES } from '@/data/mockData';
import PropertyDetailClient from '@/components/PropertyDetailClient';

export function generateStaticParams() {
  return MOCK_PROPERTIES.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const property = MOCK_PROPERTIES.find(p => p.id === resolvedParams.id) || MOCK_PROPERTIES[0];

  return <PropertyDetailClient property={property} />;
}
