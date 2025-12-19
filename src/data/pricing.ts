export interface PricingPackage {
  id: string;
  name: string;
  pricePerSqFt: number;
  description: string;
  isPopular?: boolean;
  features: string[];
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'basic',
    name: 'Basic',
    pricePerSqFt: 1900,
    description: 'A budget package with no compromise on quality that includes all construction essentials',
    features: [
      'Trusted brand steel & cement',
      'Standard floor tiles up to ₹50/sqft',
      'Standard flush doors and window finish',
      'Tractor Emulsion finish',
      'Essential kitchen & bathroom fittings',
    ],
  },
  {
    id: 'classic',
    name: 'Classic',
    pricePerSqFt: 2030,
    description: 'Our best seller package with upgraded brands like Jindal Steels, Hindware etc at a considerable price',
    isPopular: true,
    features: [
      'Superior brand steel & cement',
      'Refined floor tiles up to ₹100/sqft',
      'Elegant teak doors and window finish',
      'Tractor Shyne Emulsion finish',
      'Stylish kitchen & bathroom',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    pricePerSqFt: 2350,
    description: 'An elegant package crafted for modern living with extra provisions like solar heater setup, puja room door etc',
    features: [
      'Superior Brand steel & cement',
      'Premium floor tiles up to ₹140/sqft',
      'Designer teak doors and window finish',
      'Apcolite Premium finish',
      'Quality kitchen & bathroom',
    ],
  },
  {
    id: 'royale',
    name: 'Royale',
    pricePerSqFt: 2585,
    description: 'An ultimate plan with high-end finishes with amenities like EV charging, copper gas connection etc',
    features: [
      'Superior brand steel & cement',
      'Lavish floor tiles up to ₹160/sqft',
      'Designer teak doors and window finish',
      'Apex Ultima Exterior finish',
      'Lavish fittings for kitchen & bathroom',
    ],
  },
];

export const locations = [
  'Bengaluru',
  'Chennai',
  'Hyderabad',
  'Mysuru',
  'Delhi',
  'Noida',
  'Gurgaon',
  'Faridabad',
  'Ghaziabad',
  'Pune',
];
