import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 pb-6 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-8 mb-8">
          <div className="brand-col">
            <div className="text-xl font-extrabold mb-4 flex items-center gap-2">
              <span className="flex items-center"><Briefcase size={24} /></span>
              <span>NovaBusiness</span>
            </div>
            <p className="text-slate-400 mb-5 leading-relaxed max-w-[300px]">Empowering businesses with innovative strategies and digital solutions.</p>
            <div className="flex gap-3">
              <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity"><Facebook size={18} /></a>
              <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity"><Instagram size={18} /></a>
              <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity"><Twitter size={18} /></a>
            </div>
          </div>

          <div className="links-col">
            <h3 className="text-white text-base mb-4 font-semibold">Quick Links</h3>
            <ul className="list-none">
              <li className="mb-2"><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li className="mb-2"><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Expertise</Link></li>
              <li className="mb-2"><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li className="mb-2"><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="contact-col">
            <h3 className="text-white text-base mb-4 font-semibold">Contact Us</h3>
            <ul className="list-none">
              <li className="flex gap-3 mb-3 text-slate-400">
                <MapPin size={16} />
                <span>100 Business Park Dr, Suite 500<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex gap-3 mb-3 text-slate-400">
                <Phone size={16} />
                <span>(555) 987-6543</span>
              </li>
              <li className="flex gap-3 mb-3 text-slate-400">
                <Mail size={16} />
                <span>contact@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-slate-500 text-xs">
          <p>&copy; 2025 NovaBusiness, made with ❤️ by <a href="https://reative.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Reative</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
