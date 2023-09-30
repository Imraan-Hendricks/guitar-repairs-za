import ElectricGuitarsImage from '../../../public/electric-guitars-1920.jpg';
import Image from 'next/image';
import { FaGlobe, FaMapMarked, FaPhone } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export function ContactInfo() {
  return (
    <section className='bg-black'>
      <div className='grid lg:grid-cols-2'>
        <div className='relative hidden lg:block'>
          <Image
            className='absolute inset-0 object-cover h-full w-full'
            src={ElectricGuitarsImage}
            alt='electric-guitars'
            placeholder='blur'
          />
          <div className='relative bg-gradient-to-t from-black/0 via-black/0 to-black'>
            <div className='relative bg-gradient-to-b from-black/0 via-black/0 to-black'>
              <div className='relative h-screen bg-gradient-to-r from-black/30 via-black/70 to-black py-24'></div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-8 items-center justify-center py-24 px-4'>
          <div className='grid gap-8 justify-center content-center h-full'>
            <div className='grid gap-4'>
              <h1 className='text-white text-3xl sm:text-4xl font-semibold text-center lg:text-start'>
                Get in touch
              </h1>
              <p className='text-white/50 sm:text-lg max-w-lg text-center lg:text-start'>
                {`We're`} eager to hear from you. Whether {`you're`} ready to
                discuss your {`guitar's`} transformation or you simply have a
                question, our team is here to provide personalized assistance.
              </p>
            </div>
            <ul className='grid gap-8 justify-center lg:justify-start'>
              {[
                {
                  name: 'Email',
                  value: 'guitarrepairsza@gmail.com',
                  Icon: HiMail,
                },
                { name: 'Contact', value: '079 173 4474', Icon: FaPhone },
                {
                  name: 'Location',
                  value: 'Based in Rosebank, Cape Town',
                  Icon: FaMapMarked,
                },
                {
                  name: 'Website',
                  value: 'www.guitarrepairsza.com',
                  Icon: FaGlobe,
                },
              ].map(({ name, value, Icon }) => (
                <li key={name} className='flex gap-4 items-center'>
                  <div className='bg-yellow-300/70 p-2.5 rounded'>
                    <Icon className='h-6 sm:h-7 w-auto text-black' />
                  </div>
                  <span className='text-white/90 sm:text-lg'>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
