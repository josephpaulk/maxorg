import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Users, DollarSign, ArrowRight, ExternalLink } from 'lucide-react';

const ForNonprofits = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Affordable Tech Support for Nonprofits
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Maxsys International connects your nonprofit with trusted, local IT professionals who understand your mission and budget.
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Say goodbye to overpriced corporate IT solutions. Our local Tech Hubs deliver practical, affordable technology support tailored to your needs.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/how-it-works"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Post Your First Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition flex items-center"
            >
              Schedule a Consultation
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Challenge Nonprofits Face
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              Nonprofits like yours are often targeted by vendors selling overpriced IT solutions you don’t need. A local food bank with a $400,000 budget was quoted $150,000 annually for enterprise servers and services—money that could have fed thousands.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Worse, improper disposal of old computers risks exposing sensitive data, endangering your donors, volunteers, and community. Maxsys changes that with affordable, local expertise and secure recycling.
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comprehensive IT Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Basic IT Setup</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  Email and collaboration tools (e.g., Google Workspace for Nonprofits)
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  Computer and network configuration
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  Affordable hardware recommendations
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Advanced Solutions</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  Donor management systems
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  Cloud migration and backups
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  Website design and maintenance
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Security & Recycling</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  Cybersecurity assessments
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  Secure e-waste disposal
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  Data sanitization to protect community data
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Maxsys?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
              <p className="text-gray-600">
                Save up to 80% compared to corporate IT services. Our local solutions cost 20-40% less than remote providers, keeping more funds for your mission.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Trust</h3>
              <p className="text-gray-600">
                Work with verified Tech Stewards who live in your community, building lasting relationships based on accountability and shared values.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Protection</h3>
              <p className="text-gray-600">
                Our certified e-waste recycling prevents data breaches, protecting your donors and volunteers from identity theft risks.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mission Alignment</h3>
              <p className="text-gray-600">
                Our 501(c)(3) status and veteran-led mission ensure we prioritize your impact over profit, delivering solutions that empower your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join hundreds of nonprofits leveraging Maxsys’s local Tech Hubs for affordable, trusted IT support.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/how-it-works"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
            >
              Post Your First Project
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition flex items-center"
            >
              Schedule a Consultation
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForNonprofits;
