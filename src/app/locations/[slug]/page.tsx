import React from 'react';
import { SEO_LOCATIONS } from '@/data/mockData';
import LocationDetailClient from '@/components/LocationDetailClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return SEO_LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LocationPage({ params }: LocationPageProps) {
  const resolvedParams = await params;
  const location = SEO_LOCATIONS.find((loc) => loc.slug === resolvedParams.slug);

  if (!location) {
    notFound();
  }

  return <LocationDetailClient location={location} />;
}
