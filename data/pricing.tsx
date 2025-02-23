import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every stage',
  description:
    'Pay and get access to our other features.',
  plans: [
    {
      id: 'oss',
      title: 'Starter',
      description: 'Essential tools to sharpen your cold-calling skills.',
      price: 'Free',
      features: [
        {
          "title": "Basic AI Call Simulation"
        },
        {
          "title": "Call Logging & Notes"
        },
        {
          "title": "Script Templates"
        },
        {
          "title": "Basic Speech Analysis"
        },
        {
          title: 'And much more...',
        },
      ],
      action: {
        href: 'https://calendly.com/abdulsamad-aurrin/30min',
      },
    },
    {
      id: 'bootstrap',
      title: 'Pro',
      description: 'Advanced AI coaching and analytics.',
      price: '$25/Month',
      isRecommended: true,
      features: [
        {
          "title": "One project"
        },
        {
          "title": "One user"
        },
        {
          "title": "Advanced AI Call Analysis"
        },
        {
          "title": "Private Sales Community Access"
        },
        {
          "title": "1 year of updates"
        },
        null,
        {
          "title": "Exclusive Beta Features",
          "iconColor": "green.500"
        },
      ],
      action: {
        href: 'https://buy.stripe.com/9AQ8zg2LZ8pZgbm144',
      },
    },
    {
      id: 'startup',
      title: 'Enterprise',
      description: 'Unlimited license for growing teams.',
      price: '$500/Month',
      features: [
        {
          "title": "Unlimited users & teams"
        },
        {
          "title": "Unlimited AI Call Simulations"
        },
        {
          "title": "1 year of updates"
        },
        {
          "title": "Integration with CRM"
        },
        {
          "title": "Everything from Pro"
        },
        null,
        {
          "title": "Early Access to New Features",
          "iconColor": "green.500"
        },
      ],
      action: {
        href: 'https://buy.stripe.com/dR602KeuHay72kw6op',
      },
    },
  ],
}
