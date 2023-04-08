import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { Container } from '@/components/home/container';
import avatarImage1 from '@/images/avatars/avatar-1.png';
import avatarImage2 from '@/images/avatars/avatar-2.png';
import avatarImage3 from '@/images/avatars/avatar-3.png';
import avatarImage4 from '@/images/avatars/avatar-4.png';
import avatarImage5 from '@/images/avatars/avatar-5.png';
import avatarImage6 from '@/images/avatars/avatar-6.png';

type TestimonialAuthor = {
  name: string;
  role: string;
  image: StaticImageData;
};

type Testimonial = {
  content: string;
  author: TestimonialAuthor;
};

const testimonials: Testimonial[][] = [
  [
    {
      content:
        'Automation is increasingly critical to every organization’s ability to win, serve, and retain its customers.',
      author: {
        name: 'Craig Le Clair',
        role: 'Vice President and Principal Analyst',
        image: avatarImage2,
      },
    },
    {
      content:
        'Business-driven hyperautomation refers to an approach in which organizations rapidly identify, vet and automate as many approved business and IT processes as possible through a disciplined approach.',
      author: {
        name: 'Frances Karamouzis',
        role: 'Distinguished VP Analyst',
        image: avatarImage1,
      },
    },
  ],
  [
    {
      content: "Machine intelligence is the last invention that humanity will ever need to make.",
      author: {
        name: "Nick Bostrom",
        role: "Philosopher and AI Researcher",
        image: avatarImage3,

      }
    },
    {
      content: "I am telling you, the world’s first trillionaires are going to come from somebody who masters AI and all its derivatives and applies it in ways we never thought of.",
      author: {
        name: "Mark Cuban",
        image: avatarImage4,
        role: "Entrepreneur and Investor"
      }
    },
  ],
  [
    {
      content:
        'AI Could Have a $7 Trillion Impact in 10 Years',
      author: {
        name: 'NASDAQ',
        role: 'Writer',
        image: avatarImage5,
      },
    },
    {
      content:
        'Goldman Sachs projects that generative AI could enable 300 million jobs globally to be fully automated, with as many as two-thirds of U.S. jobs partially automated by AI.',
      author: {
        name: 'Keith Speights',
        role: 'Goldman Sachs',
        image: avatarImage6,
      },
    },
  ],
]

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-20 sm:py-32"
    >
      <Container className="your-custom-classname">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="testimonials-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Loved by businesses worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute top-6 left-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-50">
                          <Image src={testimonial.author.image} alt="" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
