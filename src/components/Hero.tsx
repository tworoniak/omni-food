import { Link } from 'react-router-dom';
import { MoveDown } from 'lucide-react';
import HeroImage from './HeroImage';

type Customers = {
  id: string;
  photo: string;
  alt?: string;
};

const customers: Customers[] = [
  {
    id: '1',
    photo: 'img/customers/customer-1.jpg',
    alt: 'Customer 1',
  },
  {
    id: '2',
    photo: 'img/customers/customer-2.jpg',
    alt: 'Customer 2',
  },
  {
    id: '3',
    photo: 'img/customers/customer-3.jpg',
    alt: 'Customer 3',
  },
  {
    id: '4',
    photo: 'img/customers/customer-4.jpg',
    alt: 'Customer 4',
  },
  {
    id: '5',
    photo: 'img/customers/customer-5.jpg',
    alt: 'Customer 5',
  },
  {
    id: '6',
    photo: 'img/customers/customer-6.jpg',
    alt: 'Customer 6',
  },
];

const Hero = () => {
  return (
    <section className='section-hero bg-heroBg p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='hero max-w-325 grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
          {/* Hero Text */}
          <div className='hero-text-box'>
            <h1 className='heading-primary text-[62px] font-bold mb-6'>
              A healthy meal delivered to your door, every single day
            </h1>
            <p className='hero-description text-xl mb-6'>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            {/* Hero buttons */}
            <div className='flex gap-2 mb-8'>
              <Link
                to='/'
                className='px-4 py-2 bg-primary hover:bg-shade rounded-md text-xl text-white transition duration-300 hover:shadow-md'
              >
                Start eating well
              </Link>
              <Link
                to='/'
                className='px-4 py-2 text-text bg-white hover:bg-tint hover:text-white border border-tint hover:border-shade transition duration-300 rounded-md text-xl flex items-center hover:shadow-md'
              >
                Learn more <MoveDown />
              </Link>
            </div>
            <div className='delivered-meals flex flex-col md:flex-row items-center gap-4 md:gap-8'>
              <div className='delivered-images flex '>
                {customers.map((customer) => (
                  <img
                    src={customer.photo}
                    alt={customer.alt}
                    className='h-16 w-16 rounded-full -mr-4 border-3 border-heroBg shadow-md'
                  />
                ))}
              </div>
              <p className='text-sm font-semibold'>
                <span className='text-shade font-bold'>250,000+</span> meals
                delivered last year!
              </p>
            </div>
          </div>
          {/* Hero Image */}
          <div className='hero-img-box'>
            {/* <img
            src='img/hero.png'
            alt='Woman enjoying food, meals in storage container, and food bowls on a table'
            className='hero-img w-full'
          /> */}
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
