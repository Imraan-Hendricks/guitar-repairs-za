import AcousticGuitarsImage from '../../../public/acoustic-guitars-1920.jpg';
import Image from 'next/image';
import { TextField } from '@/components/TextField';
import { TextArea } from '@/components/TextArea';

export function ContactForm() {
  return (
    <section className='relative'>
      <Image
        className='absolute inset-0 object-cover h-full w-full'
        src={AcousticGuitarsImage}
        alt='acoustic-guitars'
        placeholder='blur'
      />
      <div className='relative bg-gradient-to-t from-black/0 via-black/40 to-black'>
        <div className='relative bg-gradient-to-b from-black/0 via-black/60 sm:via-black/40 to-black'>
          <div className='relative md:h-screen bg-gradient-to-l from-black/20 via-black/80 to-black py-24 px-4'>
            <form className='grid gap-8 justify-center h-full content-center'>
              <div className='grid gap-4'>
                <h1 className='text-white text-3xl sm:text-4xl font-semibold text-center'>
                  {`Let's`} Connect
                </h1>
                <p className='text-white/50 sm:text-lg max-w-md mx-auto text-center'>
                  Reach out for any inquiries or information you need about our
                  services. {`We're`} here to assist you.
                </p>
              </div>
              <div className='grid sm:grid-cols-2 gap-8'>
                <TextField
                  name='firstName'
                  label='First Name'
                  placeholder='Enter first name'
                />
                <TextField
                  name='lastName'
                  label='Last Name'
                  placeholder='Enter last name'
                />
              </div>
              <TextField name='email' label='Email' placeholder='Enter email' />
              <TextField
                name='subject'
                label='Subject'
                placeholder='Enter subject'
              />
              <TextArea
                name='message'
                label='Message'
                placeholder='Enter message'
                rows={5}
              />
              <button className='sm:text-lg text-black font-semibold py-1.5 sm:py-2 px-6 sm:px-8 border-2 border-yellow-300 bg-yellow-300 hover:bg-yellow-400 hover:border-yellow-400 active:bg-yellow-300 active:border-yellow-300 rounded transition-colors'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
