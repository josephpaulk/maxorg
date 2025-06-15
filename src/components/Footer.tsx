import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Maxis International</span>
                <div className="text-sm text-emerald-400 font-medium">Geeks with Hearts</div>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md leading-relaxed">
              We're not just fixing devices. We're rebuilding digital dignity. Tech should never leave people behind. 
              Join us in changing that.
            </p>
            <div className="text-lg font-medium text-emerald-400 mb-2">
              "Giving is Beautiful"
            </div>
            <p className="text-sm text-slate-400">
              A veteran-founded initiative connecting verified local tech talent with nonprofits and community support needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-slate-300 hover:text-emerald-400 transition-colors">How It Works</Link></li>
              <li><Link to="/tech-for-good" className="text-slate-300 hover:text-emerald-400 transition-colors">Tech for Good</Link></li>
              <li><Link to="/resources" className="text-slate-300 hover:text-emerald-400 transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* For Our Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Our Community</h3>
            <ul className="space-y-2">
              <li><Link to="/for-nonprofits" className="text-slate-300 hover:text-emerald-400 transition-colors">For Nonprofits</Link></li>
              <li><Link to="/for-freelancers" className="text-slate-300 hover:text-emerald-400 transition-colors">For Freelancers</Link></li>
              <li><Link to="/partner-with-us" className="text-slate-300 hover:text-emerald-400 transition-colors">Partner With Us</Link></li>
              <li>
                <a 
                  href="https://hub.maxsys.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center space-x-1"
                >
                  <span>Marketplace</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://hrm.maxsys.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center space-x-1"
                >
                  <span>HRM Portal</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Maxis International Inc. All rights reserved. | The future belongs to those who share it.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a>
              <a href="/accessibility" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;