export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    id: 'safe-money',
    title: 'Safe Money Transaction',
    description: 'No Advance. Contractor is paid only once the work is complete',
    icon: 'shield-check',
  },
  {
    id: 'transparency',
    title: 'Absolute Transparency',
    description: 'Clear and Detailed Quotation. Online tracking of projects',
    icon: 'eye',
  },
  {
    id: 'quality',
    title: 'Assured Quality Control',
    description: '470+ Quality (QASCON) Checks performed by team of experts',
    icon: 'badge-check',
  },
  {
    id: 'zero-delays',
    title: 'Zero Delays',
    description: 'Zero tolerance for delays',
    icon: 'clock',
  },
];
