import React from 'react';
import { projects } from '../data';
import ProjectsCard from './ProjectsCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='applications'></SectionTitle>
      <div className='py-16 grid lg:grid-cols-2 xl:grod-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project}></ProjectsCard>;
        })}
      </div>
    </section>
  );
};

export default Projects;
