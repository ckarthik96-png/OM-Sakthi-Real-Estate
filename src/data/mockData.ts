export interface ServiceCategory {
  title: string;
  items: string[];
}

export interface LocationSEO {
  name: string;
  slug: string;
  tagline: string;
  overview: string;
  image: string;
  avgPricePerSqFt: string;
}

export interface Property {
  id: string;
  title: string;
  tagline: string;
  category: 'Apartments' | 'Villas' | 'Plots' | 'Commercial' | 'Farm Lands' | 'Rentals' | 'Lease House';
  price: string;
  numericPrice: number;
  location: string;
  localitySlug: string;
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
  masterPlanImage?: string;
  locationMapImage?: string;
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
  legal: {
    title: "Legal Services",
    items: [
      "Property Legal Verification", "Title Verification", "EC Verification",
      "Khata Verification", "RERA Verification", "Sale Agreement",
      "Lease Agreement", "Rental Agreement", "Registration Assistance", "Property Mutation"
    ]
  }
};

export const LEASE_VS_RENT_DATA = [
  { feature: "Upfront Payment", rent: "Small security deposit (2-10 months)", lease: "Large refundable lease amount (₹5L - ₹50L+)" },
  { feature: "Monthly Payment", rent: "Monthly rent", lease: "Usually none or nominal maintenance" },
  { feature: "Agreement Duration", rent: "Typically 11 months", lease: "Usually 1–3 years" },
  { feature: "Agreement Type", rent: "Rental / Leave & License Agreement", lease: "Registered Lease Deed" },
  { feature: "Refund", rent: "Security deposit returned after deductions", lease: "Full lease amount returned at end of period" }
];

export const SEO_LOCATIONS: LocationSEO[] = [
  { name: "Muthanallur Cross", slug: "muthanallur-cross", tagline: "Prime Villa & Layout Junction", overview: "Top villa corridor at Sarjapur Road junction featuring luxury independent homes and BMRDA layouts.", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 5,800 / sq.ft" },
  { name: "Sarjapur Road", slug: "sarjapur-road", tagline: "Fastest Growing IT & Residential Hub", overview: "Bengaluru's highest appreciation IT residential corridor connecting ORR to Electronic City.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 6,400 / sq.ft" },
  { name: "Dommasandra", slug: "dommasandra", tagline: "High-Appreciation Commercial & Plot Belt", overview: "Strategic circle connecting Whitefield, Varthur & Sarjapur with rapid commercial growth.", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 5,200 / sq.ft" },
  { name: "Attibele", slug: "attibele", tagline: "Industrial & Budget Residential Hub", overview: "Key industrial and residential hub offering high-ROI budget plots and agro-farm lands.", image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 3,800 / sq.ft" },
  { name: "Chandapura", slug: "chandapura", tagline: "Affordable Housing & Layout Connectivity", overview: "Rapidly expanding residential layout sector with direct expressway connectivity to Hosur Road.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 4,100 / sq.ft" },
  { name: "Electronic City", slug: "electronic-city", tagline: "Major IT Corridor & High-Rise Apartments", overview: "India's premier IT hub featuring high-rise smart gated communities and rental yield properties.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 6,900 / sq.ft" },
  { name: "Whitefield", slug: "whitefield", tagline: "Tech Parks & Premium Gated Communities", overview: "Major East Bengaluru IT export zone with luxury apartments and metro rail connectivity.", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 8,200 / sq.ft" },
  { name: "Varthur", slug: "varthur", tagline: "Upcoming Metro & Lakeview Projects", overview: "Rapidly transforming lakeview township bridging Sarjapur Road and Whitefield IT corridors.", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 6,600 / sq.ft" },
  { name: "Bellandur", slug: "bellandur", tagline: "ORR Tech Hub & Luxury Apartments", overview: "Outer Ring Road IT tech park corridor with premium luxury high-rise residences.", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 9,500 / sq.ft" },
  { name: "HSR Layout", slug: "hsr-layout", tagline: "Premium Startup & Residential Sector", overview: "Bengaluru's top startup and residential sector known for BDA layouts and modern luxury living.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 11,200 / sq.ft" },
  { name: "Marathahalli", slug: "marathahalli", tagline: "Central Connectivity & Retail Corridor", overview: "Central ORR intersection surrounded by retail malls, tech parks, and commercial spaces.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 8,100 / sq.ft" },
  { name: "Koramangala", slug: "koramangala", tagline: "Ultra-Luxury Real Estate & Hub", overview: "Bengaluru's prime cosmopolitan luxury villa and commercial epicenter.", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 14,500 / sq.ft" },
  { name: "Hosur Road", slug: "hosur-road", tagline: "Industrial & Expressway Corridor", overview: "Major industrial arterial highway connecting Bengaluru to Tamil Nadu manufacturing hubs.", image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 4,900 / sq.ft" },
  { name: "Carmelaram", slug: "carmelaram", tagline: "Railway & Residential Villa Belt", overview: "Peaceful green residential villa hub with Carmelaram railway station connectivity.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 6,100 / sq.ft" },
  { name: "Kodathi", slug: "kodathi", tagline: "Educational & Villa Township Area", overview: "Educational hub housing international schools, engineering colleges, and gated villas.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 5,900 / sq.ft" },
  { name: "Gunjur", slug: "gunjur", tagline: "Rapidly Developing Residential Hub", overview: "Fast growing residential layout belt off Varthur main road.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 5,400 / sq.ft" },
  { name: "Harlur", slug: "harlur", tagline: "Off-Sarjapur High-Rise Living", overview: "Established residential enclave situated between Sarjapur Road and HSR Layout.", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 7,800 / sq.ft" },
  { name: "Kaikondrahalli", slug: "kaikondrahalli", tagline: "Lakefront & Luxury Residential Sector", overview: "Scenic lakefront residential sector known for Kaikondrahalli lake park and luxury apartments.", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80", avgPricePerSqFt: "₹ 8,900 / sq.ft" }
];

export const MOCK_PROPERTIES: Property[] = [
  // Muthanallur Cross Properties (6 listings)
  {
    id: "muthanallur-grandeur-villas",
    title: "OM Sakthi Grandeur Ultra-Luxury Villas",
    tagline: "4 BHK Independent Gated Villas near Muthanallur Cross",
    category: "Villas",
    price: "₹ 1.85 Cr",
    numericPrice: 18500000,
    location: "Muthanallur Cross",
    localitySlug: "muthanallur-cross",
    areaSqFt: 3200,
    bedrooms: 4,
    bathrooms: 4,
    status: "Ready to Move",
    featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"],
    description: "Premium gated community villa with private terrace garden, club house, solar power backup, and top-tier security near Muthanallur Cross hub.",
    amenities: ["Private Garden", "Swimming Pool", "24/7 Security", "Clubhouse", "EV Charging Station"],
    builder: "OM Sakthi Builders",
    reraId: "PRM/KA/RERA/1251/308/PR/230412",
    address: "Survey No 42/1, Muthanallur Main Road, Sarjapur, Bengaluru - 562125",
    nearbySchools: ["Delhi Public School (DPS)", "Oakridge International School"],
    nearbyHospitals: ["Columbia Asia Clinic", "Motherhood Hospital"]
  },
  {
    id: "muthanallur-executive-lease-villa",
    title: "Executive 3 BHK Refundable Lease Villa",
    tagline: "Zero Monthly Rent - Long Term 3-Year Registered Lease",
    category: "Lease House",
    price: "₹ 25.0 Lakhs (Deposit)",
    numericPrice: 2500000,
    location: "Muthanallur Cross",
    localitySlug: "muthanallur-cross",
    areaSqFt: 2200,
    bedrooms: 3,
    bathrooms: 3,
    status: "Ready to Move",
    featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"],
    description: "100% refundable lease deposit option for 3 years without any monthly rent burden.",
    amenities: ["Covered Parking", "Solar Water Heater", "Gated Security"],
    builder: "OM Sakthi Managed",
    address: "Muthanallur Cross, Sarjapur Road, Bengaluru",
    nearbySchools: ["DPS Sarjapur"],
    nearbyHospitals: ["Town Hospital"]
  },
  {
    id: "muthanallur-commercial-plaza",
    title: "Sakthi Main Road Commercial Retail Hub",
    tagline: "Prime Showroom & Office Space facing Main Junction",
    category: "Commercial",
    price: "₹ 2.40 Cr",
    numericPrice: 24000000,
    location: "Muthanallur Cross",
    localitySlug: "muthanallur-cross",
    areaSqFt: 2800,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: ["/OM-Sakthi-Real-Estate/building_commercial_hub.jpg", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"],
    description: "High footfall commercial building suitable for bank branches, retail chains, and IT offices.",
    amenities: ["100% Power Backup", "High-speed Elevators", "Basement Parking"],
    builder: "OM Sakthi Commercial",
    address: "Main Muthanallur Cross Junction, Sarjapur Road",
    nearbySchools: [],
    nearbyHospitals: []
  },
  {
    id: "muthanallur-villa-plots-phase2",
    title: "Sakthi Enclave BMRDA Villa Plots",
    tagline: "30x40 & 30x50 East Facing Residential Plots",
    category: "Plots",
    price: "₹ 42.0 Lakhs",
    numericPrice: 4200000,
    location: "Muthanallur Cross",
    localitySlug: "muthanallur-cross",
    areaSqFt: 1200,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"],
    description: "BMRDA approved layout with asphalt roads, underground water lines, and electricity.",
    amenities: ["BMRDA Approved", "Underground Drainage", "Blacktop Roads"],
    builder: "OM Sakthi Infrastructure",
    reraId: "PRM/KA/RERA/1251/308/PR/230919",
    address: "Near Muthanallur Circle, Sarjapur",
    nearbySchools: ["Greenwood High"],
    nearbyHospitals: ["Spandana Clinic"]
  },
  {
    id: "muthanallur-greenwood-apartments",
    title: "Greenwood Residency 3 BHK Apartments",
    tagline: "Modern High-Rise Smart Apartments",
    category: "Apartments",
    price: "₹ 82.0 Lakhs",
    numericPrice: 8200000,
    location: "Muthanallur Cross",
    localitySlug: "muthanallur-cross",
    areaSqFt: 1550,
    bedrooms: 3,
    bathrooms: 2,
    status: "Under Construction",
    featured: false,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: ["/OM-Sakthi-Real-Estate/building_greenwood_apt.jpg", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"],
    description: "Luxury living with rooftop swimming pool, gym, and children play area.",
    amenities: ["Gymnasium", "Swimming Pool", "CCTV"],
    builder: "Greenwood Developers",
    address: "Muthanallur Main Road, Sarjapur",
    nearbySchools: ["TISB"],
    nearbyHospitals: ["Punya Hospital"]
  },
  {
    id: "muthanallur-agro-farm-land",
    title: "Sakthi Eco Farm Lands",
    tagline: "1/4 Acre Managed Agro Farm Plots with Fruit Trees",
    category: "Farm Lands",
    price: "₹ 55.0 Lakhs",
    numericPrice: 5500000,
    location: "Muthanallur Cross",
    localitySlug: "muthanallur-cross",
    areaSqFt: 10890,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80"],
    description: "Weekend getaway farm plots planted with Teak and Organic Fruit trees.",
    amenities: ["Drip Irrigation", "Fenced Boundary", "Caretaker"],
    builder: "OM Sakthi Eco",
    address: "Muthanallur - Attibele Link Road",
    nearbySchools: [],
    nearbyHospitals: []
  },

  // Sarjapur Road Properties (6 listings)
  {
    id: "sarjapur-green-acres-plots",
    title: "Sakthi Premium Residential Plots",
    tagline: "BMRDA Approved Layout Plots with Clear Titles",
    category: "Plots",
    price: "₹ 48.5 Lakhs",
    numericPrice: 4850000,
    location: "Sarjapur Road",
    localitySlug: "sarjapur-road",
    areaSqFt: 1500,
    status: "Ready to Move",
    featured: true,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"],
    description: "Invest in high-appreciation residential plots featuring asphalt roads and underground drainage.",
    amenities: ["BMRDA Approved", "Underground Drainage", "Blacktop Roads"],
    builder: "OM Sakthi Infrastructure",
    reraId: "PRM/KA/RERA/1251/308/PR/230919",
    address: "Near Dommasandra Circle, Sarjapur Main Road, Bengaluru",
    nearbySchools: ["Inventure Academy", "TISB"],
    nearbyHospitals: ["Spandana Hospital"]
  },
  {
    id: "sarjapur-prestige-smart-apartments",
    title: "Prestige Smart City 3 BHK Apartments",
    tagline: "Township Living on Sarjapur Main Road",
    category: "Apartments",
    price: "₹ 1.15 Cr",
    numericPrice: 11500000,
    location: "Sarjapur Road",
    localitySlug: "sarjapur-road",
    areaSqFt: 1750,
    bedrooms: 3,
    bathrooms: 3,
    status: "Under Construction",
    featured: true,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: ["/OM-Sakthi-Real-Estate/building_prestige_smart.jpg", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"],
    description: "Mega township with 50+ amenities, school inside campus, and high-speed metro access.",
    amenities: ["Clubhouse", "Squash Court", "Olympic Pool"],
    builder: "Prestige Group",
    address: "Sarjapur Main Road, Bengaluru",
    nearbySchools: ["Inventure Academy"],
    nearbyHospitals: ["Manipal Hospital"]
  },
  {
    id: "sarjapur-signature-villas",
    title: "Sakthi Signature Row Villas",
    tagline: "3 & 4 BHK Duplex Row Villas",
    category: "Villas",
    price: "₹ 1.60 Cr",
    numericPrice: 16000000,
    location: "Sarjapur Road",
    localitySlug: "sarjapur-road",
    areaSqFt: 2800,
    bedrooms: 4,
    bathrooms: 4,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"],
    description: "Modern duplex row villas with private car parking and rooftop garden.",
    amenities: ["Rooftop Garden", "Gated Security", "Solar Backup"],
    builder: "OM Sakthi Builders",
    address: "Sarjapur Main Road, Bengaluru",
    nearbySchools: ["Oakridge School"],
    nearbyHospitals: ["Motherhood Hospital"]
  },
  {
    id: "sarjapur-rental-flat-2bhk",
    title: "Luxury 2 BHK Rental Flat",
    tagline: "Fully Furnished Apartment on Sarjapur Main Road",
    category: "Rentals",
    price: "₹ 38,000 / month",
    numericPrice: 38000,
    location: "Sarjapur Road",
    localitySlug: "sarjapur-road",
    areaSqFt: 1200,
    bedrooms: 2,
    bathrooms: 2,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"],
    description: "Gated community flat with modular kitchen, AC, TV, and gym access.",
    amenities: ["Furnished", "Gym", "Covered Parking"],
    builder: "OM Sakthi Managed",
    address: "Near Wipro SEZ, Sarjapur Main Road",
    nearbySchools: ["DPS Sarjapur"],
    nearbyHospitals: ["Manipal Hospital"]
  },
  {
    id: "sarjapur-commercial-office-space",
    title: "IT Tech Park Commercial Office Floor",
    tagline: "Plug & Play Office Space for Tech Startups",
    category: "Commercial",
    price: "₹ 3.50 Cr",
    numericPrice: 35000000,
    location: "Sarjapur Road",
    localitySlug: "sarjapur-road",
    areaSqFt: 4500,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: ["/OM-Sakthi-Real-Estate/building_commercial_hub.jpg"],
    description: "Fully furnished 80-seater office floor with conference rooms and cafeteria.",
    amenities: ["100% Power Backup", "High-speed Lifts", "Security"],
    builder: "Sakthi Commercial",
    address: "Sarjapur Main Road IT Belt",
    nearbySchools: [],
    nearbyHospitals: []
  },
  {
    id: "sarjapur-corner-layout-plot",
    title: "Corner Residential Layout Plot",
    tagline: "40x60 North-East Facing Corner Site",
    category: "Plots",
    price: "₹ 78.0 Lakhs",
    numericPrice: 7800000,
    location: "Sarjapur Road",
    localitySlug: "sarjapur-road",
    areaSqFt: 2400,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1200&q=80"],
    description: "Vastu compliant North-East facing plot inside BMRDA approved township.",
    amenities: ["BMRDA Approved", "Vastu Compliant", "Asphalt Roads"],
    builder: "OM Sakthi Infrastructure",
    address: "Off Sarjapur Main Road",
    nearbySchools: ["TISB"],
    nearbyHospitals: ["Columbia Asia"]
  },

  // Dommasandra Properties (6 listings)
  {
    id: "dommasandra-royal-palms-apartment",
    title: "Royal Palms High-Rise Apartments",
    tagline: "3 BHK Modern Smart Apartments with Lake View",
    category: "Apartments",
    price: "₹ 95.0 Lakhs",
    numericPrice: 9500000,
    location: "Dommasandra",
    localitySlug: "dommasandra",
    areaSqFt: 1680,
    bedrooms: 3,
    bathrooms: 3,
    status: "Under Construction",
    featured: true,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: ["/OM-Sakthi-Real-Estate/building_royal_palms.jpg", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"],
    description: "Experience modern urban living with 30+ lifestyle amenities, sky lounge, children's play park.",
    amenities: ["Gymnasium", "Rooftop Swimming Pool", "CCTV Surveillance"],
    builder: "Prestige Group Partnered",
    address: "Dommasandra Junction, Sarjapur Road",
    nearbySchools: ["Sarjapur Public School"],
    nearbyHospitals: ["Punya Hospital"]
  },
  {
    id: "dommasandra-lease-apartment",
    title: "Dommasandra Circle 2 BHK Lease Apartment",
    tagline: "Refundable Lease Amount ₹ 18 Lakhs",
    category: "Lease House",
    price: "₹ 18.0 Lakhs (Deposit)",
    numericPrice: 1800000,
    location: "Dommasandra",
    localitySlug: "dommasandra",
    areaSqFt: 1150,
    bedrooms: 2,
    bathrooms: 2,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"],
    description: "Registered lease deed for 2 years. Zero monthly rent payment.",
    amenities: ["Gated Security", "Power Backup", "Lift"],
    builder: "OM Sakthi Managed",
    address: "Dommasandra Circle, Sarjapur Road",
    nearbySchools: ["Public School"],
    nearbyHospitals: ["Spandana Hospital"]
  },
  {
    id: "dommasandra-villa-plots-layout",
    title: "Dommasandra Junction Layout Plots",
    tagline: "30x40 BMRDA Gated Layout Plots",
    category: "Plots",
    price: "₹ 45.0 Lakhs",
    numericPrice: 4500000,
    location: "Dommasandra",
    localitySlug: "dommasandra",
    areaSqFt: 1200,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"],
    description: "Clear title residential plots with immediate bank loan approval.",
    amenities: ["BMRDA Approved", "Blacktop Roads", "Water Connection"],
    builder: "OM Sakthi Infrastructure",
    address: "Dommasandra Circle",
    nearbySchools: ["Inventure"],
    nearbyHospitals: ["Punya Hospital"]
  },
  {
    id: "dommasandra-commercial-shops",
    title: "Commercial Retail Store Shops",
    tagline: "Main Road Facing Retail Outlets",
    category: "Commercial",
    price: "₹ 1.25 Cr",
    numericPrice: 12500000,
    location: "Dommasandra",
    localitySlug: "dommasandra",
    areaSqFt: 1400,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"],
    description: "Ideal for pharmacies, supermarkets, and clinics on Dommasandra main road.",
    amenities: ["Main Road Facing", "Parking", "Power Backup"],
    builder: "Sakthi Commercial",
    address: "Dommasandra Main Junction",
    nearbySchools: [],
    nearbyHospitals: []
  },
  {
    id: "dommasandra-luxury-duplex-villa",
    title: "Lakeview 4 BHK Duplex Villa",
    tagline: "Private Swimming Pool & Garden",
    category: "Villas",
    price: "₹ 2.10 Cr",
    numericPrice: 21000000,
    location: "Dommasandra",
    localitySlug: "dommasandra",
    areaSqFt: 3600,
    bedrooms: 4,
    bathrooms: 5,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"],
    description: "Ultra-luxury lakefront villa with private swimming pool and home theater room.",
    amenities: ["Private Pool", "Home Theater", "Solar Backup"],
    builder: "OM Sakthi Builders",
    address: "Near Dommasandra Lake",
    nearbySchools: ["DPS"],
    nearbyHospitals: ["Manipal"]
  },
  {
    id: "dommasandra-rental-house-3bhk",
    title: "Spacious 3 BHK Rental Independent House",
    tagline: "Independent House with Covered Car Parking",
    category: "Rentals",
    price: "₹ 32,000 / month",
    numericPrice: 32000,
    location: "Dommasandra",
    localitySlug: "dommasandra",
    areaSqFt: 1800,
    bedrooms: 3,
    bathrooms: 3,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80"],
    description: "Independent 3 BHK ground floor house with garden and car parking.",
    amenities: ["Pet Friendly", "Covered Parking", "Solar Water"],
    builder: "OM Sakthi Managed",
    address: "Dommasandra Main Road",
    nearbySchools: ["Public School"],
    nearbyHospitals: ["Spandana"]
  },

  // Whitefield Properties (6 listings)
  {
    id: "whitefield-prestige-raintree-park",
    title: "Prestige Raintree Park Luxury Apartments",
    tagline: "3 & 4 BHK High-Rise Residences in Whitefield",
    category: "Apartments",
    price: "₹ 1.80 Cr",
    numericPrice: 18000000,
    location: "Whitefield",
    localitySlug: "whitefield",
    areaSqFt: 2100,
    bedrooms: 3,
    bathrooms: 3,
    status: "Newly Launched",
    featured: true,
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80"],
    description: "Ultra-luxury high-rise residential project right on Whitefield Main Road near ITPL tech parks.",
    amenities: ["Sky Lounge", "Infinity Pool", "Clubhouse", "Tennis Court"],
    builder: "Prestige Group",
    reraId: "PRM/KA/RERA/1251/308/PR/231102",
    address: "Whitefield Main Road, Bengaluru",
    nearbySchools: ["Ryan International School", "The Brigade School"],
    nearbyHospitals: ["Manipal Hospital Whitefield", "Vydehi Hospital"]
  },
  {
    id: "whitefield-villa-estate",
    title: "Sobha Palm Court Luxury Villas",
    tagline: "4 BHK Ultra-Luxury Gated Villas",
    category: "Villas",
    price: "₹ 3.20 Cr",
    numericPrice: 32000000,
    location: "Whitefield",
    localitySlug: "whitefield",
    areaSqFt: 3800,
    bedrooms: 4,
    bathrooms: 4,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"],
    description: "German quality construction gated villas with private pool and garden.",
    amenities: ["Private Pool", "Clubhouse", "24/7 Security"],
    builder: "Sobha Limited",
    address: "Hope Farm Junction, Whitefield",
    nearbySchools: ["Whitefield Global School"],
    nearbyHospitals: ["Columbia Asia Whitefield"]
  },
  {
    id: "whitefield-commercial-office",
    title: "ITPL Main Road Commercial Office Space",
    tagline: "6000 sq.ft Commercial Floor for Corporate IT",
    category: "Commercial",
    price: "₹ 5.50 Cr",
    numericPrice: 55000000,
    location: "Whitefield",
    localitySlug: "whitefield",
    areaSqFt: 6000,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"],
    description: "Grade-A commercial office space opposite ITPL Main Gate.",
    amenities: ["Centralized AC", "100% Power Backup", "Multi-level Parking"],
    builder: "Prestige Commercial",
    address: "ITPL Main Road, Whitefield",
    nearbySchools: [],
    nearbyHospitals: []
  },
  {
    id: "whitefield-lease-flat-3bhk",
    title: "Executive 3 BHK Refundable Lease Flat",
    tagline: "Zero Rent Option - Refundable Deposit ₹ 35 Lakhs",
    category: "Lease House",
    price: "₹ 35.0 Lakhs (Deposit)",
    numericPrice: 3500000,
    location: "Whitefield",
    localitySlug: "whitefield",
    areaSqFt: 1850,
    bedrooms: 3,
    bathrooms: 3,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"],
    description: "Registered lease flat inside luxury gated society near Metro station.",
    amenities: ["Swimming Pool", "Gym", "Covered Parking"],
    builder: "OM Sakthi Managed",
    address: "Near Kadugodi Metro, Whitefield",
    nearbySchools: ["Ryan International"],
    nearbyHospitals: ["Vydehi"]
  },
  {
    id: "whitefield-residential-plots-layout",
    title: "Kadugodi Metro BDA Approved Layout Plots",
    tagline: "40x50 Corner Residential Plots",
    category: "Plots",
    price: "₹ 1.10 Cr",
    numericPrice: 11000000,
    location: "Whitefield",
    localitySlug: "whitefield",
    areaSqFt: 2000,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"],
    description: "BDA approved layout site walkable distance to Whitefield metro station.",
    amenities: ["BDA Approved", "Underground Drainage", "Blacktop Roads"],
    builder: "OM Sakthi Infrastructure",
    address: "Near Kadugodi Metro Station, Whitefield",
    nearbySchools: ["Whitefield Global"],
    nearbyHospitals: ["Manipal"]
  },
  {
    id: "whitefield-rental-flat-3bhk",
    title: "Luxury 3 BHK Rental Apartment",
    tagline: "Fully Furnished Flat in Prestige Shantiniketan",
    category: "Rentals",
    price: "₹ 65,000 / month",
    numericPrice: 65000,
    location: "Whitefield",
    localitySlug: "whitefield",
    areaSqFt: 1900,
    bedrooms: 3,
    bathrooms: 3,
    status: "Ready to Move",
    featured: false,
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80"],
    description: "High-floor lakeview apartment fully furnished with premium Italian furniture.",
    amenities: ["Furnished", "Clubhouse", "Tennis Court"],
    builder: "Prestige Managed",
    address: "ITPL Main Road, Whitefield",
    nearbySchools: ["Ryan International"],
    nearbyHospitals: ["Vydehi"]
  }
];

export const MOCK_LEADS: Lead[] = [
  {
    id: "lead-101",
    name: "Ramesh Kumar",
    phone: "+91 88849 03668",
    email: "ramesh@omsakthirealestate.com",
    propertyInterest: "OM Sakthi Grandeur Ultra-Luxury Villas",
    budget: "₹ 1.5 Cr - ₹ 2.0 Cr",
    location: "Muthanallur Cross",
    status: "Site Visit Scheduled",
    date: "2026-08-06",
    notes: "Client requested site visit on Saturday 11 AM."
  }
];
