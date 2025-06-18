import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Shield, 
  Recycle, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle, 
  Zap, 
  Globe 
} from 'lucide-react';

const Home = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tech that serves - People who care
          </h1>
          <p className="text-2xl mb-6">
            Because technology should lift us up, not leave us behind.
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            That’s why we’ve created a trusted platform connecting socially-minded tech talent with local needs. From school clubs to seniors, from nonprofits to neighbors in crisis—we're building a community-first tech support network powered by “Nerds with Hearts.”
          </p>
          {/* CTAs */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/for-freelancers"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Join as a Tech Steward
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/for-nonprofits"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition flex items-center"
            >
              Post a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/tech-for-good"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition flex items-center"
            >
              Support Our Mission
              <Heart className="ml-2 h-5 w-5" />
            </Link>
          </div>
          {/* Key Message */}
          <div className="mt-10 max-w-3xl mx-auto">
            <p className="text-lg bold">
              Maxsys International Incorporated
            </p>
            <p className="text-base mt-2">
              501(c)(3) nonprofit connecting verified local tech talent with nonprofits, churches, and small businesses to deliver affordable, human-centered IT support.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Commitment to Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-600">
                Local Tech Hubs staffed by verified professionals who live in your community and care about its success.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-600">
                Protecting nonprofits and small businesses with affordable security solutions and proper data handling.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Recycle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Responsible Recycling</h3>
              <p className="text-gray-600">
                Certified e-waste collection ensures devices are safely disposed of, preventing identity theft and environmental harm.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Human Connection</h3>
              <p className="text-gray-600">
                Building trust through personal relationships, not corporate call centers or overpriced contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section (NEWLY ADDED) */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Maxsys International: Tech with Heart
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Founded by veteran and technologist Maryanne Rozier Chiriboga, Maxsys exists 
                to provide real tech solutions for real communities. We believe in trust-based, 
                local-first support that protects and empowers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-lg">Veteran-founded and community-focused</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-lg">Secure e-waste recycling prevents fraud</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 mt-1 flex-shrink-0" />
                  <span className="text-lg">Local expertise for local challenges</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <Zap className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-blue-200">Uptime</div>
                  </div>
                  <div>
                    <Heart className="h-8 w-8 mx-auto mb-3 text-red-300" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-blue-200">Support</div>
                  </div>
                  <div>
                    <Globe className="h-8 w-8 mx-auto mb-3 text-green-300" />
                    <div className="text-2xl font-bold">50</div>
                    <div className="text-sm text-blue-200">States</div>
                  </div>
                  <div>
                    <Users className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                    <div className="text-2xl font-bold">10k+</div>
                    <div className="text-sm text-blue-200">Helped</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Access (LAST SECTION) */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Join the Maxsys Movement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">For Tech Professionals</h3>
              <p className="text-gray-600 mb-6">
                Become a verified Tech Steward, take on meaningful projects, and earn income while serving your community.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/for-freelancers"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
                >
                  Join Our Network
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">For Organizations</h3>
              <p className="text-gray-600 mb-6">
                Access affordable IT support from local experts who understand your mission and budget constraints.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/for-nonprofits"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
                >
                  Post a Project
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
