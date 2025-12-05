import React from 'react';
import { TrendingUp, Globe, Users, BarChart, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp size={32} />,
    title: 'Strategic Planning',
    description: 'Develop comprehensive strategies to achieve your long-term business goals.'
  },
  {
    icon: <Globe size={32} />,
    title: 'Digital Transformation',
    description: 'Modernize your operations with cutting-edge digital solutions and technologies.'
  },
  {
    icon: <BarChart size={32} />,
    title: 'Market Analysis',
    description: 'In-depth market research to identify opportunities and stay ahead of the competition.'
  },
  {
    icon: <Users size={32} />,
    title: 'Brand Development',
    description: 'Build a strong, resonant brand identity that connects with your target audience.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Risk Management',
    description: 'Identify and mitigate potential risks to ensure business continuity and stability.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Operational Efficiency',
    description: 'Streamline your processes to maximize productivity and reduce costs.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Expertise</h2>
          <p className="text-lg text-text-muted max-w-[600px] mx-auto">Comprehensive solutions for modern businesses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 border border-transparent hover:-translate-y-1 hover:shadow-lg hover:border-secondary">
              <div className="inline-flex p-4 bg-secondary text-primary rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-main">{service.title}</h3>
              <p className="text-text-muted mb-6">{service.description}</p>
              <a href="#" className="text-primary font-semibold text-sm hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
