import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            A Journey Starting with Purpose
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Maxsys International Incorporated, a 501(c)(3) nonprofit organization.
Because the best solutions aren't about the latest software or fanciest hardware—they're about people helping people, one community at a time.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/how-it-works"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Learn How We Work
              <Heart className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition flex items-center"
            >
              Get Involved
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Meet Maryanne Rozier Chiriboga
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A U.S. Marine Corps veteran, cancer survivor, missionary, and accomplished business owner, Maryanne brings decades of global experience to Maxsys International. Her journey from programming in COBOL using punch cards to launching community technology solutions worldwide shapes our mission to bridge the digital divide.
            </p>
      <div className="flex justify-center mb-8">
        <div className="relative">
          <img 
            src="/maryanne.png" 
            alt="Maryanne Rozier Chiriboga, Founder of Maxsys International" 
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-blue-200"
          />
          {/* Optional: Add a subtle overlay or badge */}
          <div className="absolute bottom-2 right-2 bg-blue-600 rounded-full p-2">
            <Award className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
            <p className="text-lg text-gray-600 mb-8">
              Guided by faith, resilience, and a commitment to service, Maryanne founded Maxsys to deliver technology solutions that are compassionate, practical, and rooted in community needs. Her vision ensures that every project we undertake serves real people in real situations.
            </p>
            <blockquote className="text-xl italic text-gray-700 border-l-4 border-blue-600 pl-4 py-2 mb-8">
              "The most impactful technology solutions are grounded in understanding, driven by compassion, and built to serve those who need them most."
              <cite className="block mt-2 text-base not-italic text-gray-500">
                — Maryanne Rozier Chiriboga, Founder
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Mission: Technology for Communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Trust and Accountability
              </h3>
              <p className="text-gray-600 text-center">
                Maxsys connects communities with verified, local IT professionals who understand their needs and are committed to their success. Our Tech Hubs ensure accountability through personal relationships and local reputation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Compassionate Solutions
              </h3>
              <p className="text-gray-600 text-center">
                Inspired by Maryanne’s global service, we deliver technology solutions that empower nonprofits, churches, and small businesses without exploiting their limited budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Be part of a movement to make technology accessible, sustainable, and community-focused. Whether you're an IT professional or an organization in need, Maxsys is here to connect you.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/for-freelancers"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
            >
              Become a Tech Steward
              <Users className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/for-nonprofits"
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition flex items-center"
            >
              Get Tech Support
              <Shield className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
