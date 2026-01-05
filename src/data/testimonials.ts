export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  projectType: string;
  sqft: number;
  package: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Gurgaon',
    rating: 5,
    review: 'Excellent experience with Built To Last. The team was professional and delivered on time. Quality of construction is top-notch.',
    projectType: '3 BHK Villa',
    sqft: 2400,
    package: 'Premium',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    review: 'Very transparent process. I could track everything on the app. Highly recommend for anyone building their dream home.',
    projectType: '4 BHK Duplex',
    sqft: 3200,
    package: 'Platinum',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: '3',
    name: 'Arun Patel',
    location: 'Faridabad',
    rating: 5,
    review: 'The QASCON quality checks gave me peace of mind. Every stage was inspected thoroughly. Great team!',
    projectType: '2 BHK Home',
    sqft: 1500,
    package: 'Primary',
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: '4',
    name: 'Meera Reddy',
    location: 'Rohtak',
    rating: 4,
    review: 'Good experience overall. The escrow payment system is very secure. Minor delays but communicated well.',
    projectType: '3 BHK Home',
    sqft: 1800,
    package: 'Primary',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: '5',
    name: 'Suresh Nair',
    location: 'Jhajjar',
    rating: 5,
    review: 'Best decision to go with Built To Last. The architects were creative and the execution was perfect.',
    projectType: '4 BHK Villa',
    sqft: 2800,
    package: 'Premium',
    imageUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: '6',
    name: 'Anitha Krishnan',
    location: 'Gurgaon',
    rating: 5,
    review: 'From design to handover, everything was seamless. The 10-year warranty gives great confidence.',
    projectType: '3 BHK Duplex',
    sqft: 2200,
    package: 'Customized',
    imageUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

export const filterOptions = [
  { id: 'all', label: 'All' },
  { id: 'primary', label: 'Primary Package' },
  { id: 'premium', label: 'Premium Package' },
  { id: 'sqft-1000', label: '> 1000 sqft' },
  { id: 'bhk-3', label: '3+ BHK' },
  { id: 'floor-1', label: '> 1 floor' },
  { id: 'budget-50', label: '> ₹ 50 lakhs' },
];

