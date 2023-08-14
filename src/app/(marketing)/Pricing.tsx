import Image from 'next/image';
import SunburstGuitarImage from '../../../public/sunburst-guitar.jpg';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import clsx from 'clsx';

// make responsive
// When click get started make a special form model, or fixed full screen that will just get the email and maybe the start date, and maybe collection and delivery
// change that promo bar into a reqular navbar

export function Pricing() {
  return (
    <section className='bg-black pt-12'>
      <div className='relative'>
        <Image
          className='absolute inset-0 object-cover w-full h-full'
          src={SunburstGuitarImage}
          alt='sunburst-guitar'
        />
        <div>
          <div className='relative bg-gradient-to-b from-black/0 via-black/60 to-black'>
            <div className='relative bg-gradient-to-t from-black/0 via-black/75 to-black px-6 sm:px-8'>
              <div className='grid gap-16 content-center h-full max-w-[1550px] mx-auto'>
                <div className='grid gap-4'>
                  <div className='grid gap-2'>
                    <h2 className='text-center text-yellow-300 text-base sm:text-lg md:text-xl tracking-wider'>
                      Pricing Insight
                    </h2>
                    <h1 className='text-white text-center text-4xl sm:text-5xl md:text-6xl font-bold mx-auto'>
                      The right price for you, whoever you are
                    </h1>
                  </div>
                  <p className='text-center text-white/60 text-sm sm:text-base md:text-lg tracking-wide max-w-4xl mx-auto mt-2'>
                    From budget-conscious musicians to seasoned pros, {`we've`}{' '}
                    got you covered. Elevate your {`guitar's`} performance
                    without breaking the bank - {`it's`} time to make your move.
                  </p>
                </div>
                <div className='grid xl:grid-cols-3 gap-8 xl:gap-4 2xl:gap-8'>
                  {[
                    {
                      name: 'Basic',
                      price: 'R120',
                      description: `Enhance your guitar's vitality with our essential restringing and cleaning.`,
                      features: [
                        'Comprehensive Guitar Cleaning',
                        'Professional Restringing',
                        'Strings not included',
                        '1 Month Guarentee',
                      ],
                    },
                    {
                      name: 'Professional',
                      price: 'R400',
                      description: `Experience peak guitar performance with our comprehensive professional package.`,
                      features: [
                        'All our expert services',
                        'Priority support',
                        'Strings not included',
                        '1 Month Guarentee',
                      ],
                    },
                    {
                      name: 'Enthusiast',
                      price: 'Custom',
                      description: `Your guitar, your way - discuss and create a tailored care package just for you.`,
                      features: [
                        'Customized services',
                        'Priority support',
                        'Strings not included',
                        '1 Month Guarentee',
                      ],
                    },
                  ].map(({ name, price, description, features }, i) => (
                    <div
                      key={name}
                      className={clsx(
                        'relative xl:max-w-lg border-2 rounded-md py-20 px-12 2xl:px-16 grid gap-8 content-start',
                        i === 1 ? 'border-yellow-300/75' : 'border-white/10',
                      )}>
                      <span
                        className={clsx(
                          'absolute top-[3%] right-[7%] text-sm sm:text-base text-yellow-300/75',
                          i === 1 ? 'block' : 'hidden',
                        )}>
                        Best Seller
                      </span>
                      <div>
                        <h3 className='text-yellow-300 text-base sm:text-lg 2xl:text-xl tracking-wider'>
                          {name}
                        </h3>
                        <span className='text-4xl sm:text-5xl md:text-5xl 2xl:text-6xl font-bold tracking-wide text-white'>
                          {price}
                          <span className='text-xs sm:text-sm text-white/50'>
                            {' '}
                            Once off
                          </span>
                        </span>
                      </div>
                      <p className='text-sm sm:text-base text-white/50'>
                        {description}
                      </p>
                      <ul className='grid gap-8'>
                        {features.map(feature => (
                          <li key={feature} className='flex gap-4'>
                            <div>
                              <BsFillCheckCircleFill className='h-5 sm:h-6 w-auto text-yellow-300/70' />
                            </div>
                            <p className='text-sm sm:text-base text-white/90'>
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <button className='sm:text-lg text-black font-semibold py-1.5 sm:py-2 px-6 sm:px-8 border-2 border-yellow-300 bg-yellow-300 hover:bg-yellow-400 hover:border-yellow-400 active:bg-yellow-300 active:border-yellow-300 rounded transition-colors'>
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
