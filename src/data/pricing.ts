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
    id: 'primary',
    name: 'Primary',
    pricePerSqFt: 1900,
    description: 'A budget package with no compromise on quality that includes all construction essentials',
    features: ['Standard floor tiles', 'Flush doors', 'Tractor Emulsion', 'Essential fittings'],
  },
  {
    id: 'premium',
    name: 'Premium',
    pricePerSqFt: 2150,
    description: 'Our most popular package with upgraded brands and better finishes',
    isPopular: true,
    features: ['Jindal Steel', 'Hindware fittings', 'Refined Tiles', 'Premium paints'],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    pricePerSqFt: 2450,
    description: 'High-end package with luxury finishes and modern amenities',
    features: ['Teak wood', 'Granite flooring', 'Branded electronics', 'Apex Ultima'],
  },
  {
    id: 'customized',
    name: 'Customized',
    pricePerSqFt: 2800,
    description: 'Fully bespoke construction tailored to your unique vision and requirements',
    features: ['Direct architect access', 'Custom sourcing', 'Interior design', 'Smart home enabled'],
  },
];

export const locations = ['Gurgaon', 'Jhajjar', 'Rohtak', 'Delhi', 'Faridabad'];
