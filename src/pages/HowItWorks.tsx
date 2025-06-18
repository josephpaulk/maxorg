import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, CheckCircle, Briefcase, ArrowRight, ExternalLink } from 'lucide-react';

const HowItWorks = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Maxsys Works
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Connecting communities with trusted, local IT solutions is simple with Maxsys International.
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Whether you’re a nonprofit seeking affordable tech support or an IT professional ready to make an impact, our platform makes it easy to get started.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/for-nonprofits"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center"
            >
              For Nonprofits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/for-freelancers"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition flex items-center"
            >
              For Tech Stewards
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Nonprofits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            For Nonprofits: Get Affordable IT Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Post Your Project</h3>
              <p className="text-gray-600">
                Describe your IT needs—whether it’s setting up email, securing data, or building a website. No account required to start.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Match with Local Experts</h3>
              <p className="text-gray-600">
                Our platform connects you with verified Tech Stewards in your community who understand your mission and budget.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Solutions & Support</h3>
              <p className="text-gray-600">
                Receive tailored IT solutions, from setup to ongoing support, plus secure e-waste disposal to protect your data.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/for-nonprofits"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center mx-auto"
            >
              Post Your First Project
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Tech Stewards */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            For IT Professionals: Become a Tech Steward
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Briefcase className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
              <p className="text-gray-600">
                Share your skills and experience, from legacy systems like Windows Server to modern cloud solutions. No certifications needed.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Briefcase className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Verified</h3>
              <p className="text-gray-600">
                Complete a background check and skill assessment to ensure trust and quality for our community partners.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Briefcase className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Take on Projects</h3>
              <p className="text-gray-600">
                Match with local nonprofits and businesses, deliver impactful solutions, and earn income while building trust.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/for-freelancers"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center mx-auto"
            >
              Apply to Join
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Our Process Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Connections</h3>
              <p className="text-gray-600">
                Our Tech Hubs prioritize local expertise, fostering trust through personal relationships and community accountability.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mission-Driven</h3>
              <p className="text-gray-600">
                As a 501(c)(3) nonprofit, we align with your values, ensuring technology serves communities, not corporate profits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join Maxsys International and be part of a movement to make technology accessible and trusted in every community.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/for-nonprofits"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
            >
              Post a Project
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/for-freelancers"
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition flex items-center"
            >
              Become a Tech Steward
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
