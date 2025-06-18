import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Recycle, Globe, ArrowRight, ExternalLink } from 'lucide-react';

const TechForGood = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Technology for Good
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Maxsys International is redefining technology to serve and protect communities.
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Through sustainable practices and trusted IT solutions, we ensure technology empowers nonprofits, small businesses, and individuals without harm.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/resources"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Explore Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition flex items-center"
            >
              Support Our Mission
              <Heart className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Commitment to Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Recycle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Responsible Recycling</h3>
              <p className="text-gray-600">
                Our certified e-waste recycling program ensures old devices are disposed of safely, preventing environmental harm and data breaches.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Affordable Cybersecurity</h3>
              <p className="text-gray-600">
                We provide nonprofits and small businesses with budget-friendly security solutions to protect sensitive data and build trust.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainable Technology</h3>
              <p className="text-gray-600">
                By promoting local IT solutions and ethical practices, we reduce reliance on exploitative corporate services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Protecting Communities</h3>
              <p className="text-gray-600">
                Our e-waste recycling prevents identity theft by securely sanitizing devices, safeguarding donor and volunteer data for nonprofits.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Recycle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reducing Environmental Harm</h3>
              <p className="text-gray-600">
                By partnering with certified recyclers, we divert tons of electronic waste from landfills, promoting a cleaner planet.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Empowering Nonprofits</h3>
              <p className="text-gray-600">
                Our affordable IT solutions save nonprofits up to 80% compared to corporate services, allowing more funds for their missions.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Building Trust</h3>
              <p className="text-gray-600">
                Local Tech Stewards deliver human-centered IT support, fostering trust through personal connections and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the Tech for Good Movement
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Support Maxsys International’s vision for sustainable, community-focused technology by getting involved today.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/partner-with-us"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
            >
              Become a Partner
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/resources"
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition flex items-center"
            >
              Access Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TechForGood;
