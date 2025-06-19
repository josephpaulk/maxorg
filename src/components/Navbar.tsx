import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" aria-label="Maxsys International Home">
            <img 
              src="/logo.png" 
              alt="Maxsys International - Tech for Good" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-slate-800 hidden sm:inline">Maxsys.ORG</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors duration-200 ${
                isActive('/')
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
              aria-label="Home"
            >
              Home
            </Link>
            <Link
              to="/insights"
              className={`text-lg font-medium transition-colors duration-200 ${
                isActive('/insights')
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
              aria-label="About Us"
            >
              Insights
            </Link>
            
            <Link
              to="/about"
              className={`text-lg font-medium transition-colors duration-200 ${
                isActive('/about')
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
              aria-label="About Us"
            >
              About Us
            </Link>

            {/* Marketplace Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('marketplace')}
                className="flex items-center space-x-1 text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200"
                aria-expanded={activeDropdown === 'marketplace'}
                aria-label="Marketplace Menu"
              >
                <span>Tech-Hub</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === 'marketplace' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'marketplace' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                  <Link
                    to="/for-nonprofits"
                    onClick={closeDropdowns}
                    className="block px-4 py-2 text-base text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    For Nonprofits
                  </Link>
                  <Link
                    to="/for-freelancers"
                    onClick={closeDropdowns}
                    className="block px-4 py-2 text-base text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    For Freelancers
                  </Link>
                  <div className="border-t border-slate-200 my-2"></div>
                  <a
                    href="https://hub.maxsys.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2 text-base text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <span>Tech Hub</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://hrm.maxsys.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2 text-base text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <span>Hub Portal</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Tech for Good Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('techforgood')}
                className="flex items-center space-x-1 text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200"
                aria-expanded={activeDropdown === 'techforgood'}
                aria-label="Tech for Good Menu"
              >
                <span>Resources</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === 'techforgood' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'techforgood' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                  <Link
                    to="/tech-for-good"
                    onClick={closeDropdowns}
                    className="block px-4 py-2 text-base text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Tech for Good
                  </Link>
                  <Link
                    to="/how-it-works"
                    onClick={closeDropdowns}
                    className="block px-4 py-2 text-base text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    How It Works
                  </Link>
                  <Link
                    to="/resources"
                    onClick={closeDropdowns}
                    className="block px-4 py-2 text-base text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Resources & Training
                  </Link>
                  <Link
                    to="/partner-with-us"
                    onClick={closeDropdowns}
                    className="block px-4 py-2 text-base text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Partner With Us
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`text-lg font-medium transition-colors duration-200 ${
                isActive('/contact')
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
              aria-label="Contact"
            >
              Contact
            </Link>
          </div>

{/* CTA Button */}
<div className="hidden lg:flex items-center">
  <Link
    to="/donate"
    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    aria-label="Donate to Maxsys"
  >
    Donate
  </Link>
</div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                  isActive('/')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                aria-label="Home"
              >
                Home
              </Link>
              
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                  isActive('/about')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                aria-label="About Us"
              >
                About Us
              </Link>

              {/* Mobile Marketplace Section */}
              <div className="pt-2">
                <div className="px-3 py-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Marketplace
                </div>
                <Link
                  to="/for-nonprofits"
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                >
                  For Nonprofits
                </Link>
                <Link
                  to="/for-freelancers"
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                >
                  For Freelancers
                </Link>
                <a
                  href="https://hub.maxsys.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-2 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                >
                  <span>Browse Projects</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
                <a
                  href="https://hrm.maxsys.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-2 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                >
                  <span>HRM Portal</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              {/* Mobile Tech for Good Section */}
              <div className="pt-2">
                <div className="px-3 py-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Tech for Good
                </div>
                <Link
                  to="/tech-for-good"
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                >
                  Our Programs
                </Link>
                <Link
                  to="/how-it-works"
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  to="/resources"
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                >
                  Resources & Training
                </Link>
                <Link
                  to="/partner-with-us"
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2 text-lg font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                >
                  Partner With Us
                </Link>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                  isActive('/contact')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                aria-label="Contact"
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-slate-200">
                <button
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 text-lg font-medium"
                  aria-label="Donate to Maxsys"
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dropdown backdrop for desktop */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40 lg:block hidden" 
          onClick={closeDropdowns}
        />
      )}
    </nav>
  );
};

export default Navbar;
