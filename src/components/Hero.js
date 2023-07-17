import React from "react";

import HeroSlider from "../components/HeroSlider";

const Hero = () => {
  return (
    <section data-aos="zoom-in" data-aos-delay="100" className="min-h-[748px] relative pt-24 pb-12 flex items-center overflow-hidden lg:px-[50px] lg:pt-24 after:lg:h-[740px] after:lg:w-[740px] after:lg:bg-orange-tertiary after:lg:absolute after:lg:rounded-full after:lg:-right-28 after:lg:-top-24">
      <HeroSlider />
    </section>
  );
};

export default Hero;
