import { PricingPackage } from './pricing';

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    id: 'zero-hustle',
    title: 'Zero Hustle transactions',
    description: 'Payment only after work is done and signed off by third-party professionals',
    icon: 'shield-check',
  },
  {
    id: 'quality-mgt',
    title: 'Total quality management',
    description: '24x7 supervision for quality of processes, materials, measurements, and future maintenance',
    icon: 'badge-check',
  },
  {
    id: 'timely-delivery',
    title: 'Timely delivery',
    description: 'Milestone-based deliveries to micromanage the project',
    icon: 'clock',
  },
  {
    id: 'trained-manpower',
    title: 'Trained Manpower',
    description: 'In-house qualified team (project managers, site engineers, etc.)',
    icon: 'users',
  },
  {
    id: 'collaborative',
    title: 'Collaborative approach',
    description: 'Dedicated team for customer support during approvals, design, and handover',
    icon: 'eye',
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 'primary',
    name: 'Primary',
    pricePerSqFt: 1800,
    description: 'A budget package with no compromise on quality that includes all construction essentials',
    features: ['Standard floor tiles', 'Flush doors', 'Tractor Emulsion', 'Essential fittings'],
  },
  {
    id: 'premium',
    name: 'Premium',
    pricePerSqFt: 2100,
    description: 'Our most popular package with upgraded brands and better finishes',
    isPopular: true,
    features: ['Jindal Steel', 'Hindware fittings', 'Refined Tiles', 'Premium paints'],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    pricePerSqFt: 2400,
    description: 'High-end package with luxury finishes and modern amenities',
    features: ['Teak wood', 'Granite flooring', 'Branded electronics', 'Apex Ultima'],
  },
  {
    id: 'customized',
    name: 'Customized',
    pricePerSqFt: 0,
    description: 'Fully bespoke construction tailored to your unique vision and requirements',
    features: ['Direct architect access', 'Custom sourcing', 'Interior design', 'Smart home enabled'],
  },
];

export const locations = ['Gurgaon', 'Jhajjar', 'Rohtak', 'Delhi', 'Faridabad'];
