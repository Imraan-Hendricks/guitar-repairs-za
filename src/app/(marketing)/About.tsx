import Image from 'next/image';
import FretboardImage from '../../../public/fretboard-2560.jpg';
import { FaClipboardCheck, FaTruck } from 'react-icons/fa';
import { IoIosSpeedometer } from 'react-icons/io';

export function About() {
  return (
    <section className='pt-40 pb-24'>
      <div className='grid gap-16 md:gap-24 lg:gap-28 2xl:gap-32'>
        <div className='grid gap-8 sm:gap-10 md:gap-12 xl:gap-16 max-w-[1700px] mx-auto px-8'>
          <div className='grid gap-2'>
            <h2 className='text-center text-yellow-300 text-base sm:text-lg md:text-xl tracking-wider'>
              Passion in Every Note
            </h2>
            <h1 className='text-center text-white text-xl sm:text-2xl md:text-3xl font-semibold max-w-xl mx-auto'>
              Driven by Music, Defined by Excellence
            </h1>
            <p className='text-center text-white/60 text-sm sm:text-base md:text-lg tracking-wide max-w-4xl lg:max-w-5xl xl:max-w-5xl mx-auto mt-2'>
              At Guitar Repairs ZA, we fuse passion and expertise to create an
              experience that transforms instruments and elevates musical
              performance. With each string we restring and every setup we
              perfect, our dedication to delivering exceptional service
              resonates in every note played.
            </p>
          </div>
          <div>
            <ul className='grid lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-20 container max-w-7xl'>
              {[
                {
                  name: 'Convenience at Your Fingertips',
                  description: `We offer hassle-free pickup and delivery services, ensuring your guitar gets the care it deserves without leaving your home.`,
                  Icon: FaTruck,
                },
                {
                  name: 'Fast-Track Your Melodies',
                  description: `Our skilled craftsmen prioritize your guitar's repair, aiming for swift turnarounds so you can get back to playing in no time.`,
                  Icon: IoIosSpeedometer,
                },
                {
                  name: 'Strum with Confidence',
                  description: `We stand by our work. If you're not delighted with our repair, we'll make it right until your guitar sings harmoniously to your tune.`,
                  Icon: FaClipboardCheck,
                },
              ].map(({ name, description, Icon }) => (
                <li
                  key={name}
                  className='grid gap-4 justify-items-center lg:justify-items-start'>
                  <div>
                    <Icon className='h-9 sm:h-10 md:h-12 lg:h-10 xl:h-12 w-auto text-yellow-300/75' />
                  </div>
                  <div className='grid gap-2'>
                    <h3 className='text-white/90 font-medium sm:text-lg text-center lg:text-start'>
                      {name}
                    </h3>
                    <p className='text-white/60 text-sm sm:text-base text-center lg:text-start max-w-md'>
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='rounded overflow-hidden'>
          <div className='relative w-[180%] lg:w-[130%] xl:w-[120%] 2xl:w-[100%] right-[40%] lg:right-[15%] xl:right-[10%] 2xl:right-[0%]'>
            <Image
              className='aspect-[20/5] absolute inset-0 object-cover object-center w-full'
              src={FretboardImage}
              alt='fretboard'
              placeholder='blur'
            />
            <div className='relative bg-gradient-to-l from-transparent via-transparent to-black'>
              <div className='relative bg-gradient-to-t from-transparent via-transparent to-black'>
                <div className='relative bg-gradient-to-r from-transparent via-transparent to-black'>
                  <div className='relative bg-gradient-to-b from-transparent via-transparent to-black'>
                    <Image
                      className='aspect-[20/5] w-full invisible'
                      src={FretboardImage}
                      alt='fretboard'
                      placeholder='blur'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
