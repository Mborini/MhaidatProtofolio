import { Link } from '@chakra-ui/react'

export type Company = 'GREENPLANS' | 'UNDP' | 'Oxfam' | 'FCM' | 'DIMETRIC'

export type CompanyDetail = {
  name: string
  longName?: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  GREENPLANS: {
    name: 'GREENPLANS',
    longName: 'GREENPLANS Environmental Consultations Co. Ltd.',
    url: 'https://greenplans.com',
    position: 'Environmental Engineer',
    duration: 'Jan 2020 - Present',
    logo: {
      light: '/worked_at_logos/greenplans.png',
      dark: '/worked_at_logos/greenplans.png',
    },
    roles: [
      <>
        Manage and monitor multiple environmental projects including solid waste management and wastewater treatment.
      </>,
      <>
        Develop budgets, oversee project deliverables, and conduct site assessments for waste management facilities.
      </>,
      <>
        Collaborate with public and private stakeholders to ensure compliance with safety and environmental regulations.
      </>,
    ],
  },
  DIMETRIC: {
    name: 'DIMETRIC',
    url: 'https://dimetric.net',
    position: 'Environmental Expert and Deputy Project Manager',
    duration: 'Oct 2020 - Present',
    logo: {
      light: '/worked_at_logos/dimetric.png',
      dark: '/worked_at_logos/dimetric.png',
    },
    roles: [
      <>
        Led and advised on solid waste management planning for partner municipalities.
      </>,
      <>
        Conducted comprehensive gap analyses and developed technical and institutional solutions.
      </>,
      <>
        Facilitated capacity building and community engagement in waste management strategies.
      </>,
    ],
  },
  UNDP: {
    name: 'UNDP',
    url: 'https://www.undp.org',
    position: 'Route Optimization Expert',
    duration: 'May 2022 - Aug 2022',
    logo: {
      light: '/worked_at_logos/R.png',
      dark: '/worked_at_logos/R.png',
    },
    roles: [
      <>
        Optimized municipal solid waste collection routes and bin placements in Tafileh Governorate.
      </>,
      <>
        Developed contingency plans for waste collection emergencies.
      </>,
      <>
        Verified and improved operational efficiency of local waste management systems.
      </>,
    ],
  },
  Oxfam: {
    name: 'Oxfam',
    url: 'https://www.oxfam.org',
    position: 'Environmental Expert',
    duration: 'May 2022 - Aug 2022',
    logo: {
      light: '/worked_at_logos/Oxfam.png',
      dark: '/worked_at_logos/Oxfam.png',
    },
    roles: [
      <>
        Developed local solid waste management plans for five municipalities focusing on sustainable and community-supported solutions.
      </>,
      <>
        Conducted gap analyses on administrative, technical, and financial aspects of partner municipalities.
      </>,
      <>
        Advised on institutional frameworks to improve solid waste management service delivery.
      </>,
    ],
  },
  FCM: {
    name: 'Federation of Canadian Municipalities (FCM)',
    url: 'https://fcm.ca',
    position: 'Route Optimization Expert / Environmental Consultant',
    duration: 'Dec 2021 - Present',
    logo: {
       light: '/worked_at_logos/FCM.png',
      dark: '/worked_at_logos/FCM.png',
    },
    roles: [
      <>
        Supported pilot projects optimizing waste collection in municipalities like Um Al Basateen and Al Jezah.
      </>,
      <>
        Verified optimized routes and bin distributions for improved efficiency.
      </>,
      <>
        Assisted in developing sustainable waste management institutional frameworks.
      </>,
    ],
  },
  
}

export const ExperiencesList = [
  Experiences.GREENPLANS,
  Experiences.UNDP,
  Experiences.Oxfam,
  Experiences.FCM,
  Experiences.DIMETRIC,
]
