export interface Partner {
  id: string;
  name: string;
  type: 'banking' | 'material' | 'press';
  logoUrl?: string;
}

export const bankingPartners: Partner[] = [
  {
    id: '1',
    name: 'Bajaj',
    type: 'banking',
    logoUrl: 'https://logo.clearbit.com/bajajauto.com'
  },
  {
    id: '2',
    name: 'BASIC',
    type: 'banking',
    logoUrl: 'https://logo.clearbit.com/basic.ai'
  },
  {
    id: '3',
    name: 'Godrej',
    type: 'banking',
    logoUrl: 'https://logo.clearbit.com/godrej.com'
  },
  {
    id: '4',
    name: 'HDFC Home Loan',
    type: 'banking',
    logoUrl: 'https://logo.clearbit.com/hdfcbank.com'
  },
  {
    id: '5',
    name: 'Housing',
    type: 'banking',
    logoUrl: 'https://logo.clearbit.com/housing.com'
  },
  {
    id: '6',
    name: 'SBI Home Loan',
    type: 'banking',
    logoUrl: 'https://logo.clearbit.com/sbi.co.in'
  },
];

export const materialPartners = {
  basic: ['Sunvik', 'Dalmia', 'Asian Paints', 'Cera'],
  classic: ['Jindal', 'Dalmia', 'Asian Paints', 'Hindware'],
  premium: ['Jindal', 'Ultra Tech', 'Asian Paints', 'Jaquar'],
  royale: ['Jindal', 'Ultra Tech', 'Asian Paints', 'Kohler'],
};

export const pressPartners: Partner[] = [
  {
    id: '1',
    name: 'Forbes',
    type: 'press',
    logoUrl: 'https://logo.clearbit.com/forbes.com'
  },
  {
    id: '2',
    name: 'Economic Times',
    type: 'press',
    logoUrl: 'https://logo.clearbit.com/economictimes.indiatimes.com'
  },
  {
    id: '3',
    name: 'Construction Week',
    type: 'press',
    logoUrl: 'https://logo.clearbit.com/constructionweekonline.in'
  },
  {
    id: '4',
    name: 'Bangalore Insider',
    type: 'press',
    logoUrl: 'https://logo.clearbit.com/bangaloreinsider.com'
  },
  {
    id: '5',
    name: 'Business Today',
    type: 'press',
    logoUrl: 'https://logo.clearbit.com/businesstoday.in'
  },
  {
    id: '6',
    name: 'Forbes India',
    type: 'press',
    logoUrl: 'https://logo.clearbit.com/forbesindia.com'
  },
  {
    id: '7',
    name: 'Tech Circle',
    type: 'press',
    logoUrl: 'https://logo.clearbit.com/techcircle.in'
  },
  {
    id: '8',
    name: 'Live Mint',
    type: 'press',
    logoUrl: 'https://logo.clearbit.com/livemint.com'
  },
  {
    id: '9',
    name: 'Your Story',
    type: 'press',
    logoUrl: 'https://logo.clearbit.com/yourstory.com'
  },
  {
    id: '10',
    name: 'Times of India',
    type: 'press',
    logoUrl: 'https://logo.clearbit.com/timesofindia.indiatimes.com'
  },
];
