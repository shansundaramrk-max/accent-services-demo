export const site = {
  name: 'Ascent Services',
  phone: '+61 492 819 854',
  whatsappNumber: '61492819854',
}

export const trustStats = [
  { value: '120+', label: 'Businesses supported' },
  { value: '24/7', label: 'Critical incident response' },
  { value: '99.9%', label: 'Average managed uptime' },
  { value: '8 min', label: 'Average helpdesk response time' },
]

export const testimonials = [
  {
    quote:
      'Ascent took over our IT within a fortnight and our support tickets dropped by half in the first quarter. They talk to us like a partner, not a call centre.',
    name: 'Sarah Whitfield',
    role: 'Operations Director, Northbridge Retail Group',
    location: 'Sydney, NSW',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    quote:
      "We needed a security posture that would satisfy our enterprise clients' due diligence. Ascent mapped us against the Essential Eight and closed every gap within two months.",
    name: 'Daniel Ho',
    role: 'CTO, Meridian Financial Services',
    location: 'Melbourne, VIC',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    quote:
      'The implementation finally gave our sales and operations teams one shared view. Adoption was immediate because they trained the team properly instead of just flipping the switch.',
    name: 'Priya Nair',
    role: 'General Manager, Coastal Manufacturing Co.',
    location: 'Brisbane, QLD',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
]

export const industries = [
  {
    slug: 'small-medium-business',
    name: 'Small & Medium Business',
    blurb:
      'Enterprise-grade IT and security without an enterprise budget or an internal IT department.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    blurb:
      'Complex, multi-site environments managed with the governance and reporting an enterprise board expects.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  },
  {
    slug: 'retail',
    name: 'Retail',
    blurb:
      'Point-of-sale uptime, multi-store networking and seasonal scaling handled without disrupting trade.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    blurb:
      'OT/IT convergence, asset visibility and resilient connectivity across plant floors and warehouses.',
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    blurb:
      'Secure, compliant systems for firms where client confidentiality and uptime are non-negotiable.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
  },
  {
    slug: 'education',
    name: 'Education',
    blurb:
      'Reliable connectivity and device management across campuses, with safeguarding-aware security controls.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    blurb:
      'Privacy-first systems built around patient data obligations and always-on availability requirements.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80',
  },
]

export type NavChild = {
  label: string
  to: string
}

export type NavGroup = {
  label: string
  to?: string
  children?: NavChild[]
}

export const nav: NavGroup[] = [
  {
    label: 'IT Solutions',
    to: '/solutions#it-solutions',
    children: [
      {
        label: 'Cloud Solutions',
        to: '/solutions/cloud-solutions',
      },
      {
        label: 'Cybersecurity',
        to: '/solutions/cybersecurity',
      },
      {
        label: 'IT Asset Management',
        to: '/solutions/it-asset-management',
      },
      {
        label: 'Endpoint Management',
        to: '/solutions/endpoint-management',
      },
      {
        label: 'Observability & ITOM',
        to: '/solutions/observability-itom',
      },
      {
        label: 'Active Directory Management',
        to: '/solutions/active-directory-management',
      },
      {
        label: 'Backup & Disaster Recovery',
        to: '/solutions/backup-disaster-recovery',
      },
      {
        label: 'ITSM Solutions',
        to: '/solutions/itsm',
      },
    ],
  },
  {
    label: 'Business Solutions',
    to: '/solutions#business-software',
    children: [
      {
        label: 'ManageEngine Solutions',
        to: '/solutions/manageengine-solutions',
      },
      {
        label: 'Business Automation',
        to: '/solutions/business-process-automation',
      },
      {
        label: 'Software Integration',
        to: '/solutions/software-integration',
      },
    ],
  },
  {
    label: 'AI & Automation',
    to: '/solutions#ai-automation',
    children: [
      {
        label: 'Generative AI',
        to: '/solutions/generative-ai',
      },
      {
        label: 'AI Agents',
        to: '/solutions/ai-agents',
      },
      {
        label: 'Intelligent Document Processing',
        to: '/solutions/intelligent-document-processing',
      },
      {
        label: 'AI Assistants',
        to: '/solutions/ai-assistants',
      },
      {
        label: 'AI Consulting',
        to: '/solutions/ai-consulting',
      },
    ],
  },
  {
    label: 'Software Engineering',
    to: '/solutions#software-engineering',
    children: [
      {
        label: 'Software Testing',
        to: '/solutions/software-testing',
      },
      {
        label: 'Test Automation',
        to: '/solutions/test-automation',
      },
      {
        label: 'API Testing',
        to: '/solutions/api-testing',
      },
      {
        label: 'Performance Testing',
        to: '/solutions/performance-testing',
      },
      {
        label: 'Managed QA',
        to: '/solutions/managed-qa',
      },
    ],
  },
]

export const footerLinks = {
  'IT Solutions': nav[0].children!,
  'Business Solutions': nav[1].children!,
  'AI & Automation': nav[2].children!,
  'Software Engineering': nav[3].children!,
  Company: [
    {
      label: 'About Ascent',
      to: '/about',
    },
    {
      label: 'Industries',
      to: '/industries',
    },
    {
      label: 'Contact',
      to: '/contact',
    },
  ],
}
