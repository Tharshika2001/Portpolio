import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            id: 1,
            icon: Mail,
            title: 'Email',
            value: 'tharshikafernandoz@gmail.com'
        },
        {
            id: 2,
            icon: Phone,
            title: 'Phone',
            value: '+94 71 234 5678'
        },
        {
            id: 3,
            icon: MapPin,
            title: 'Location',
            value: 'Colombo, Sri Lanka'
        }
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
                    <div className='space-y-8'>
                        {contactInfo.map((info) => {
                            const Icon = info.icon;
                            return (
                                <div key={info.id} className='flex items-center gap-4 p-4 bg-[#111a3e] rounded-xl hover:bg-[#1a244a] transition-colors duration-300'>
                                    <div className='p-3 bg-primary/20 rounded-lg'>
                                        <Icon size={24} className='text-primary' />
                                    </div>
                                    <div>
                                        <h3 className='text-primary font-semibold text-sm uppercase tracking-wider'>
                                            {info.title}
                                        </h3>
                                        <p className='text-gray-300 mt-1'>{info.value}</p>
                                    </div>
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
                                className='w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300'>
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
