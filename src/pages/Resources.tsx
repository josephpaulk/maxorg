import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, FileText, Shield, Recycle, ArrowRight, ExternalLink } from 'lucide-react';

const Resources = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Maxsys Resources
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Empower your community with free tools and guides from Maxsys International.
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Access practical resources for secure e-waste recycling, affordable IT setups, and cybersecurity to support nonprofits, small businesses, and IT professionals.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Request Custom Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition flex items-center"
            >
              Explore Our Process
              <FileText className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Our Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Recycle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">E-Waste Recycling Guide</h3>
              <p className="text-gray-600 mb-4">
                Learn how to safely dispose of old computers and devices with our step-by-step guide to certified e-waste recycling, protecting your data and the environment.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center"
              >
                Download Guide
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Checklist</h3>
              <p className="text-gray-600 mb-4">
                Protect your organization with our free checklist for securing data, managing passwords, and preventing cyber threats on a budget.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center"
              >
                Download Checklist
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">IT Setup Toolkit</h3>
              <p className="text-gray-600 mb-4">
                Get started with affordable IT solutions using our toolkit, including tips for Google Workspace, network setup, and hardware recommendations.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center"
              >
                Download Toolkit
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            More Ways to Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Tech Tips</h3>
              <p className="text-gray-600 mb-4">
                Browse our blog for practical advice on managing technology for nonprofits, including case studies and success stories from our Tech Hubs.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center"
              >
                Visit Blog
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tech Steward Training</h3>
              <p className="text-gray-600 mb-4">
                Access free training materials to enhance your skills as a Tech Steward, covering legacy systems, cloud solutions, and community engagement.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center"
              >
                Explore Training
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need More Support?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contact Maxsys International for personalized assistance or to request additional resources tailored to your community’s needs.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
            >
              Get in Touch
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/for-nonprofits"
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition flex items-center"
            >
              Post a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;
