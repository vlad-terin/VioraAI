import Card from "@/components/home/card";
import Integrations from "@/components/home/integrations";
import ContactUs from "@/components/home/contactus";


import { PrimaryFeatures } from "@/components/home/primaryfeatures";
import Layout from "@/components/layout";
import { Link as ScrollLink } from 'react-scroll';
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import VirtualGrid from "@/components/home/virtual-grid";
import Image from "next/image";
import { Testimonials } from '@/components/home/testimonials'


export default function Home() {
  return (
    <Layout>
      <motion.div
        className="max-w-2xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          href="https://twitter.com/ai_viora"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing Viora
          </p>
        </motion.a>
        <motion.h1
          className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <span className="text-amber-400 font-bold bg-gray-200 px-1 py-0.5 rounded">The Future</span> of <span className="text-orange-500 font-bold">Autonomous Business Operations</span> and <span className="text-cyan-400 font-bold">Workflows</span> with <span className="text-emerald-500 font-bold">Viora AI</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            Harness the power of Generative Autonomous AI with Viora to deliver personalized and meaningful interactions.
          </Balancer>
        </motion.p>
        {/* <motion.div */}
        {/*   className="mx-auto mt-6 flex items-center justify-center space-x-5" */}
        {/*   variants={FADE_DOWN_ANIMATION_VARIANTS} */}
        {/* > */}
        {/*   <a */}
        {/*     className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black" */}
        {/*     href={DEPLOY_URL} */}
        {/*     target="_blank" */}
        {/*     rel="noopener noreferrer" */}
        {/*   > */}
        {/*     <svg */}
        {/*       className="h-4 w-4 group-hover:text-black" */}
        {/*       viewBox="0 0 24 24" */}
        {/*       fill="currentColor" */}
        {/*       xmlns="http://www.w3.org/2000/svg" */}
        {/*     > */}
        {/*       <path */}
        {/*         d="M12 4L20 20H4L12 4Z" */}
        {/*         stroke="currentColor" */}
        {/*         strokeWidth="2" */}
        {/*         strokeLinecap="round" */}
        {/*         strokeLinejoin="round" */}
        {/*       /> */}
        {/*     </svg> */}
        {/*     <p>Deploy to Vercel</p> */}
        {/*   </a> */}
        {/*   <a */}
        {/*     className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800" */}
        {/*     href="https://github.com/steven-tey/Viora" */}
        {/*     target="_blank" */}
        {/*     rel="noopener noreferrer" */}
        {/*   > */}
        {/*     <Github /> */}
        {/*     <p>Star on GitHub</p> */}
        {/*   </a> */}
        {/* </motion.div> */}
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div id="home-section" className="py-6 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Viora AI Industries" ? (
                <ComponentGrid />
              ) : title === "Viora Generative Autonomous AI Platform" ? (
                <VirtualGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>

      <div id="integrations-section" className="relative py-6" >
        <Integrations />
      </div>

      <div id="usecases-section" className="relative py-6">
        <PrimaryFeatures />
      </div>
      <div id="vision-section" className="relative py-6">
        <Testimonials />
      </div>

      <div id="contactus-section" className="relative py-6">
        <ContactUs />
      </div>
    </Layout >
  );
}

const features = [
  {
    title: "Viora Generative Autonomous AI Platform",
    description:
      "Our AI enhances organizational efficiency with intelligent decisions, dynamic personalization, and seamless interactions.",
    large: true,
  },
  {
    title: "Viora AI Industries",
    description:
      "Viora AI transforms sales with real-time, personalized interactions and 24/7 nurturing.",
    demo: (
      <a href={DEPLOY_URL}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
        />
      </a>
    ),
  },
  {
    title: "Viora Conversational AI",
    description:
      "Viora has the ability to answer questions trained on your website content",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <a href="https://chatbot.viora.ai" rel="noopener noreferrer">
          <Image alt="viora logo" src="/logo.png" width={50} height={50} />
        </a>
        {/* <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} /> */}
      </div>
    ),
  },
  {
    title: "Viora AI web sales",
    description:
      "Viora allows to stream, narrate and transcribe conversations on the web",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Viora Web" src="/web.png" width={50} height={50} />
      </div>
    ),
  },
];
