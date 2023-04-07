import { useEffect, useState, useRef, RefObject } from 'react'

import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/home/container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/featurebg.png'
import screenshotPayroll from '@/images/featurebg.png'
import screenshotReporting from '@/images/featurebg.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'AI-Powered Customer Support',
    description:
      'Enhance customer support with AI-driven chatbot offering real-time responses, task automation, and multilingual support for your audience.',
    image: screenshotPayroll,
  },
  {
    title: 'AI-Driven Marketing & Sales',
    description:
      'Empower marketing and sales with AI-powered recommendation system, personalized campaigns, automated interactions, and revenue-driving insights.',
    image: screenshotExpenses,
  },
  {
    title: 'Automated Content Generation',
    description:
      'Revolutionize content creation with AI-powered natural language processing, generating unique content, personalized copy, and enhancing brand digital presence.',
    image: screenshotVatReturns,
  },
  {
    title: 'AI-Enhanced Virtual Assistant',
    description:
      'Elevate virtual assistants with AI-powered features for administrative tasks, 24/7 intelligent support and lead generation, and a seamless, personalized user experience.',
    image: screenshotReporting,
  },
]
export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')
    function onMediaQueryChange(event: MediaQueryListEvent) {
      setTabOrientation(event.matches ? 'vertical' : 'horizontal')
    }
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    // Auto-select interval setup
    const interval = 10000
    const autoSelectTimer = setInterval(() => {
      setSelectedTabIndex((prevIndex) => (prevIndex + 1) % features.length)
    }, interval)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
      clearInterval(autoSelectTimer) // Clear the auto-select timer
    }
  }, [])

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <div className="-translate-x-[44%] -translate-y-[42%]">
        <Image
          src={backgroundImage}
          alt=""
          fill
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2
            id="features-title"
            className="font-display text-2xl tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Unlock the power of conversational AI with Viora.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Discover how Viora AI can revolutionize the way you interact with customers, create content, and enhance user experiences.
          </p>
        </div>
        <Tab.Group
          as="div"
          key={selectedTabIndex} // Use custom key based on selectedTabIndex
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
          defaultIndex={selectedTabIndex} // Use defaultIndex to set selected tab
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        {
                          'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10':
                            selectedIndex === featureIndex,
                          'hover:bg-white/10 lg:hover:bg-white/5':
                            selectedIndex !== featureIndex,
                        }
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            {
                              'text-blue-600 lg:text-white':
                                selectedIndex === featureIndex,
                              'text-blue-100 hover:text-white lg:text-white':
                                selectedIndex !== featureIndex,
                            }
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx('mt-2 hidden text-sm lg:block', {
                          'text-white': selectedIndex === featureIndex,
                          'text-blue-100 group-hover:text-white':
                            selectedIndex !== featureIndex,
                        })}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                        fill
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}

