import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Briefcase, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

const ForFreelancers = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become a Tech Steward
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Join Maxsys International’s network of trusted IT professionals and make a difference in your community.
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            As a Tech Steward, you’ll deliver affordable IT solutions to nonprofits, churches, and small businesses, earning income while building local impact.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/how-it-works"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Join Our Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition flex items-center"
            >
              Learn More
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Opportunity Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Join Maxsys as a Tech Steward?
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              Whether you’re an IT veteran skilled in legacy systems like Windows Server or a modern tech expert in cloud solutions, Maxsys values your experience. Our Tech Hubs connect you with local organizations needing practical IT support, from basic setups to advanced cybersecurity.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Unlike gig platforms that prioritize speed over quality, Maxsys fosters lasting relationships, ensuring your work strengthens your community’s trust in technology.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of Being a Tech Steward
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Earn Income</h3>
              <p className="text-gray-600">
                Take on projects that match your skills, from network setups to website design, and earn competitive rates for your expertise.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
              <p className="text-gray-600">
                Support nonprofits and small businesses in your community, helping them thrive with affordable, reliable technology.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Build Trust</h3>
              <p className="text-gray-600">
                Become a trusted local expert, fostering long-term relationships with organizations that value your commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Get Started in 3 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply</h3>
              <p className="text-gray-600">
                Submit your application with your skills, experience, and background. No certifications required—just real expertise.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Verified</h3>
              <p className="text-gray-600">
                Pass our background check and skill assessment to ensure trust and quality for our community partners.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Working</h3>
              <p className="text-gray-600">
                Match with local projects, deliver solutions, and earn income while making a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Serve Your Community?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join Maxsys’s network of Tech Stewards and use your IT skills to empower local organizations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/how-it-works"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
            >
              Apply Today
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition flex items-center"
            >
              Contact Us
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForFreelancers;
