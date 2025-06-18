import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Shield, Recycle, ArrowRight, ExternalLink } from 'lucide-react';

const Home = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Maxsys International: Tech with Heart
          </h1>
          <p className="text-xl mb-6">
            Bridging the digital divide with trusted, local IT solutions for communities.
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            We're a 501(c)(3) nonprofit connecting verified local tech talent with nonprofits, churches, and small businesses to deliver affordable, human-centered IT support.
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
            <p className="text-lg italic">
              "Technology should serve communities, not exploit them."
            </p>
            <p className="text-base mt-2">
              Founded by a U.S. Marine Corps veteran, Maxsys is rebuilding trust in technology through local connections and sustainable solutions.
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

      {/* Platform Access */}
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
