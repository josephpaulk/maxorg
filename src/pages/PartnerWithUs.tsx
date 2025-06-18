import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Handshake, Recycle, ArrowRight, ExternalLink } from 'lucide-react';

const PartnerWithUs = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Partner with Maxsys International
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Join our mission to deliver trusted, local IT solutions and sustainable technology to communities.
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Collaborate with Maxsys as a Tech Hub, recruiting agency, or recycling partner to empower nonprofits, small businesses, and IT professionals.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Start a Partnership
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition flex items-center"
            >
              Learn How We Work
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Handshake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tech Hubs</h3>
              <p className="text-gray-600">
                Become a local Tech Hub, coordinating IT projects and connecting verified Tech Stewards with community organizations.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Recruiting Agencies</h3>
              <p className="text-gray-600">
                Partner with us to source skilled IT professionals, helping them join our network as trusted Tech Stewards.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Recycle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Recycling Partners</h3>
              <p className="text-gray-600">
                Collaborate on certified e-waste recycling to ensure safe disposal and protect community data from identity theft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Partnering */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Partner with Maxsys?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Shared Mission</h3>
              <p className="text-gray-600">
                Align with a 501(c)(3) nonprofit dedicated to empowering communities through affordable, trusted technology.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p className="text-gray-600">
                Support local nonprofits and businesses while creating opportunities for IT professionals in your region.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Handshake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expanded Network</h3>
              <p className="text-gray-600">
                Grow your organization’s reach by connecting with Maxsys’s network of community organizations and tech talent.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Recycle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Promote responsible technology practices through certified e-waste recycling and secure data handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Partner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How to Become a Partner
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              Partnering with Maxsys is simple. Reach out to discuss how your organization can contribute to our mission, whether by hosting a Tech Hub, recruiting talent, or supporting our recycling efforts.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We’ll work together to align our goals, ensuring your partnership amplifies community impact and sustainable technology practices.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center mx-auto"
            >
              Contact Us to Partner
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Partner with Maxsys International to transform communities through trusted, local IT solutions and sustainable practices.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
            >
              Start a Partnership
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition flex items-center"
            >
              Learn More
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PartnerWithUs;
