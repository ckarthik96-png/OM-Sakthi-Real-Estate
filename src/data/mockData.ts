export interface Property {
  id: string;
  title: string;
  tagline: string;
  category: 'Apartments' | 'Villas' | 'Plots' | 'Commercial' | 'Farm Lands' | 'Rentals';
  price: string;
  numericPrice: number; // For filtering
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
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Premium gated community villa with private terrace garden, club house, solar power backup, and top-tier security near Muthanallur Cross hub.",
    amenities: ["Private Garden", "Swimming Pool", "24/7 Security", "Clubhouse", "Power Backup", "EV Charging Station"],
    builder: "OM Sakthi Builders",
    reraId: "PRM/KA/RERA/1251/308/PR/230412",
    address: "Survey No 42/1, Muthanallur Main Road, Sarjapur, Bengaluru - 562125",
    nearbySchools: ["Delhi Public School (DPS)", "Oakridge International School", "Greenwood High"],
    nearbyHospitals: ["Columbia Asia Clinic", "Motherhood Hospital", "Manipal Hospital Sarjapur"]
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
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Invest in high-appreciation residential plots featuring asphalt roads, underground drainage, street lights, and instant bank loan approval.",
    amenities: ["BMRDA Approved", "Underground Drainage", "Blacktop Roads", "Compound Wall", "Water Connection"],
    builder: "OM Sakthi Infrastructure",
    reraId: "PRM/KA/RERA/1251/308/PR/230919",
    address: "Near Dommasandra Circle, Sarjapur Main Road, Bengaluru",
    nearbySchools: ["Inventure Academy", "TISB International School"],
    nearbyHospitals: ["Spandana Hospital", "Narayana Hrudayalaya"]
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
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Experience modern urban living with 30+ lifestyle amenities, sky lounge, children's play park, and rapid connectivity to IT parks in Whitefield & Bellandur.",
    amenities: ["Gymnasium", "Rooftop Swimming Pool", "Squash Court", "Kid's Play Area", "CCTV Surveillance"],
    builder: "Prestige Group Partnered",
    address: "Dommasandra Junction, Sarjapur - Attibele Road, Bengaluru",
    nearbySchools: ["Sarjapur Public School", "St. Philomena High School"],
    nearbyHospitals: ["Town Hospital Sarjapur", "Punya Hospital"]
  },
  {
    id: "sakthi-commercial-hub",
    title: "OM Sakthi Commercial Retail Plaza",
    tagline: "High Footfall Commercial Showrooms & Office Spaces",
    category: "Commercial",
    price: "₹ 2.40 Cr",
    numericPrice: 24000000,
    location: "Muthanallur Cross",
    areaSqFt: 2800,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Prime main road facing commercial property ideal for retail chains, banks, clinics, and IT offices at Muthanallur Cross junction.",
    amenities: ["100% Power Backup", "High-speed Elevators", "Basement Parking", "Fire Safety System"],
    builder: "OM Sakthi Commercial",
    address: "Main Muthanallur Cross Junction, Sarjapur Road, Bengaluru",
    nearbySchools: [],
    nearbyHospitals: []
  },
  {
    id: "green-valley-farms",
    title: "Green Valley Agro Farm Lands",
    tagline: "1/4 Acre & 1/2 Acre Managed Farm Plots with Fruit Trees",
    category: "Farm Lands",
    price: "₹ 62.0 Lakhs",
    numericPrice: 6200000,
    location: "Attibele - Sarjapur Belt",
    areaSqFt: 10890,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Serene weekend getaway farm plots planted with Teak, Mahogany, and Organic Fruit trees with drip irrigation and 24/7 caretaker system.",
    amenities: ["Drip Irrigation", "Fenced Boundary", "Caretaker Service", "Drip System", "Clubhouse Access"],
    builder: "OM Sakthi Eco Lands",
    address: "Near Attibele Road, Sarjapur Border, Bengaluru",
    nearbySchools: [],
    nearbyHospitals: []
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
    notes: "Client requested site visit on Saturday 11 AM. Prefers East facing villa."
  },
  {
    id: "lead-102",
    name: "Priya Sharma",
    phone: "+91 97110 56789",
    email: "priya.sharma@techcorp.com",
    propertyInterest: "Sakthi Premium Residential Plots",
    budget: "₹ 40 L - ₹ 60 L",
    location: "Sarjapur Road",
    status: "New",
    date: "2026-08-06",
    notes: "Inquired via AI Assistant chatbot on website."
  },
  {
    id: "lead-103",
    name: "Suresh Reddy",
    phone: "+91 99001 88822",
    email: "sreddy@investments.in",
    propertyInterest: "OM Sakthi Commercial Retail Plaza",
    budget: "₹ 2 Cr+",
    location: "Muthanallur Cross",
    status: "Negotiation",
    date: "2026-08-05",
    notes: "Looking for ground floor showroom space for bank branch."
  }
];
