'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

export const meta: Metadata = {
  title: 'DialDynamics',
  description: 'Role-Playing Sales Calls',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Level up
                <Br /> your sales calls
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                DialDynamics is a <Em>cold-calling platform</Em>
                <Br /> that doesn&apos;t get in your way and helps you <Br />{' '}
                call smarter and close deals with confidence.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center" pt="2">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://dialdynamics.vercel.app"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Effective',
            icon: FiSmile,
            description: 'Sharpen your cold-calling skills with AI-powered feedback and real-time insights.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Adaptive',
            icon: FiSliders,
            description:
              'Practice with dynamic scenarios that adjust to your skill level and industry.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'High-Impact',
            icon: FiGrid,
            description:
              'Cut the learning curve—improve your pitch, handle objections, and close more deals faster.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Results-Driven',
            icon: FiThumbsUp,
            description:
              'Close more deals by mastering objections, tone, and timing.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="AI-Powered Call Training">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Practice cold calls with <Em>realistic AI-driven simulations</Em>.
            Improve your pitch, handle objections, and build confidence with
            instant feedback and analytics.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Built for Sales Professionals">
        <Text color="muted" fontSize="lg">
          DialDynamics is designed to help sales teams and individuals improve
          their cold-calling skills with advanced AI coaching, data-driven
          insights, and customized scenarios.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Michael Carter"
        description="Sales Manager"
        avatar="/static/images/avatar.jpg"
        gradient={['blue.200', 'purple.500']}
      >
        “DialDynamics completely changed how my team practices cold calls. The
        AI feedback helps us refine our approach, and our close rates have
        improved significantly!”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start Calling with Confidence"
      >
        <Text color="muted" fontSize="lg">
          Whether you’re a solo sales rep or part of a team, DialDynamics helps
          you master your pitch with AI-driven roleplays, real-time analytics,
          and adaptive training.
        </Text>
        <Wrap mt="8">
          {[
            'AI call simulations',
            'Objection handling',
            'Call script templates',
            'Performance analytics',
            'CRM integration',
            'Roleplay scenarios',
            'Speech pacing feedback',
            'Cold call tracking',
            'Realistic AI responses',
            'Call scoring system',
            'Live coaching mode',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="blue"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Take Your Cold Calling <Br /> to the Next Level.
        </Heading>
      }
      description={
        <>
          DialDynamics offers everything you need to practice and master cold
          calls.
          <Br />
          Train with AI, track performance, and refine your pitch with
          real-world scenarios.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'AI Call Simulations',
          icon: FiBox,
          description:
            'Practice in a realistic AI-powered environment with dynamic responses and objections.',
          variant: 'inline',
        },
        {
          title: 'Objection Handling',
          icon: FiLock,
          description:
            'Master how to navigate tough objections and keep the conversation going.',
          variant: 'inline',
        },
        {
          title: 'Performance Analytics',
          icon: FiSearch,
          description:
            'Get detailed insights into your tone, pacing, and call effectiveness.',
          variant: 'inline',
        },
        {
          title: 'Custom Scenarios',
          icon: FiUserPlus,
          description:
            'Train with industry-specific call scenarios to refine your pitch for different markets.',
          variant: 'inline',
        },
        {
          title: 'Call Recording & Review',
          icon: FiFlag,
          description:
            "Review past calls, identify areas for improvement, and fine-tune your approach.",
          variant: 'inline',
        },
        {
          title: 'CRM Integration',
          icon: FiTrendingUp,
          description:
            'Sync with your favorite CRM tools to track progress and manage leads efficiently.',
          variant: 'inline',
        },
        {
          title: 'Live Coaching Mode',
          icon: FiToggleLeft,
          description:
            'Get real-time AI feedback and coaching to improve while you practice.',
          variant: 'inline',
        },
        {
          title: 'Call Scoring System',
          icon: FiTerminal,
          description:
            'Automatically score calls based on tone, clarity, and objection handling skills.',
          variant: 'inline',
        },
        {
          title: 'Roleplay with AI',
          icon: FiCode,
          description:
            'Simulate calls with AI-driven prospects that adapt based on your responses.',
          variant: 'inline',
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        GST may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
