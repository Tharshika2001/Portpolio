import { Mail, GitBranch, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            id: 1,
            icon: Mail,
            title: 'Email',
            value: 'pakirathantharshika@gmail.com',
            link: 'mailto:pakirathantharshika@gmail.com',
        },
        {
            id: 2,
            icon: GitBranch,
            title: 'GitHub',
            value: 'github.com/Tharshika2001',
            link: 'https://github.com/Tharshika2001',
        },
        {
            id: 3,
            icon: Phone,
            title: 'Phone',
            value: '+94 75 66 56 379',
            link: 'tel:+94756656379',
        },
        {
            id: 4,
            icon: MapPin,
            title: 'Location',
            value: 'Colombo, Sri Lanka',
            link: 'https://maps.app.goo.gl/Nq9gYEwifnK7xA966',
        },
    ];

    return (
        <section className='text-white py-20 relative overflow-hidden' id='contact' data-aos='fade-up'>
            <div className='max-w-7xl mx-auto px-6 lg:px-16 relative z-10'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                        Get In <span className='text-primary'>Touch</span>.
                    </h2>
                    <p className='text-gray-400 text-base lg:text-lg max-w-2xl mx-auto mt-4'>
                        I'm actively seeking Full-Stack Developer internship opportunities.
                        Feel free to reach out — I'd love to connect!
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    <div className='space-y-6'>
                        {contactInfo.map((info) => {
                            const Icon = info.icon;
                            const CardContent = (
                                <>
                                    <div className='p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors'>
                                        <Icon size={24} className='text-primary' />
                                    </div>
                                    <div>
                                        <h3 className='text-primary font-semibold text-sm uppercase tracking-wider'>
                                            {info.title}
                                        </h3>
                                        <p className='text-gray-300 mt-1'>{info.value}</p>
                                    </div>
                                </>
                            );

                            return info.link ? (
                                <a
                                    key={info.id}
                                    href={info.link}
                                    target={info.link.startsWith('http') ? '_blank' : undefined}
                                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className='group flex items-center gap-4 p-4 bg-[#111a3e] rounded-xl hover:bg-[#1a244a] transition-colors duration-300 block'
                                >
                                    {CardContent}
                                </a>
                            ) : (
                                <div
                                    key={info.id}
                                    className='flex items-center gap-4 p-4 bg-[#111a3e] rounded-xl'
                                >
                                    {CardContent}
                                </div>
                            );
                        })}
                    </div>

                    <div className='bg-[#111a3e] p-8 rounded-2xl'>
                        <form className='space-y-6'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                <input
                                    type='text'
                                    placeholder='Your Name'
                                    className='w-full px-4 py-3 bg-[#050816] border border-[#1f1641] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors'
                                />
                                <input
                                    type='email'
                                    placeholder='Your Email'
                                    className='w-full px-4 py-3 bg-[#050816] border border-[#1f1641] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors'
                                />
                            </div>
                            <textarea
                                placeholder='Your Message'
                                rows='6'
                                className='w-full px-4 py-3 bg-[#050816] border border-[#1f1641] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none'
                            />
                            <button
                                type='submit'
                                className='w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300'
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;