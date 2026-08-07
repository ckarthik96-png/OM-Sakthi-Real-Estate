export interface ServiceCategory {
  title: string;
  items: string[];
}

export interface LocationSEO {
  name: string;
  slug: string;
  tagline: string;
}

export const ALL_SERVICES: Record<string, ServiceCategory> = {
  residential: {
    title: "Residential Services",
    items: [
      "Buy House", "Sell House", "Rent House", "Lease House",
      "Buy Apartment", "Sell Apartment", "Rent Apartment", "Lease Apartment",
      "Buy Villa", "Sell Villa", "Rent Villa", "Lease Villa",
      "Buy Independent House", "Sell Independent House", "Rent Independent House", "Lease Independent House"
    ]
  },
  land: {
    title: "Land Services",
    items: [
      "Residential Plots", "Villa Plots", "BDA Plots", "BBMP Sites",
      "DC Converted Sites", "Agricultural Land", "Farm Lands", "Industrial Land",
      "Commercial Land", "Investment Land"
    ]
  },
  commercial: {
    title: "Commercial Real Estate",
    items: [
      "Office Spaces", "Retail Shops", "Showrooms", "Warehouses",
      "Industrial Buildings", "Co-working Spaces", "Commercial Leasing", "Commercial Rentals"
    ]
  },
  investment: {
    title: "Property Investment",
    items: [
      "Pre-Launch Projects", "New Launch Projects", "Ready-to-Move Properties",
      "Luxury Properties", "Investment Consultation", "ROI Analysis", "Rental Income Planning"
    ]
  },
  management: {
    title: "Property Management",
    items: [
      "Tenant Management", "Rent Collection", "Property Maintenance",
      "Property Inspection", "Property Marketing", "Vacant Property Management", "Owner Representation"
    ]
  },
  legal: {
    title: "Legal Services",
    items: [
      "Property Legal Verification", "Title Verification", "EC Verification",
      "Khata Verification", "RERA Verification", "Sale Agreement",
      "Lease Agreement", "Rental Agreement", "Registration Assistance", "Property Mutation"
    ]
  },
  financial: {
    title: "Financial Services",
    items: [
      "Home Loan Assistance", "Loan Eligibility Check", "EMI Calculator",
      "Balance Transfer Assistance", "Loan Documentation", "Property Valuation"
    ]
  },
  documentation: {
    title: "Documentation & Registration",
    items: [
      "Sale Deed", "Gift Deed", "Lease Deed", "Rental Agreement",
      "GPA Documentation", "Partition Deed", "Property Registration Support"
    ]
  }
};

export const LEASE_VS_RENT_DATA = [
  { feature: "Upfront Payment", rent: "Small security deposit (2-10 months)", lease: "Large refundable lease amount (₹5L - ₹50L+)" },
  { feature: "Monthly Payment", rent: "Monthly rent", lease: "Usually none or nominal maintenance" },
  { feature: "Agreement Duration", rent: "Typically 11 months", lease: "Usually 1–3 years" },
  { feature: "Agreement Type", rent: "Rental / Leave & License Agreement", lease: "Registered Lease Deed" },
  { feature: "Refund", rent: "Security deposit returned after deductions", lease: "Full lease amount returned at end of period" },
  { feature: "Best For", rent: "Short-term or flexible living", lease: "Long-term occupancy without monthly rent burden" },
  { feature: "Flexibility", rent: "High", lease: "Lower" },
  { feature: "Maintenance", rent: "As per rental agreement", lease: "As per lease agreement terms" }
];

export const SEO_LOCATIONS: LocationSEO[] = [
  { name: "Muthanallur Cross", slug: "muthanallur-cross", tagline: "Prime Villa & Layout Junction" },
  { name: "Sarjapur Road", slug: "sarjapur-road", tagline: "Fastest Growing IT & Residential Hub" },
  { name: "Dommasandra", slug: "dommasandra", tagline: "High-Appreciation Commercial & Plot Belt" },
  { name: "Attibele", slug: "attibele", tagline: "Industrial & Budget Residential Hub" },
  { name: "Chandapura", slug: "chandapura", tagline: "Affordable Housing & Layout Connectivity" },
  { name: "Electronic City", slug: "electronic-city", tagline: "Major IT Corridor & High-Rise Apartments" },
  { name: "Whitefield", slug: "whitefield", tagline: "Tech Parks & Premium Gated Communities" },
  { name: "Varthur", slug: "varthur", tagline: "Upcoming Metro & Lakeview Projects" },
  { name: "Bellandur", slug: "bellandur", tagline: "ORR Tech Hub & Luxury Apartments" },
  { name: "HSR Layout", slug: "hsr-layout", tagline: "Premium Startup & Residential Sector" },
  { name: "Marathahalli", slug: "marathahalli", tagline: "Central Connectivity & Retail Corridor" },
  { name: "Koramangala", slug: "koramangala", tagline: "Ultra-Luxury Real Estate & Hub" },
  { name: "Hosur Road", slug: "hosur-road", tagline: "Industrial & Expressway Corridor" },
  { name: "Carmelaram", slug: "carmelaram", tagline: "Railway & Residential Villa Belt" },
  { name: "Kodathi", slug: "kodathi", tagline: "Educational & Villa Township Area" },
  { name: "Gunjur", slug: "gunjur", tagline: "Rapidly Developing Residential Hub" },
  { name: "Harlur", slug: "harlur", tagline: "Off-Sarjapur High-Rise Living" },
  { name: "Kaikondrahalli", slug: "kaikondrahalli", tagline: "Lakefront & Luxury Residential Sector" }
];

export interface Property {
  id: string;
  title: string;
  tagline: string;
  category: 'Apartments' | 'Villas' | 'Plots' | 'Commercial' | 'Farm Lands' | 'Rentals' | 'Lease House';
  price: string;
  numericPrice: number;
  location: string;
  areaSqFt: number;
  bedrooms?: number;
  bathrooms?: number;
  status: 'Ready to Move' | 'Under Construction' | 'Newly Launched';
  featured: boolean;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  builder: string;
  reraId?: string;
  address: string;
  nearbySchools: string[];
  nearbyHospitals: string[];
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  propertyInterest: string;
  budget: string;
  location: string;
  status: 'New' | 'Contacted' | 'Site Visit Scheduled' | 'Negotiation' | 'Closed';
  date: string;
  notes?: string;
}

export const MOCK_PROPERTIES: Property[] = [
  {
    id: "om-sakthi-grandeur",
    title: "OM Sakthi Grandeur Luxury Villas",
    tagline: "4 BHK Ultra-Luxury Independent Villas near Muthanallur Cross",
    category: "Villas",
    price: "₹ 1.85 Cr",
    numericPrice: 18500000,
    location: "Muthanallur Cross, Sarjapur",
    areaSqFt: 3200,
    bedrooms: 4,
    bathrooms: 4,
    status: "Ready to Move",
    featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Premium gated community villa with private terrace garden, club house, solar power backup, and top-tier security near Muthanallur Cross hub.",
    amenities: ["Private Garden", "Swimming Pool", "24/7 Security", "Clubhouse", "Power Backup", "EV Charging Station"],
    builder: "OM Sakthi Builders",
    reraId: "PRM/KA/RERA/1251/308/PR/230412",
    address: "Survey No 42/1, Muthanallur Main Road, Sarjapur, Bengaluru - 562125",
    nearbySchools: ["Delhi Public School (DPS)", "Oakridge International School"],
    nearbyHospitals: ["Columbia Asia Clinic", "Motherhood Hospital"]
  },
  {
    id: "sakthi-green-acres",
    title: "Sakthi Premium Residential Plots",
    tagline: "BMRDA Approved Layout Plots with Clear Titles",
    category: "Plots",
    price: "₹ 48.5 Lakhs",
    numericPrice: 4850000,
    location: "Sarjapur Road",
    areaSqFt: 1500,
    status: "Ready to Move",
    featured: true,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"],
    description: "Invest in high-appreciation residential plots featuring asphalt roads, underground drainage, street lights, and instant bank loan approval.",
    amenities: ["BMRDA Approved", "Underground Drainage", "Blacktop Roads", "Compound Wall"],
    builder: "OM Sakthi Infrastructure",
    reraId: "PRM/KA/RERA/1251/308/PR/230919",
    address: "Near Dommasandra Circle, Sarjapur Main Road, Bengaluru",
    nearbySchools: ["Inventure Academy", "TISB"],
    nearbyHospitals: ["Spandana Hospital"]
  },
  {
    id: "sakthi-lease-villa",
    title: "Executive 3 BHK Lease Villa",
    tagline: "Zero Monthly Rent - Long Term Lease Option",
    category: "Lease House",
    price: "₹ 25.0 Lakhs (Refundable Deposit)",
    numericPrice: 2500000,
    location: "Muthanallur Cross",
    areaSqFt: 2200,
    bedrooms: 3,
    bathrooms: 3,
    status: "Ready to Move",
    featured: true,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"],
    description: "Occupancy for 2-3 years under registered lease deed. 100% refundable lease amount upon exit.",
    amenities: ["Covered Parking", "Solar Water Heater", "Gated Security", "Power Backup"],
    builder: "OM Sakthi Managed",
    address: "Muthanallur Cross, Sarjapur, Bengaluru",
    nearbySchools: ["DPS Sarjapur"],
    nearbyHospitals: ["Town Hospital"]
  },
  {
    id: "royal-palms-apartment",
    title: "Royal Palms High-Rise Apartments",
    tagline: "3 BHK Modern Smart Apartments with Lake View",
    category: "Apartments",
    price: "₹ 95.0 Lakhs",
    numericPrice: 9500000,
    location: "Dommasandra, Sarjapur",
    areaSqFt: 1680,
    bedrooms: 3,
    bathrooms: 3,
    status: "Under Construction",
    featured: true,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"],
    description: "Experience modern urban living with 30+ lifestyle amenities, sky lounge, children's play park.",
    amenities: ["Gymnasium", "Rooftop Swimming Pool", "CCTV Surveillance"],
    builder: "Prestige Group Partnered",
    address: "Dommasandra Junction, Sarjapur Road",
    nearbySchools: ["Sarjapur Public School"],
    nearbyHospitals: ["Punya Hospital"]
  }
];

export const MOCK_LEADS: Lead[] = [
  {
    id: "lead-101",
    name: "Ramesh Kumar",
    phone: "+91 98450 12345",
    email: "ramesh.k@gmail.com",
    propertyInterest: "OM Sakthi Grandeur Luxury Villas",
    budget: "₹ 1.5 Cr - ₹ 2.0 Cr",
    location: "Muthanallur Cross",
    status: "Site Visit Scheduled",
    date: "2026-08-06",
    notes: "Client requested site visit on Saturday 11 AM."
  }
];
