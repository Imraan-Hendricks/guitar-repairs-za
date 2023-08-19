'use client';

import Image from 'next/image';
import TestimonialImage1 from '../../../public/testimonial-1.jpg';
import TestimonialImage2 from '../../../public/testimonial-2.jpg';
import TestimonialImage3 from '../../../public/testimonial-3.jpg';
import TestimonialImage4 from '../../../public/testimonial-4.jpg';
import TestimonialImage5 from '../../../public/testimonial-5.jpg';
import TestimonialImage6 from '../../../public/testimonial-6.jpg';
import TestimonialImage7 from '../../../public/testimonial-7.jpg';
import TestimonialImage8 from '../../../public/testimonial-8.jpg';
import { clsx } from 'clsx';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Daniel Martinez',
    service: 'Basic Package',
    testimonial: `I'm truly amazed by Guitar Repair ZA's expertise. My guitar went from being just an instrument to an extension of my musical expression. The setup and attention they provided have brought new life to my playing. I can't recommend them enough!`,
    src: TestimonialImage1,
    alt: 'profile-picture',
  },
  {
    name: 'Olivia Rodriguez',
    service: 'Professional Package',
    testimonial: `“Bringing my guitar to Guitar Repair ZA was a decision I'll} never regret. They revived my instrument with meticulous care and attention to detail. Now, every strum feels like a harmonious experience. Thank you for transforming my musical experience!”`,
    src: TestimonialImage2,
    alt: 'profile-picture',
  },
  {
    name: 'Ava Williams',
    service: 'Professional Package',
    testimonial: `“Guitar Repair ZA is a game-changer! They took my guitar, which was showing signs of wear and tear, and turned it into a masterpiece. The skill and dedication they put into their work is truly commendable. My guitar's sound is now richer than ever!”`,
    src: TestimonialImage3,
    alt: 'profile-picture',
  },
  {
    name: 'Liam Williams',
    service: 'Custom Package',
    testimonial: `“Guitar Repair ZA has transformed my playing experience entirely. The setup they did on my guitar is nothing short of magic. Each note resonates with clarity and depth, and I'm rediscovering my instrument all over again. This is the place for true guitar enthusiasts.”`,
    src: TestimonialImage4,
    alt: 'profile-picture',
  },
  {
    name: 'Sophia Johnson',
    service: 'Basic Package',
    testimonial: `I never thought my guitar could sound this good! Guitar Repair ZA did wonders for my instrument. The attention to detail is incredible, and every note feels like magic. Thank you for making my musical journey so much more exciting!`,
    src: TestimonialImage5,
    alt: 'profile-picture',
  },
  {
    name: 'Ethan Smith',
    service: 'Custom Package',
    testimonial: `I can't express how grateful I am to Guitar Repair ZA. They took my guitar and transformed it into a work of art. The craftsmanship is exceptional, and the sound is heavenly. Playing the guitar has never been this inspiring before!`,
    src: TestimonialImage6,
    alt: 'profile-picture',
  },
  {
    name: 'Isabella Brown',
    service: 'Professional Package',
    testimonial: `Wow, just wow! Guitar Repair ZA worked wonders on my guitar. The setup they provided elevated my playing to a whole new level. I'm amazed at the attention they put into every detail. This is the place for every serious guitarist!`,
    src: TestimonialImage7,
    alt: 'profile-picture',
  },
  {
    name: 'Noah White',
    service: 'Basic Package',
    testimonial: `I had doubts about my guitar's potential until I took it to Guitar Repair ZA. The transformation is beyond my expectations. Playing is effortless, and the tone is pure bliss. These guys have a true passion for their craft!`,
    src: TestimonialImage8,
    alt: 'profile-picture',
  },
];

type Transition =
  | 'fade-in-left'
  | 'fade-in-right'
  | 'fade-out-left'
  | 'fade-out-right';

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  const [transition, setTransition] = useState<Transition>('fade-in-right');

  const testimonialsPerPage = 4;
  const startIndex = (currentPage - 1) * testimonialsPerPage;
  const endIndex = startIndex + testimonialsPerPage;
  const displayedTestimonials = testimonials.slice(startIndex, endIndex);
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  function handlePageChange(newPage: number) {
    if (prevPage < newPage) {
      setTransition('fade-out-left');
      setTimeout(() => {
        setCurrentPage(newPage);
        setPrevPage(newPage);
        setTransition('fade-in-right');
      }, 500);
    } else {
      setTransition('fade-out-right');
      setTimeout(() => {
        setCurrentPage(newPage);
        setPrevPage(newPage);
        setTransition('fade-in-left');
      }, 500);
    }
  }

  function previous() {
    if (currentPage - 1 < 1) return;
    setTransition('fade-out-right');
    setTimeout(() => {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      setPrevPage(newPage);
      setTransition('fade-in-left');
    }, 500);
  }

  function next() {
    if (currentPage + 1 > totalPages) return;
    setTransition('fade-out-left');
    setTimeout(() => {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      setPrevPage(newPage);
      setTransition('fade-in-right');
    }, 500);
  }

  return (
    <section className='bg-black px-4 py-24'>
      <div className='grid gap-16 max-w-[1550px] mx-auto'>
        <div>
          <div className='grid gap-2'>
            <h2 className='text-center text-yellow-300 text-base sm:text-lg md:text-xl tracking-wider'>
              Discover Their Journeys
            </h2>
            <h1 className='text-white text-center text-xl sm:text-2xl md:text-3xl font-semibold max-w-xl mx-auto'>
              Feedback from our clients showcasing the impact of our services
            </h1>
            <p className='text-center text-white/60 text-sm sm:text-base md:text-lg tracking-wide max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto mt-2'>
              From guitars once forgotten to instruments now harmonizing with
              brilliance, each testimonial unveils a journey that reflects the
              essence of our dedication – a testament to the power of our
              commitment.
            </p>
          </div>
        </div>
        <ul className='grid lg:grid-cols-2 gap-y-12 justify-items-center content-center overflow-x-hidden'>
          {displayedTestimonials.map(
            ({ name, service, testimonial, src, alt }) => (
              <li
                key={name}
                className={clsx(
                  'grid gap-8 border-l-2 border-yellow-300 px-8',
                  transition === 'fade-in-left'
                    ? 'animate-fade-in-left'
                    : transition === 'fade-in-right'
                    ? 'animate-fade-in-right'
                    : transition === 'fade-out-left'
                    ? 'animate-fade-out-left'
                    : 'animate-fade-out-right',
                )}>
                <div>
                  <p className='text-sm leading-6 sm:text-base sm:leading-8 text-white/50 max-w-xl'>
                    {testimonial}
                  </p>
                </div>
                <div className='flex gap-4 items-center'>
                  <div className='w-12 sm:w-14 h-auto rounded-full overflow-hidden border-2 border-yellow-300/75'>
                    <Image src={src} alt={alt} />
                  </div>
                  <div className='grid gap-1'>
                    <h2 className='text-sm sm:text-base text-white font-semibold tracking-wide'>
                      {name}
                    </h2>
                    <h3 className='relative text-sm sm:text-base -translate-x-0.5 text-white/40 tracking-wide'>
                      {service}
                    </h3>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
        <div className='flex justify-center items-center gap-4'>
          <button onClick={previous} disabled={currentPage === 1}>
            <HiChevronLeft
              className={clsx(
                'w-7 h-auto transition-colors',
                currentPage === 1
                  ? 'text-white/50'
                  : 'text-white hover:text-yellow-300 active:text-yellow-400',
              )}
            />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={clsx(
                index + 1 === currentPage
                  ? 'text-yellow-300'
                  : 'text-white hover:text-yellow-300/70',
                'sm:text-lg transition-colors',
              )}
              onClick={() => handlePageChange(index + 1)}
              disabled={index + 1 === currentPage}>
              {index + 1}
            </button>
          ))}
          <button onClick={next} disabled={currentPage === totalPages}>
            <HiChevronRight
              className={clsx(
                'w-7 h-auto transition-colors',
                currentPage === totalPages
                  ? 'text-white/50'
                  : 'text-white hover:text-yellow-300 active:text-yellow-400',
              )}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
