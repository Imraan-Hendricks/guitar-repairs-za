import GuitarUprightImage from '../../../public/guitar-upright.jpg';
import Image from 'next/image';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export function Packages() {
  return (
    <section className='bg-black text-white py-24 px-6 sm:px-8'>
      <div className='grid gap-8 max-w-[1700px] mx-auto'>
        <div className='grid gap-2'>
          <h2 className='text-center text-yellow-300 text-base sm:text-lg md:text-xl tracking-wider'>
            Unlock Excellence
          </h2>
          <h1 className='text-center text-xl sm:text-2xl md:text-3xl font-semibold max-w-xl mx-auto'>
            Unleash Your {`Guitar's`} Full Potential with Customized Packages
          </h1>
          <p className='text-center text-white/60 text-sm sm:text-base md:text-lg tracking-wide max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto mt-2'>
            Awaken the true potential of your guitar with our meticulously
            crafted packages, designed to refine every facet of your{' '}
            {`instrument's`} performance. From essential restringing to a
            complete ensemble of adjustments, our packages ensure a harmonious
            blend of precision and tone.
          </p>
        </div>
        <div className='grid lg:grid-cols-2 2xl:grid-cols-3 items-center justify-items-center'>
          <Package
            name='Basic Package'
            overview='Our Basic Restring service is the perfect way to breathe new life into your guitar.'
            features={[
              {
                title: `Restore Your Guitar's Sound`,
                description: `Through a thorough cleanup and professional restringing, we ensure that your guitar regains its vibrant sound and comfortable playability. Say goodbye to dull tones and welcome back the radiance of your instrument.`,
              },
              {
                title: `Rediscover Your Guitar's Brilliance`,
                description: `Rediscover the joy of playing as our meticulous restringing and precise cleaning bring out the best in your guitar's sound and playability.`,
              },
              {
                title: 'Ideal For:',
                description: `Ideal for musicians looking for a quick and affordable solution to reinvigorate their guitar's sound and performance.`,
              },
            ]}
          />
          <div className='relative'>
            <Image
              className='absolute inset-0 object-cover h-[800px] w-auto'
              src={GuitarUprightImage}
              alt='guitar-upright'
            />
            <div className='relative h-[800px] w-full bg-gradient-to-t from-transparent via-black/30 to-black'>
              <Image
                className='invisible h-[800px] w-auto'
                src={GuitarUprightImage}
                alt='guitar-upright'
              />
            </div>
          </div>
          <div className='relative hidden lg:block 2xl:hidden'>
            <Image
              className='absolute inset-0 object-cover h-[800px] w-auto'
              src={GuitarUprightImage}
              alt='guitar-upright'
            />
            <div className='relative h-[800px] w-full bg-gradient-to-t from-transparent via-black/30 to-black'>
              <Image
                className='invisible h-[800px] w-auto'
                src={GuitarUprightImage}
                alt='guitar-upright'
              />
            </div>
          </div>
          <Package
            name='Professional package'
            overview='The Professional Package is designed for the discerning musician who seeks nothing but excellence from their guitar.'
            features={[
              {
                title: `Total Excellence Awaits`,
                description: `Our Full Package encompasses all our expert services. From meticulous cleaning to advanced adjustments, fret polishing to electronics checks, every detail is designed to refine and enhance your guitar's performance.`,
              },
              {
                title: 'Experience the Transformation',
                description: `Immaculate playability and enriched tonal expression amplify every note, capturing your unique musical identity with brilliance.`,
              },
              {
                title: 'Ideal For:',
                description: `Perfect for musicians who demand the utmost from their guitars and want to experience the instrument's full potential across genres and styles.`,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface PackageProps {
  name: string;
  overview: string;
  features: {
    title: string;
    description: string;
  }[];
}

function Package({ name, overview, features }: PackageProps) {
  return (
    <div className='grid gap-8'>
      <div className='grid gap-8'>
        <div className='grid gap-1'>
          <h3 className='text-white text-lg sm:text-xl font-medium'>{name}</h3>
          <p className='text-white/60 text-sm sm:text-base'>{overview}</p>
        </div>
        <hr className='border-white/10' />
      </div>
      <ul className='grid gap-x-8 gap-y-16'>
        {features.map(({ title, description }) => (
          <li key={title}>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <BsFillCheckCircleFill className='h-5 sm:h-6 w-auto text-yellow-300/70' />
                <h4 className='text-gray-200 text-sm sm:text-base font-medium w-max'>
                  {title}
                </h4>
              </div>
              <p className='text-white/50 text-sm sm:text-base'>
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
