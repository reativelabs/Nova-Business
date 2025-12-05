import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import heroImage from '../assets/images/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="py-16 lg:py-24 overflow-hidden bg-bg-light lg:bg-[linear-gradient(to_right,var(--color-bg-light)_50%,white_50%)]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
        <div className="max-w-[600px]">
          <div className="inline-block px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold mb-6">Innovative Solutions</div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-primary">Empowering Your <span className="text-accent">Business Growth</span></h1>
          <p className="text-lg text-text-muted mb-8">We provide strategic consulting and digital transformation services to help your business thrive in the modern economy. Partner with us to unlock your full potential.</p>
          <div className="flex gap-4 mb-12 flex-wrap">
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 border-none bg-primary text-white hover:bg-primary-hover hover:-translate-y-px hover:shadow-md">
              Get Started <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 bg-transparent border-2 border-primary text-primary hover:bg-secondary">
              View Case Studies
            </button>
          </div>
          <div className="flex gap-8 border-t border-gray-200 pt-8">
            <div className="stat-item">
              <span className="block text-2xl font-bold text-primary">500+</span>
              <span className="text-sm text-text-muted">Clients Served</span>
            </div>
            <div className="stat-item">
              <span className="block text-2xl font-bold text-primary">98%</span>
              <span className="text-sm text-text-muted">Success Rate</span>
            </div>
            <div className="stat-item">
              <span className="block text-2xl font-bold text-primary">10+</span>
              <span className="text-sm text-text-muted">Years Exp.</span>
            </div>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={heroImage}
            alt="Modern Corporate Office"
            className="w-full h-auto block"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
