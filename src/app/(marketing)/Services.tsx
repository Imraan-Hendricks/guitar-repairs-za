import GuitarRestringImage from '../../../public/guitar-restring.jpg';
import Image from 'next/image';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export function Services() {
  return (
    <section className='bg-black text-white py-24 px-6 sm:px-8'>
      <div className='grid gap-16 max-w-[1700px] mx-auto'>
        <div className='grid gap-2'>
          <h2 className='text-center text-yellow-300 text-base sm:text-lg md:text-xl tracking-wider'>
            Revive Brilliance
          </h2>
          <h1 className='text-center text-xl sm:text-2xl md:text-3xl font-semibold max-w-xl mx-auto'>
            Explore Our Expert Services to Elevate Your {`Instrument's`}{' '}
            Performance
          </h1>
          <p className='text-center text-white/60 text-sm sm:text-base md:text-lg tracking-wide max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto mt-2'>
            Discover a suite of precision guitar care services, expertly
            designed to enhance your {`instrument's`} performance. From
            meticulous cleaning to advanced tonal refinement, {`we're`}{' '}
            dedicated to perfecting your sound. Elevate your {`guitar's`}{' '}
            potential today.
          </p>
        </div>
        <div className='grid 2xl:grid-cols-2 gap-y-20 items-center'>
          <ul className='grid md:grid-cols-2 gap-x-8 gap-y-16 md:mx-auto'>
            {[
              {
                title: 'Comprehensive Guitar Cleaning',
                description: `Thorough cleaning to rejuvenate your guitar's appearance and performance`,
              },
              {
                title: 'Fretboard Maintenance',
                description: `Precise cleaning, conditioning, and oiling for fretboard longevity`,
              },
              {
                title: 'Fret Polishing Service',
                description: `Expert polishing for smooth frets and enhanced playability`,
              },
              {
                title: 'Professional Restringing',
                description: `Professional restringing for improved tone and playability`,
              },
              {
                title: 'Truss Rod Adjustment',
                description: `Precise adjustment of the truss rod for optimal neck alignment`,
              },
              {
                title: 'Action Setup Service',
                description: `Customized action setup for comfortable playing experience`,
              },
              {
                title: 'Intonation Calibration',
                description: `Fine-tuning to ensure accurate pitch across the fretboard`,
              },
              {
                title: 'Electronic Inspection',
                description: `Comprehensive inspection of electronics for seamless performance`,
              },
              {
                title: 'Pickup Height Adjustment',
                description: `Precise adjustment for desired tonal characteristics`,
              },
              {
                title: 'Control Cleaning Service',
                description: `Thorough cleaning for responsive controls and switches`,
              },
            ].map(({ title, description }) => (
              <li key={title}>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2 justify-center md:justify-start items-center'>
                    <BsFillCheckCircleFill className='h-5 sm:h-6 w-auto text-yellow-300/70' />
                    <h2 className='text-gray-200 text-sm sm:text-base font-medium w-max'>
                      {title}
                    </h2>
                  </div>
                  <p className='text-white/50 text-sm sm:text-base text-center md:text-start max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mx-0'>
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className='relative'>
            <Image
              className='absolute inset-0 object-cover w-full'
              src={GuitarRestringImage}
              alt='guitar-restring'
            />
            <div className='relative bg-gradient-to-l from-transparent via-transparent to-black'>
              <div className='relative bg-gradient-to-t from-transparent via-transparent to-black/75'>
                <div className='relative bg-gradient-to-r from-transparent via-transparent to-black/75'>
                  <div className='relative bg-gradient-to-b from-transparent via-transparent to-black/75'>
                    <Image
                      className='invisible object-cover w-full'
                      src={GuitarRestringImage}
                      alt='guitar-restring'
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
