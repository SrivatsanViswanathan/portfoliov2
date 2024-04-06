import React from 'react';
import meImg from '../assets/me.png';
import Resume from '../assets/Srivatsan_Viswanathan_Resume.pdf';
import { FaGithubSquare, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>
            Srivatsan Viswanathan
          </h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Software Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            Working on applications to help solve problems
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/SrivatsanViswanathan' target='_blank'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:texy-black duration-300'></FaGithubSquare>
            </a>
            <a
              href='https://www.linkedin.com/in/srivatsan-viswanathan/'
              target='_blank'
            >
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:texy-black duration-300'></FaLinkedin>
            </a>
            <a href={Resume} target='_blank'>
              <FaFilePdf className='h-8 w-8 text-slate-500 hover:texy-black duration-300'></FaFilePdf>
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={meImg} alt='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};

export default Hero;
