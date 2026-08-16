import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';

const Certificate = () => {
    const CertificateData = [
        {
            id: 1,
            title: 'AZ-900 Microsoft Azure Fundamentals',
            issuer: 'Microsoft and LinkedIn',
            date: 'Feb 17 2025',
            description:
                'This certification validates foundational knowledge of cloud services and how those services are provided with Microsoft Azure. It demonstrates an understanding of cloud concepts, core Azure services, security, privacy, compliance, and trust, as well as Azure pricing and support.',
            pdfUrl: '/AZ-900 Microsoft Azure Fundamentals.pdf', // Stored in public/certificates/
        },
        {
            id: 2,
            title: 'Career Essentials in Software Development',
            issuer: 'Microsoft and LinkedIn',
            date: 'Dec 19 2024',
            description:
                'Completed foundational software engineering training covering core programming logic, data structures, debugging techniques, and industry-standard development workflows certified by Microsoft and LinkedIn.',
            pdfUrl: '/Career Essentials in Software.pdf',
        },
        {
            id: 3,
            title: 'Diploma in English',
            issuer: 'IBM',
            date: 'Oct 29 2022',
            description:
                'Successfully completed a Diploma in English, developing strong written, verbal, and technical communication skills tailored for professional environments.',
            pdfUrl: '/English Certificate.pdf',
        },
    ];

    return (
        <section className='text-white py-20' id='Certificate'>
            <div className='max-w-7xl mx-auto px-6 lg:px-16'>
                <div className='mb-16'>
                    <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>
                        My Certificate
                    </p>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                        Certificates.
                    </h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {CertificateData.map((certificate) => (
                        <div
                            key={certificate.id}
                            data-aos='zoom-in'
                            className='group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]'
                        >
                            <div className='absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform'>
                                <Award className='text-white' size={24} />
                            </div>
                            <div className='flex items-center gap-4 mb-4 text-xs text-gray-400'>
                                <span className='flex items-center gap-1'>
                                    <ShieldCheck size={14} className='text-primary' />
                                    {certificate.issuer}
                                </span>
                                <span className='flex items-center gap-1'>
                                    <Calendar size={14} />
                                    {certificate.date}
                                </span>
                            </div>
                            <h3 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors'>
                                {certificate.title}
                            </h3>
                            <p className='text-gray-400 text-sm mb-6 line-clamp-2'>
                                {certificate.description}
                            </p>
                            
                            {/* Opens PDF directly in a new browser tab */}
                            <a
                                href={certificate.pdfUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors border-b border-transparent hover:border-white pb-1'
                            >
                                View Certificate <ExternalLink size={14} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificate;