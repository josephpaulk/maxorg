import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Shield, Recycle, ArrowRight, ExternalLink } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Geeks with Hearts
            </h1>
            <p className="text-xl md:text-2xl text-emerald-600 font-semibold mb-8">
              Because giving is beautiful
            </p>
            <p className="text-lg md:text-xl text-slate-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              We're not just fixing devices. We're rebuilding digital dignity. Tech should never leave people behind. 
              Join us in changing that.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                to="/for-freelancers"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 text-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Users className="h-5 w-5" />
                <span>Join Our Community</span>
              </Link>
              <Link 
                to="/how-it-works"
                className="bg-white text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all duration-200 text-lg font-semibold border border-slate-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Explore How It Works</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-lg hover:from-orange-500 hover:to-pink-600 transition-all duration-200 text-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Heart className="h-5 w-5" />
                <span>Donate Now</span>
              </button>
            </div>

            {/* Key Message */}
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
              <p className="text-2xl font-bold text-slate-800 mb-4">
                "The future belongs to those who share it."
              </p>
              <p className="text-slate-600 leading-relaxed">
                A veteran-founded initiative connecting verified, local tech talent with nonprofits and 
                community support needs. We're building a movement for digital inclusion, one connection at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Tech Stewardship from School Level
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe in the power of local tech support for digital inclusion. 
              Every device saved, every skill shared, every connection made builds a more equitable digital future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Community First</h3>
              <p className="text-slate-600">
                Every connection strengthens our local tech ecosystem and builds lasting relationships.
              </p>
            </div>

            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Cybersecurity</h3>
              <p className="text-slate-600">
                Protecting communities through education, secure practices, and trusted local expertise.
              </p>
            </div>

            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Recycle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Sustainable Tech</h3>
              <p className="text-slate-600">
                Refurbishing, recycling, and extending the life of technology to reduce e-waste.
              </p>
            </div>

            <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Verified Network</h3>
              <p className="text-slate-600">
                Local identity verification ensures trust, quality, and accountability in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Access */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-slate-600">
              Access our platforms and join the movement for digital inclusion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">For Tech Professionals</h3>
              <p className="text-slate-600 mb-6">
                Join our verified marketplace, connect with meaningful projects, and build your reputation 
                in the community impact space.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://hub.maxsys.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors text-center font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Access Marketplace</span>
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

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">For Organizations</h3>
              <p className="text-slate-600 mb-6">
                Post projects, find verified local talent, and access resources to amplify your 
                organization's technology capabilities.
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
                  to="/for-nonprofits"
                  className="block w-full border border-teal-500 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors text-center font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;