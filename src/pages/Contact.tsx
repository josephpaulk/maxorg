import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Heart, Users, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    type: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-600 font-semibold mb-8">
            Let's work together to bridge the digital divide
          </p>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Whether you're a nonprofit seeking tech support, a professional wanting to join our network, 
            or an organization interested in partnership, we're here to help you make a meaningful impact.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">For Nonprofits</h3>
              <p className="text-slate-700 mb-6">
                Need tech support for your organization? Let's discuss how our verified professionals 
                can help amplify your mission.
              </p>
              <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
                Get Tech Support
              </button>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">For Professionals</h3>
              <p className="text-slate-700 mb-6">
                Ready to use your tech skills for community impact? Join our verified network 
                of local professionals making a difference.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                Join Our Network
              </button>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">For Partners</h3>
              <p className="text-slate-700 mb-6">
                Interested in partnering with us? Let's explore how we can work together 
                to create sustainable community impact.
              </p>
              <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold">
                Explore Partnership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your organization name"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">
                      I'm interested in... *
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="nonprofit-support">Getting tech support for my nonprofit</option>
                      <option value="join-network">Joining as a tech professional</option>
                      <option value="partnership">Partnership opportunities</option>
                      <option value="volunteering">Volunteering and community involvement</option>
                      <option value="media-press">Media and press inquiries</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more about how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Let's Connect</h2>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  We believe in the power of personal connection. Whether you prefer email, phone, 
                  or meeting in person, we're here to listen and help you find the best way to 
                  get involved in our mission.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">Email Us</h3>
                    <p className="text-slate-600 mb-2">We typically respond within 24 hours</p>
                    <a href="mailto:hello@maxsys.org" className="text-blue-600 hover:text-blue-700 font-medium">
                      hello@maxsys.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">Call Us</h3>
                    <p className="text-slate-600 mb-2">Monday - Friday, 9 AM - 5 PM EST</p>
                    <a href="tel:+1-555-MAXIS-01" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      +1 (555) MAXIS-01
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">Visit Us</h3>
                    <p className="text-slate-600 mb-2">Community meetings by appointment</p>
                    <p className="text-slate-700">
                      Various locations across our<br />
                      partner network communities
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Quick Response Promise</h3>
                <p className="mb-4 leading-relaxed">
                  We know that when you're ready to make a difference, timing matters. That's why we commit to:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Email responses within 24 hours</li>
                  <li>• Phone consultations scheduled within 48 hours</li>
                  <li>• Partnership discussions within one week</li>
                  <li>• Emergency nonprofit support within 4 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community newsletter for updates on impact stories, new resources, 
              training opportunities, and ways to get involved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm opacity-75">
              We respect your privacy and never share your information. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Ready to Make Technology Work for Everyone?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Every conversation starts with a single message. Whether you're looking for support, 
            wanting to contribute, or exploring partnerships, we're excited to hear from you.
          </p>
          
          <div className="text-2xl font-bold text-emerald-600 mb-4">
            "The future belongs to those who share it."
          </div>
          
          <p className="text-slate-700">
            Let's build that future together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;