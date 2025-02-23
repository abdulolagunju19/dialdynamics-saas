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
import Script from 'next/script'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
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

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />

      <ContactUs />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 20, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
        <Hero
          id="home"
          justifyContent="flex-start"
          px={{ base: 4, md: 0 }} // Adjust horizontal padding if needed
          title={
            <FallInPlace>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl' }}
                textAlign="left" // Always left justified
              >
                Level up
                <Br /> your sales calls
              </Heading>
            </FallInPlace>
          }
          description={
            <FallInPlace delay={0.4} fontWeight="medium">
              <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">
                DialDynamics is a <Em>cold-calling platform</Em>
                <Br /> that doesn&apos;t get in your way and helps you <Br />
                call smarter and close deals with confidence.
              </Text>
            </FallInPlace>
          }
          >
          <FallInPlace delay={0.8}>
            <ButtonGroup
              spacing={4}
              alignItems="center"
              pt="2"
              flexDirection="row" // Ensures buttons are side by side
            >
              <ButtonLink
                colorScheme="primary"
                size="lg"
                href="https://calendly.com/abdulsamad-aurrin/30min"
              >
                Book a Demo
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
                Try it yourself!
              </ButtonLink>
            </ButtonGroup>
          </FallInPlace>
          </Hero>

          {/* Responsive Image */}
          <Box
            position={{ base: 'relative', lg: 'absolute' }} // Keeps relative on mobile
            display={{ base: 'block', lg: 'block' }} // Ensures visibility on mobile
            left={{ lg: '60%', xl: '55%' }}
            width={{ base: '100%', md: '80%', lg: '80vw' }} // Adjusts width dynamically
            maxW="1100px"
            mx="auto" // Centers image on mobile
            mt={{ base: 10, lg: 0 }} // Adds spacing for mobile view
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" borderRadius={5}>
                <Image
                  src="/static/screenshots/calling.png"
                  width={1000}
                  height={762}
                  alt="Screenshot of a Call"
                  priority
                  style={{ width: '100%', height: 'auto' }} // Ensures responsiveness
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
        pt="5"
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

const ContactUs = () => {
  return (
    <Flex justify="center" align="center" py={2}>
      <Box width="100%" maxW="600px">
        <iframe
          data-tally-src="https://tally.so/embed/nWj19v?transparentBackground=1&dynamicHeight=1"
          title="Contact form"
          width="100%"
          height="500px"
          style={{ border: 'none' }}
        ></iframe>

        <Script id="tally-js" src="https://tally.so/widgets/embed.js" />
      </Box>
    </Flex>
  );
};

export default Home