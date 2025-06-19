import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, DollarSign } from 'lucide-react';

const Donate: React.FC = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
            <Heart className="h-8 w-8 text-blue-600" aria-label="Support icon" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Maxsys International</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Your donation empowers nonprofits and small businesses with affordable IT solutions and sustainable technology.
          </p>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Every contribution helps us provide trusted tech support and certified e-waste recycling to communities.
          </p>
          <a
            href="https://donate.maxsys.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center mx-auto text-lg"
            aria-label="Donate Now to Maxsys"
          >
            Donate Now
            <DollarSign className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Other Ways to Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" aria-label="Partner icon" />
              <h3 className="text-2xl font-semibold mb-2">Become a Partner</h3>
              <p className="text-lg text-gray-600 mb-4">
                Collaborate with us to bring affordable tech to more communities.
              </p>
              <Link
                to="/partner-with-us"
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center text-lg"
                aria-label="Learn More About Partnering"
              >
                Learn More
              </Link>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" aria-label="Tech Steward icon" />
              <h3 className="text-2xl font-semibold mb-2">Join as a Tech Steward</h3>
              <p className="text-lg text-gray-600 mb-4">
                Use your IT skills to support nonprofits and earn income.
              </p>
              <Link
                to="/for-freelancers"
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center text-lg"
                aria-label="Learn More About Tech Stewards"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;
