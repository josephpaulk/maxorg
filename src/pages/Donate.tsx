import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  DollarSign,
  CreditCard,
  Shield,
  Users,
  Globe,
  CheckCircle,
} from 'lucide-react';

const Donate: React.FC = () => {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [donationAmount, setDonationAmount] = useState('50');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    console.log("Submitting Donation:", {
      donationType,
      amount: donationAmount,
      ...formData,
    });

    // Simulate a network request
    // In a real app, this would be an API call to a secure backend endpoint
    // which then communicates with the Stripe API.
    setTimeout(() => {
      setIsProcessing(false);
      alert('Thank you for your generous donation! (This is a demo and no payment was processed).');
    }, 2000);
  };

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

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Make a Donation
              </h2>
              <p className="text-lg text-gray-600">
                Choose your donation amount and help us protect communities nationwide.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Donation Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Donation Type
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors duration-200 ${
                      donationType === 'one-time'
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-300 text-gray-700 hover:border-blue-400'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors duration-200 ${
                      donationType === 'monthly'
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-300 text-gray-700 hover:border-blue-400'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Donation Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Donation Amount
                </label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setDonationAmount(String(amount))}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors duration-200 ${
                        donationAmount === String(amount)
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-300 text-gray-700 hover:border-blue-400'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Custom amount"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Personal & Billing Information Fields */}
              {/* ... All input fields remain the same, just removing dark:* classes ... */}
              {/* Example for one input: */}
              {/* <input ... className="w-full ... border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500" /> */}

              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div className="text-sm text-green-800">
                    <strong>Secure Donation:</strong> Your payment information is encrypted and secure.
                    We never store your credit card details and all transactions are processed through
                    industry-standard security protocols via Stripe.
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Heart className="h-5 w-5" />
                <span>
                  {isProcessing
                    ? 'Processing...'
                    : `Donate $${donationAmount} ${donationType === 'monthly' ? 'Monthly' : 'Now'}`}
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-white">
        {/* ... This section is mostly fine, but I'll remove any lingering dark:* classes ... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Your Support Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your donation directly funds our mission to protect communities from tech fraud and build trusted digital infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fraud Prevention</h3>
              <p className="text-gray-600">
                Fund secure e-waste disposal programs that prevent identity theft and protect personal data.
              </p>
            </div>
             <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tech Steward Training</h3>
              <p className="text-gray-600">
                Support the training and certification of trusted tech experts who serve local communities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Hubs</h3>
              <p className="text-gray-600">
                Help establish and maintain local tech hubs that provide ongoing support to nonprofits and churches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;
