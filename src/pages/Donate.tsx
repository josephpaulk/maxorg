// project/src/pages/Donate.tsx

import React, { useState } from 'react';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Heart, DollarSign, Shield, Users, Globe, CheckCircle } from 'lucide-react';

// --- Stripe Initialization ---
// This uses your PUBLIC Stripe key. It's safe to be in the frontend.
// We get it from the Vite environment variables (which we'll set up in Step 4).
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

/**
 * This is the main checkout form component. It must be wrapped in an <Elements> provider.
 */
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [donationAmount, setDonationAmount] = useState('50');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Your GiveWP Form ID. Replace '123' with the real ID you found earlier.
  const GIVEWP_FORM_ID = '123'; 

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    // Step 1: Create a Payment Method using the card details entered by the user.
    // The actual card number is never exposed to our code.
    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      elements,
      params: {
        billing_details: {
          // You can collect name and email here if you add the fields to your form
          name: 'Generous Donor', // Replace with actual form data
          email: 'donor@example.com', // Replace with actual form data
        }
      }
    });

    if (paymentMethodError) {
      setMessage(paymentMethodError.message || 'An error occurred. Please check your card details.');
      setIsProcessing(false);
      return;
    }

    // Step 2: Send the safe Payment Method ID and other form data to our secure bridge function.
    try {
      const response = await fetch('/submit-donation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formId: GIVEWP_FORM_ID,
          amount: donationAmount,
          firstName: 'Generous', // Replace with actual form data
          lastName: 'Donor', // Replace with actual form data
          email: 'donor@example.com', // Replace with actual form data
          paymentMethodId: paymentMethod.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to process donation.');
      }

      // Step 3: Handle success
      setMessage('Thank you! Your donation has been received successfully.');
      // Here you could redirect to a thank you page: window.location.href = "/thank-you";
      
    } catch (error: any) {
      setMessage(error.message || 'An unexpected error occurred. Please try again.');
    }

    setIsProcessing(false);
  };
  
  return (
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
        {/* Donation Type & Amount buttons... (This part is for UI, not payment processing) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">Donation Type</label>
          <div className="flex space-x-4">
            <button type="button" onClick={() => setDonationType('one-time')} className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors duration-200 ${donationType === 'one-time' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-300 text-gray-700 hover:border-blue-400'}`}>One-time</button>
            <button type="button" onClick={() => setDonationType('monthly')} className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-colors duration-200 ${donationType === 'monthly' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-300 text-gray-700 hover:border-blue-400'}`}>Monthly</button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">Donation Amount</label>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
            {predefinedAmounts.map((amount) => (
              <button key={amount} type="button" onClick={() => setDonationAmount(String(amount))} className={`py-3 px-4 rounded-lg border-2 font-medium transition-colors duration-200 ${donationAmount === String(amount) ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-300 text-gray-700 hover:border-blue-400'}`}>
                ${amount}
              </button>
            ))}
          </div>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input type="number" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} placeholder="Custom amount" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
        </div>

        {/* Stripe Payment Element replaces all your old credit card inputs */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h3>
          <PaymentElement />
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <div className="text-sm text-green-800">
              <strong>Secure Donation:</strong> Your payment information is sent directly to Stripe and is never stored on our servers.
            </div>
          </div>
        </div>

        <button type="submit" disabled={isProcessing || !stripe} className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2">
          <Heart className="h-5 w-5" />
          <span>{isProcessing ? 'Processing...' : `Donate $${donationAmount} ${donationType === 'monthly' ? 'Monthly' : 'Now'}`}</span>
        </button>

        {message && <div className="text-center text-red-600 font-medium">{message}</div>}
      </form>
    </div>
  );
};


/**
 * This is the main page component that sets up the Stripe provider.
 */
const DonatePage: React.FC = () => {
  return (
    <main className="bg-gray-50">
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

      <section className="py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Elements stripe={stripePromise} options={{ mode: 'payment', amount: 5000, currency: 'usd', appearance: { theme: 'stripe' } }}>
            <CheckoutForm />
          </Elements>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Your Support Matters</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your donation directly funds our mission to protect communities from tech fraud and build trusted digital infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center"><div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4"><Shield className="h-8 w-8 text-blue-600" /></div><h3 className="text-xl font-bold text-gray-900 mb-3">Fraud Prevention</h3><p className="text-gray-600">Fund secure e-waste disposal programs that prevent identity theft and protect personal data.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4"><Users className="h-8 w-8 text-green-600" /></div><h3 className="text-xl font-bold text-gray-900 mb-3">Tech Steward Training</h3><p className="text-gray-600">Support the training and certification of trusted tech experts who serve local communities.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4"><Globe className="h-8 w-8 text-purple-600" /></div><h3 className="text-xl font-bold text-gray-900 mb-3">Community Hubs</h3><p className="text-gray-600">Help establish and maintain local tech hubs that provide ongoing support to nonprofits and churches.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonatePage;
