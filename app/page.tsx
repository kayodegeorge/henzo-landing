import Image from 'next/image'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className=''>
      <nav className='px-10 py-6 flex justify-between'>
        <Image alt='Henzo Logo' src='/logo.svg' width={88} height={40} />
        <div className=''>Hamburger menu</div>
      </nav>
      <div className='mt-6 lg:px-[200px] px-[20px]'>
        <h1 className='text-primary-black lg:text-6xl text-5xl font-semibold lg:max-w-[550px] max-w-[390px]'>
          The future of delivery logistics
        </h1>
        <p className='text-primary-grey font-medium text-lg lg:max-w-[550px] max-w-[390px] mt-3'>
          Henzo is a logistics company that offers fast, reliable, and
          affordable delivery services in Uyo. You can track your shipment in
          real-time with our app and we offer cost effective delivery rates.
        </p>
        <div className='flex gap-6 mt-3 text-base font-semibold'>
          <div className='flex gap-6 border rounded-xl px-6 py-2 border-primary-grey '>
            <Image
              src='/apple-logo.svg'
              alt='apple logo'
              width={25}
              height={30}
            />
            GET ON IPHONE
          </div>
          <div className='flex gap-6 border rounded-xl px-6 py-2 border-primary-grey'>
            <Image
              src='/google-logo.svg'
              alt='apple logo'
              width={25}
              height={30}
            />
            GET ON ANDROID
          </div>
        </div>
      </div>
      <section>
        <Image src='/hero-img.svg' alt='hero image' width={1500} height={950} />
      </section>
      <Footer />
    </div>
  )
}
