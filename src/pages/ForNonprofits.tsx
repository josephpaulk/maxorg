import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Shield, CheckCircle, ExternalLink, DollarSign, Clock, Award } from 'lucide-react';

const ForNonprofits = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            For Nonprofits & Organizations
          </h1>
          <p className="text-xl text-rose-600 font-semibold mb-8">
            Access verified local tech talent to amplify your mission
          </p>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto mb-8">
            Connect with skilled professionals who understand nonprofit needs and are committed to making 
            technology work for your community impact goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://hub.maxsys.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>Post Your First Project</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            <Link 
              to="/contact"
              className="bg-white text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all duration-200 text-lg font-semibold border border-slate-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Maxis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Nonprofits Choose Maxis</h2>
            <p className="text-xl text-slate-600">
              We understand your unique challenges and mission-driven goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl">
              <Heart className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Mission-Aligned Professionals</h3>
              <p className="text-slate-700 leading-relaxed">
                Our verified network consists of tech professionals who chose to work with nonprofits 
                because they believe in making a difference through technology.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Local & Verified</h3>
              <p className="text-slate-700 leading-relaxed">
                Every professional in our network completes local identity verification, ensuring trust, 
                accountability, and community connection for your projects.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl">
              <DollarSign className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Nonprofit-Friendly Pricing</h3>
              <p className="text-slate-700 leading-relaxed">
                Our community understands nonprofit budgets. Many professionals offer discounted rates 
                or pro bono services for qualifying organizations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Comprehensive Support</h3>
              <p className="text-slate-700 leading-relaxed">
                From simple website updates to complex system implementations, our network covers 
                all technology needs with specialized nonprofit experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <Clock className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Quick Response Times</h3>
              <p className="text-slate-700 leading-relaxed">
                Local professionals mean faster response times and the ability to provide on-site 
                support when needed for critical technology issues.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl">
              <Award className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Quality Assurance</h3>
              <p className="text-slate-700 leading-relaxed">
                Our community feedback system and professional standards ensure consistently 
                high-quality work that meets your organization's specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Nonprofits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">
              Getting tech support has never been easier or more reliable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Post Your Project</h3>
              <p className="text-slate-600">
                Describe your tech needs, timeline, and budget on our marketplace platform.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Get Matched</h3>
              <p className="text-slate-600">
                Verified local professionals review your project and submit proposals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Choose & Connect</h3>
              <p className="text-slate-600">
                Review profiles, ratings, and proposals to select the best fit for your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Get Results</h3>
              <p className="text-slate-600">
                Work directly with your chosen professional to complete your project successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Complete Tech Support</h2>
            <p className="text-xl text-slate-600">
              Our verified professionals cover all your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Website & Digital Presence</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Website design and development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Content management systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Social media integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Search engine optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Data & Systems</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Database design and management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>CRM implementation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Donor management systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Reporting and analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Security & Compliance</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Cybersecurity assessments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Data protection protocols</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Staff security training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Compliance documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Hardware & Infrastructure</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Network setup and maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Device procurement and setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Cloud migration services</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Backup and recovery systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Training & Support</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Staff technology training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Digital literacy programs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Ongoing technical support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Emergency tech response</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Digital Marketing</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Email marketing campaigns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Social media management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Online fundraising tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Content creation and strategy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Community Membership</h2>
              <p className="text-xl text-slate-600">
                Affordable access to our entire verified professional network
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <DollarSign className="h-8 w-8 text-rose-600" />
                    <span className="text-4xl font-bold text-slate-800">$24</span>
                    <span className="text-xl text-slate-600">/month</span>
                  </div>
                  <p className="text-lg text-slate-700 mb-6">
                    Our community membership model keeps costs low while ensuring sustainable, 
                    high-quality support for your organization.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span>Full access to verified professional network</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span>Unlimited project posting and management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span>Priority matching with local talent</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span>Access to nonprofit-specific resources</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span>Community support and consultation</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <blockquote className="text-lg text-slate-700 mb-6 italic">
                    "This small investment has saved us thousands in tech costs while connecting us 
                    with professionals who truly understand our mission."
                  </blockquote>
                  <cite className="text-slate-600">— Sarah M., Executive Director</cite>
                  <div className="mt-8">
                    <a 
                      href="https://hub.maxsys.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-200 text-lg font-semibold shadow-lg"
                    >
                      Start Your Membership
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600">
              Real nonprofits achieving real results with our network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Community Food Network</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Our volunteer management system was completely outdated. Through Maxis, we found a local developer 
                who not only built us a new system but also trained our staff and provided ongoing support."
              </p>
              <div className="text-sm text-slate-600">
                <strong>Result:</strong> 200% increase in volunteer coordination efficiency, $8K saved vs. traditional agencies
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Youth Development Center</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "We needed a complete IT overhaul but had a tight budget. Our Maxis professional provided 
                refurbished equipment, set up our network, and created a maintenance plan that works with our resources."
              </p>
              <div className="text-sm text-slate-600">
                <strong>Result:</strong> Full IT infrastructure for 60% less than quoted elsewhere, ongoing local support
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Senior Services Association</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "After a ransomware scare, we knew we needed better cybersecurity. Our Maxis contact provided training, 
                implemented security measures, and now provides ongoing monitoring that gives us peace of mind."
              </p>
              <div className="text-sm text-slate-600">
                <strong>Result:</strong> Zero security incidents in 18 months, staff confidence in digital tools increased
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Arts Education Collective</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "We wanted to reach more families online but didn't know where to start. Our Maxis professional 
                redesigned our website, set up social media, and taught us to manage it all ourselves."
              </p>
              <div className="text-sm text-slate-600">
                <strong>Result:</strong> 300% increase in program registrations, sustainable digital marketing strategy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Amplify Your Mission?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join hundreds of nonprofits who are already leveraging our verified local tech talent 
            to achieve their goals more effectively and affordably.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://hub.maxsys.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 text-white px-8 py-4 rounded-lg hover:bg-rose-600 transition-colors text-lg font-semibold flex items-center justify-center space-x-2"
            >
              <span>Post Your First Project</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            <Link 
              to="/contact"
              className="bg-white text-slate-800 px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors text-lg font-semibold"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForNonprofits;