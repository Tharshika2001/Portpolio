
const About = () => {
  return (
   <section  className='text-white mt-20 relative overflow-hidden' id='about'>
        <div className='max-w-7xl mx-auto px-4 md:grid-cols-2 gap-12 items-center
        py-16 xl:px-16 relative z-10'>
            <div data-aos='fade-right'>
                <h2 className='text-4xl md:text-5xl font-extrabold
                text-white mb-6'>
                   More <span className='text-primary'>About</span> Me.
                </h2>
                <p className='text-gray-400 text-base lg:text-lg 
                mb-10 leading-relaxed'>
                    I am a passionate developer with experience in creating engaging web applications. 
                    With a strong foundation in computer science and a keen interest in emerging technologies,
                    I strive to build solutions that not only meet but exceed expectations.
                </p>
                <div className='grid grid-cols-3 gap-6 max-w-xl'>
                    <div className='text-center rounded-2xl
                    bg-[#111a3e] border-[#1f1641] p-5 transition-all duration-300
                    hover:border-primary/50'>
                        <h3 className='text-primary font-bold text-2xl
                         md:text-3xl'>
                            +6
                        </h3>
                        <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>
                            Projects Completed
                        </p>
                    </div>

                     <div className='text-center rounded-2xl
                    bg-[#111a3e] border-[#1f1641] p-5 transition-all duration-300
                    hover:border-primary/50'>
                        <h3 className='text-primary font-bold text-2xl
                         md:text-3xl'>
                            +2
                        </h3>
                        <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>
                            Personal Projects 
                        </p>
                    </div>
                     <div className='text-center rounded-2xl
                    bg-[#111a3e] border-[#1f1641] p-5 transition-all duration-300
                    hover:border-primary/50'>
                        <h3 className='text-primary font-bold text-2xl
                         md:text-3xl'>
                            +2
                        </h3>
                        <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>
                            Projects exprince years
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
   </section>
  )
}

export default About