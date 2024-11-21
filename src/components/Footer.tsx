import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+91 123 456 7890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@agroconsult.in</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>123 Farming District, Delhi, India</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-green-300">Our Services</Link></li>
              <li><Link to="/team" className="hover:text-green-300">Meet Our Team</Link></li>
              <li><Link to="/success-stories" className="hover:text-green-300">Success Stories</Link></li>
              <li><Link to="/contact" className="hover:text-green-300">Get in Touch</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Crop Management</li>
              <li>Soil Testing</li>
              <li>Pest Control</li>
              <li>Organic Farming</li>
              <li>Water Management</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-green-300"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-green-300"><Linkedin className="h-6 w-6" /></a>
              <a href="#" className="hover:text-green-300"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-700">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} AgroConsult. All rights reserved. | 
            <span className="mx-2">हिंदी में देखें</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;