export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const steps: Step[] = [
  {
    id: 1,
    title: 'Raise a Request',
    description: 'Contact via request or call. Team understands requirements and schedules meeting with technical expert.',
    icon: 'file-text',
  },
  {
    id: 2,
    title: 'Meet Our Expert',
    description: 'Experts help you choose the right package and address questions about construction options.',
    icon: 'users',
  },
  {
    id: 3,
    title: 'Book with Us',
    description: 'Pay just 10% of the estimated project cost to commence your journey.',
    icon: 'credit-card',
  },
  {
    id: 4,
    title: 'Receive Detailed Plans',
    description: 'Architects deliver exhaustive designs including floor plans, 3D elevations, structural/electrical/plumbing drawings.',
    icon: 'layout',
  },
  {
    id: 5,
    title: 'Track & Transact',
    description: 'Secure ESCROW payments with regular site visits and progress monitoring via the Built To Last app.',
    icon: 'smartphone',
  },
  {
    id: 6,
    title: 'Settle In',
    description: 'Welcome to your dream home! Built To Last ensures smooth handover with 10-year structural warranty.',
    icon: 'home',
  },
];
