const HeroImage = () => {
  return (
    <div className='flex flex-col'>
      <img
        src='img/gallery/gallery-1.jpg'
        alt='Ramen bowls.'
        className='w-48 md:w-80 shadow-lg z-10 self-center'
      />
      <img
        src='img/gallery/gallery-6.jpg'
        alt='Prepared meals.'
        className='w-48 md:w-80 shadow-lg z-11 -mt-24 md:-mt-48 self-end'
      />
      <img
        src='img/hero/hero-meal-1.jpg'
        alt='Woman enjoying a meal.'
        className='w-64 md:w-96 shadow-xl z-12 -mt-24 md:-mt-48 self-start'
      />
    </div>
  );
};

export default HeroImage;
