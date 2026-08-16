import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.jpg';

const Project = () => {
    const projects = [
        {
            id: 1,
            image: Project1,
            title: 'E-Commerce Website',
            description: 'A fully responsive, multi-page e-commerce website built from scratch using clean HTML5, modern CSS3, and vanilla JavaScript. This project features mobile-first layouts, modern CSS styling patterns, and dynamic UI interactions',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            githubLink: 'https://github.com/Tharshika2001/E-Commerce-website'
        },
         {
            id: 2,
            image: Project2,
            title: 'Zentryx Mini-ERP',
            description: 'Zentryx Mini-ERP is a full-stack task and productivity management platform engineered with an end-to-end TypeScript architecture. It enables users to securely manage daily workflows, track task lifecycles through custom status pipelines, and monitor productivity metrics in real time via an interactive analytics dashboard.',
            technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
            githubLink: 'https://github.com/Tharshika2001/zentryx-mini-erp'
        },
         {
            id: 3,
            image: Project3,
            title: 'MediCare HMS',
            description: 'MediCore HMS is a full-stack hospital management platform built with React, Node.js, and SQL Server to replace manual paperwork. It streamlines clinical operations by managing centralized digital patient records, conflict-free doctor scheduling, automated billing, and real-time inventory tracking for pharmacy stocks, blood bank supplies, and emergency ambulance logs.',
            technologies: ['React', 'Node.js', 'SQL Server'],
            githubLink: 'https://github.com/Tharshika2001/MediCare-HMS'
        },

    ]

  return (
   <section className='py-16 bg-gray-900' id='projects'>
        <div className='container max-w-7xl mx-auto '>
            <div className='text-center mb-10'>
                <h2 className='text-4xl font-extrabold md:text-5xl text-white'>
                    Projects. 
                </h2>
                <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {projects.map((project) => (
                    <div key={project.id} className='bg-gray-800 rounded-lg overflow-hidden
                     shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300'>
                        <img src={project.image} alt={project.title} className='w-full h-44 object-cover
                        hover:opacity-90 transition-opacity duration-300' />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold 
                            text-white group-hover:text-primary transition-colors'>
                                {project.title}
                            </h3>
                            <p className='text-gray-400 text-sm mt-1'>
                                {project.description}
                            </p>
                            <div className='flex flex-wrap gap-1.5 mt-3'>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='text-xs px-2 py-0.5 text-gray-300 bg-gray-700 rounded
                                    hover:bg-primary hover:text-white transition-colors duration-300'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.githubLink} target='_blank' rel='noopener noreferrer'
                             className='inline-block mt-4 text-primary font-semibold hover:underline'>
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}   
            </div>
        </div>

    </section>
  );
};

export default Project;