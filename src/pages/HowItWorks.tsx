import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Search, CheckCircle, Heart, Shield, ExternalLink, DollarSign } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            How Maxis Works
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-8">
            Our ecosystem connects verified local tech talent with organizations that need support, 
            creating sustainable impact through trusted relationships.
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Simple. Secure. Impactful.</h2>
            <p className="text-xl text-slate-600">Here's how we make tech support accessible for everyone</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">1. Join & Verify</h3>
              <p className="text-slate-600">
                Tech professionals complete local identity verification to build trust in our community.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">2. Match & Connect</h3>
              <p className="text-slate-600">
                Our platform matches local talent with nearby nonprofits and community organizations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">3. Deliver Impact</h3>
              <p className="text-slate-600">
                Projects are completed with quality assurance and community feedback systems.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">4. Build Community</h3>
              <p className="text-slate-600">
                Successful connections strengthen our network and create lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Ecosystem</h2>
            <p className="text-xl text-slate-600">Three platforms working together for maximum impact</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Marketplace */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Marketplace Hub</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Where verified tech professionals showcase their skills, browse projects, and connect with 
                organizations. Built on a robust FreelanceEngine WordPress platform.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://hub.maxsys.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors text-center font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Visit Marketplace</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link 
                  to="/for-freelancers"
                  className="block w-full border border-emerald-500 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors text-center font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* HRM Portal */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">HRM Portal</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Dedicated platform for recruiting agencies, tech hubs, and partner organizations to 
                manage talent pipelines and coordinate community initiatives.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://hrm.maxsys.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors text-center font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Access HRM Portal</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link 
                  to="/partner-with-us"
                  className="block w-full border border-teal-500 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors text-center font-semibold"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* This Website */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Hub</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                This website serves as our community's front door—sharing our mission, connecting stakeholders, 
                and providing resources for digital inclusion.
              </p>
              <div className="space-y-3">
                <Link 
                  to="/resources"
                  className="block w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-center font-semibold"
                >
                  Explore Resources
                </Link>
                <Link 
                  to="/contact"
                  className="block w-full border border-blue-500 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center font-semibold"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Community Membership</h2>
              <p className="text-xl text-slate-600">
                Affordable access to verified local tech talent and community resources
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <DollarSign className="h-8 w-8 text-emerald-600" />
                    <span className="text-4xl font-bold text-slate-800">$24</span>
                    <span className="text-xl text-slate-600">/month</span>
                  </div>
                  <p className="text-lg text-slate-700 mb-6">
                    Our community membership model ensures sustainability while keeping costs low for organizations 
                    that need support most.
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span>Access to verified local talent network</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span>Project posting and management tools</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span>Community resources and training</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span>Priority support and consultation</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-lg text-slate-700 mb-6">
                    "This small investment powers our entire verification system, platform maintenance, 
                    and community support programs."
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 text-lg font-semibold shadow-lg"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Be Part of the Solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of tech professionals and organizations who are already making a difference 
            in their communities through verified, local connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/for-freelancers"
              className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors text-lg font-semibold"
            >
              Join as a Tech Professional
            </Link>
            <Link 
              to="/for-nonprofits"
              className="bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-colors text-lg font-semibold"
            >
              Post Your First Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;