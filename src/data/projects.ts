export interface Project {
  id: string;
  crn: string;
  title: string;
  location: string;
  sqft: number;
  imageUrl: string;
  category: 'residential' | 'commercial';
}

export const projects: Project[] = [
  {
    id: '1',
    crn: 'CRN 44418',
    title: 'Comfort Meets Class',
    location: 'Gurgaon',
    sqft: 2400,
    imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'residential',
  },
  {
    id: '2',
    crn: 'CRN 135074',
    title: 'Modern Design. Homely Feel',
    location: 'Delhi',
    sqft: 3100,
    imageUrl: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'residential',
  },
  {
    id: '3',
    crn: 'CRN 98234',
    title: 'Contemporary Elegance',
    location: 'Faridabad',
    sqft: 2800,
    imageUrl: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'residential',
  },
  {
    id: '4',
    crn: 'CRN 76543',
    title: 'Urban Luxury Living',
    location: 'Gurgaon',
    sqft: 3500,
    imageUrl: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'residential',
  },
  {
    id: '5',
    crn: 'CRN 54321',
    title: 'Traditional Meets Modern',
    location: 'Rohtak',
    sqft: 2200,
    imageUrl: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'residential',
  },
  {
    id: '6',
    crn: 'CRN 87654',
    title: 'Spacious Family Home',
    location: 'Jhajjar',
    sqft: 2600,
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'residential',
  },
];

