import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, Users, ArrowRight, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch with Maxsys International
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            We’re here to answer your questions and support your technology needs.
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Whether you’re a nonprofit seeking IT solutions, an IT professional ready to join our network, or an organization interested in partnership, let’s connect.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/for-nonprofits"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Post a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/for-freelancers"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition flex items-center"
            >
              Become a Tech Steward
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Reach out with questions, partnership ideas, or support requests.
              </p>
              <a
                href="mailto:info@maxsys.org"
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center"
              >
                info@maxsys.org
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak with our team for personalized assistance.
              </p>
              <a
                href="tel:+1-800-555-1234"
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center"
              >
                +1-800-555-1234
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Join Our Mission</h3>
              <p className="text-gray-600 mb-4">
                Become a Tech Steward or partner to make a community impact.
              </p>
              <Link
                to="/partner-with-us"
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center"
              >
                Explore Partnerships
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            More Ways to Connect
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Visit our resources page for free guides on e-waste recycling, cybersecurity, and IT setups, or learn how our platform works to support your community.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/resources"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
              >
                Access Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition flex items-center"
              >
                Learn How It Works
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Let’s Build a Stronger Community Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contact Maxsys International today to start a conversation about how we can support your technology needs or collaborate for impact.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:info@maxsys.org"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
            >
              Send Us an Email
              <Mail className="ml-2 h-5 w-5" />
            </a>
            <Link
              to="/partner-with-us"
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition flex items-center"
            >
              Become a Partner
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
