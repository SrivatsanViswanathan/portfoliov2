import React from 'react';
import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} alt='About Image' className='w-full h-64' />
        <article>
          <SectionTitle text='About Me'></SectionTitle>
          <p className='text-slate-600 mt-8 leading-loose'>
            Hi, my name is Srivatsan and I recently graduated from Toronto
            Metropolitan University (formerly Ryerson University). I specialize
            in developing scalable and reusable code for web applications. I
            enjoy working collaborately and independently. I am an aspiring full
            stack developer.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
