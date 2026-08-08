import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.jpg';

const Project = () => {
    const projects = [
        {
            id: 1,
            image: Project1,
            title: 'Project 1',
            description: 'Description of Project 1',
            technologies: ['React', 'Node.js', 'MongoDB'],
            githubLink: 'https://github.com/example/project1'
        },
         {
            id: 2,
            image: Project2,
            title: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['React', 'Node.js', 'MongoDB'],
            githubLink: 'https://github.com/example/project2'
        },
         {
            id: 3,
            image: Project3,
            title: 'Project 3',
            description: 'Description of Project 3',
            technologies: ['React', 'Node.js', 'MongoDB'],
            githubLink: 'https://github.com/example/project3'
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