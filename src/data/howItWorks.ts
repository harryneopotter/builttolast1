export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const steps: Step[] = [
  {
    id: 1,
    title: 'Raise a request',
    description: 'Provide basic details such as your contact number and mail id, and our team will reach out',
    icon: 'file-text',
  },
  {
    id: 2,
    title: 'Meet an Expert',
    description: 'Based on your requirement a specialist will meet you online or in person to freeze a plan',
    icon: 'users',
  },
  {
    id: 3,
    title: 'Sign off & Kickoff',
    description: 'Once the requirement and legal/financial terms are agreed, we will handover a complete project plan',
    icon: 'check-circle',
  },
  {
    id: 4,
    title: 'Planning & Designing',
    description: 'A dedicated architect and interior designer will be assigned to document your need and desires',
    icon: 'layout',
  },
  {
    id: 5,
    title: 'Approvals',
    description: 'Once design stage is complete, we will apply for govt approvals',
    icon: 'file-check',
  },
  {
    id: 6,
    title: 'Construction',
    description: 'As per the designs and approvals the construction will start and a single point of contact (SPoC) will be assigned for you',
    icon: 'home',
  },
  {
    id: 7,
    title: 'Periodic Inspection',
    description: 'The SPoC will schedule regular meetings to keep you posted about development, issues, mitigation plan etc. This will be available online as well with latest pics',
    icon: 'glasses',
  },
  {
    id: 8,
    title: 'Final Sign off',
    description: 'Once your dream home is complete, it will be handed over with drawings, certificates, warranties etc.',
    icon: 'key',
  },
];

