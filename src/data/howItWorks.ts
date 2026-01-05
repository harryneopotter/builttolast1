export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const steps: Step[] = [
  {
    id: 1,
    title: 'Share Your Requirements',
    description: 'Fill out the form or call us. Our team understands your needs and schedules a site visit with our technical expert.',
    icon: 'file-text',
  },
  {
    id: 2,
    title: 'Meet Our Expert',
    description: 'Our experts visit your plot, understand your vision, and help you choose the right package for your dream home.',
    icon: 'users',
  },
  {
    id: 3,
    title: 'Design Your Home',
    description: 'Our architects create personalized 2D floor plans, 3D elevations, and Vastu-compliant designs as per your requirements.',
    icon: 'layout',
  },
  {
    id: 4,
    title: 'Book & Start Construction',
    description: 'Pay just 10% booking amount. Construction begins with detailed planning and all approvals in place.',
    icon: 'credit-card',
  },
  {
    id: 5,
    title: 'Track Progress Live',
    description: 'Monitor your construction 24/7 through our app. Regular site updates, milestone tracking, and ESCROW payments.',
    icon: 'smartphone',
  },
  {
    id: 6,
    title: 'Move Into Your Dream Home',
    description: 'Quality inspected, fully finished home with a 10-year structural warranty. Welcome to your Built To Last home!',
    icon: 'home',
  },
];

