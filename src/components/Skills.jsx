import { Layout } from 'lucide-react';
import React from 'react';

const Skills = () => {
    const skills = [
        {
            id: 1, 
            name: 'HTML & CSS', 
            width: "85%",
            icon: Layout
        },
         {
            id: 2, 
            name: 'JavaScript', 
            width: "80%",
            icon: Layout
        },
         {
            id: 3, 
            name: 'React js', 
            width: "75%",
            icon: Layout
        },
         {
            id: 4, 
            name: 'Python', 
            width: "90%",
            icon: Layout
        },
         {
            id: 5, 
            name: 'Java', 
            width: "55%",
            icon: Layout
        }, 
    ];
  return (
   <section className='text-white py-20 relative overflow-hidden' id='skills'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16 relative z-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div data-aos='fade-right'>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-12'>
                     Technical <span className='text-primary'>Skills</span>
                    </h2>
                        <div className='space-y-8'>
                        {skills.map((skill) => {
                            const SkillIcon = skill.icon;
                            return (
                            <div key={skill.id} className='group'>
                                <div className='flex items-center justify-between mb-2'>
                                   <div className='flex items-center gap-3'>
                                        <div className='p-2 bg-[#111a3e] rounded-lg 
                                        group-hover:bg-primary transition-colors duration-300'>
                                        <SkillIcon size={24} 
                                        className='text-primary group-hover:text-white' />
                                        </div>
                                        <span className='font-medium tracking-wide'>
                                            {skill.name}
                                        </span>
                                    </div>
                                        <span className='text-primary font-bold'>
                                            {skill.width}
                                        </span> 
                                <div className='h-2 w-full bg-[#131d30] rounded-full p-0-5'>
                                <div className='h-full rounded-full bg-linear-to-r 
                                   from-primary to-cyan-400 shadow-[0_0-10px_#06a2c2]' 
                                   style={{ width: skill.width }}>
                                    </div>
                                </div>
                                </div>
                            </div>
   
                            );
                        })}
                        </div>    
                </div>
            </div>
        </div>  
    </section>
  );
};

export default Skills;