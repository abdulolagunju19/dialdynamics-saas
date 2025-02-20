import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'DialDynamics',
    description: 'A platform to improve your cold calling.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        label: 'Demo',
        href: 'https://dialdynamics.vercel.app/',
      },
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://www.linkedin.com/company/aurrin/?viewAsMember=true">Aurrin</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:abdulsamad@aurrin.com',
        label: 'Contact',
      },
      {
        href: 'https://www.linkedin.com/company/aurrin/?viewAsMember=true',
        label: <FaLinkedin size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start calling with DialDynamics',
    features: [
      {
        icon: FiCheck,
        title: 'Realistic AI Training',
        description: 'Simulate real cold calls with AI-driven responses, objections, and dynamic scenarios.',
      },
      {
        icon: FiCheck,
        title: 'Customizable Scripts',
        description: 'Tailor call scripts and responses to match your industry, prospects, and sales approach.',
      },
      {
        icon: FiCheck,
        title: 'Adaptive Roleplay',
        description: 'Train with evolving conversations that adjust based on your responses and techniques.',
      },
      {
        icon: FiCheck,
        title: 'Data-Driven Improvement',
        description: 'Track call performance with AI insights, analytics, and personalized coaching feedback.',
      },
    ],
  },
}

export default siteConfig
