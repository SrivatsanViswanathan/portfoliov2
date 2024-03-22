import { nanoid } from 'nanoid';
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
} from 'react-icons/fa';

import loomibase from './assets/project-images/loomibase.png';
import hockeyStore from './assets/project-images/hockey-store.png';
import universityWebsite from './assets/project-images/university-website.png';
import unsplashImages from './assets/project-images/unsplash-images.png';
import hockeyDatabase from './assets/project-images/hockey-database.png';
import jobTracker from './assets/project-images/job-tracker.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in HTML and CSS, expertly designing visually captivating and responsive websites to ensure optimal user experiences',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in JavaScript, proficient in developing interactive and dynamic web applications that prioritize seamless user interactions and robust functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Demonstrating advanced expertise in React, adept at crafting efficient and interactive front-end applications with a firm focus on a component-based architectural approach',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in NodeJS, leveraging its capabilities to build scalable and efficient server-side applications and APIs, contributing to robust and seamless backend functionalities',
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className='h-16 w-16 text-emerald-500' />,
    text: "Experienced in Java, utilizing it's versatility to develop reliable and scalable applications, ensuring effective and well-structured solution",
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-emerald-500' />,
    text: 'Possessing a foundational grasp of Python, with a moderate understanding that facilitates navigation and work on applications',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: loomibase,
    url: 'https://loomibase.com',
    github: '',
    title: 'LoomiBase',
    text: 'A website for Loomian Legacy Players to use to get information on the best strategies for competitive battles ',
  },
  {
    id: nanoid(),
    img: hockeyStore,
    url: 'https://react-hockey-store.netlify.app',
    github: 'https://github.com/SrivatsanViswanathan/react-hockey-store',
    title: "Sri's Pucks",
    text: 'An E-commerce store where people can browse for hockey equipment, add them to cart, and purchase them',
  },
  {
    id: nanoid(),
    img: jobTracker,
    url: 'https://job-tracker-1ks3.onrender.com',
    github: 'https://github.com/SrivatsanViswanathan/job-tracker',
    title: 'Job Tracker',
    text: 'A web application where the user can register, login, add, update, and delete jobs they have applied for',
  },
  {
    id: nanoid(),
    img: universityWebsite,
    url: 'https://react-university-website.netlify.app',
    github: 'https://github.com/SrivatsanViswanathan/react-university-website',
    title: 'University Website',
    text: 'A website for a univeristy course that allows students to access all information related to the course',
  },
  {
    id: nanoid(),
    img: unsplashImages,
    url: 'https://react-images-unsplash.netlify.app',
    github: 'https://github.com/SrivatsanViswanathan/react-images-unsplash',
    title: 'Unsplash Images',
    text: 'A website to search for images',
  },
  {
    id: nanoid(),
    img: hockeyDatabase,
    url: '',
    github: 'https://github.com/SrivatsanViswanathan/HockeyDatabase',
    title: 'Hockey Database',
    text: 'A Database containing information about hockey players and their teams such as their stats, when they were drafted, where the team is located, who owns them, their managers, etc.',
  },
];
