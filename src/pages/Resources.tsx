import React from 'react';
import { BookOpen, Calendar, Users, Download, ExternalLink, Shield, Laptop, GraduationCap } from 'lucide-react';

const Resources = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Community Resources
          </h1>
          <p className="text-xl text-blue-600 font-semibold mb-8">
            Free tools, training, and resources for digital inclusion
          </p>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            Access our growing library of resources designed to empower communities, build tech skills, 
            and support digital equity initiatives across all sectors.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Guides & Toolkits</h3>
              <p className="text-slate-600">
                Step-by-step resources for implementing tech programs and digital inclusion initiatives.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all">
              <GraduationCap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Training Materials</h3>
              <p className="text-slate-600">
                Curriculum, presentations, and hands-on learning resources for all skill levels.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Security Resources</h3>
              <p className="text-slate-600">
                Cybersecurity checklists, best practices, and incident response templates.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all">
              <Laptop className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Tech Maintenance</h3>
              <p className="text-slate-600">
                Device care guides, troubleshooting resources, and refurbishment protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Featured Resources</h2>
            <p className="text-xl text-slate-600">
              Our most popular and impactful community resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Inclusion Toolkit */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Digital Inclusion Toolkit</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Comprehensive guide for nonprofits and community organizations to assess digital needs, 
                develop programs, and measure impact.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-emerald-600 font-semibold">FREE DOWNLOAD</span>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

            {/* Cybersecurity Essentials */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Nonprofit Cybersecurity Essentials</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Easy-to-implement security practices, staff training materials, and incident response 
                templates designed specifically for nonprofit organizations.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-emerald-600 font-semibold">FREE DOWNLOAD</span>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                  <Download className="h-4 w-4" />
                  <span>Download Kit</span>
                </button>
              </div>
            </div>

            {/* Device Refurbishment Guide */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Laptop className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Community Refurbishment Guide</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Step-by-step instructions for setting up device refurbishment programs, including 
                safety protocols, software installation, and quality assurance.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-emerald-600 font-semibold">FREE DOWNLOAD</span>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                  <Download className="h-4 w-4" />
                  <span>Download Guide</span>
                </button>
              </div>
            </div>

            {/* School Tech Stewardship */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">School Tech Stewardship Curriculum</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Complete curriculum for implementing student-led tech support programs, including 
                lesson plans, assessment tools, and community service project ideas.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-emerald-600 font-semibold">FREE DOWNLOAD</span>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                  <Download className="h-4 w-4" />
                  <span>Download Curriculum</span>
                </button>
              </div>
            </div>

            {/* Grant Writing Templates */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Digital Equity Grant Templates</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Proven grant proposal templates, budget worksheets, and evaluation frameworks 
                for securing funding for digital inclusion initiatives.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-emerald-600 font-semibold">FREE DOWNLOAD</span>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                  <Download className="h-4 w-4" />
                  <span>Download Templates</span>
                </button>
              </div>
            </div>

            {/* Community Assessment Tool */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Digital Needs Assessment Tool</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Survey templates, data collection guides, and analysis frameworks to understand 
                your community's digital access and skills gaps.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-emerald-600 font-semibold">FREE DOWNLOAD</span>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                  <Download className="h-4 w-4" />
                  <span>Download Tool</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Upcoming Training & Events</h2>
            <p className="text-xl text-slate-600">
              Join our community for free training sessions and networking events
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <span className="text-blue-600 font-semibold">March 15, 2025 • 2:00 PM EST</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Cybersecurity for Small Nonprofits</h3>
                  <p className="text-slate-700">
                    Learn essential security practices, implement free tools, and create incident response plans.
                  </p>
                </div>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold whitespace-nowrap">
                  Register Free
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="h-6 w-6 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">March 22, 2025 • 11:00 AM EST</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Device Refurbishment Workshop</h3>
                  <p className="text-slate-700">
                    Hands-on training for volunteers interested in our community refurbishment programs.
                  </p>
                </div>
                <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold whitespace-nowrap">
                  Register Free
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="h-6 w-6 text-purple-600" />
                    <span className="text-purple-600 font-semibold">April 5, 2025 • 1:00 PM EST</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Grant Writing for Tech Programs</h3>
                  <p className="text-slate-700">
                    Master the art of securing funding for digital inclusion and technology access initiatives.
                  </p>
                </div>
                <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold whitespace-nowrap">
                  Register Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community News */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Community News & Updates</h2>
            <p className="text-xl text-slate-600">
              Stay informed about our latest initiatives and community impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-sm text-emerald-600 font-semibold mb-2">SUCCESS STORY</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">200 Devices Delivered to Rural Schools</h3>
              <p className="text-slate-600 mb-4">
                Our latest refurbishment drive brought working computers to five rural schools, 
                directly impacting over 800 students.
              </p>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                <span>Read Full Story</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </article>

            <article className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-sm text-blue-600 font-semibold mb-2">PROGRAM UPDATE</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">New Cybersecurity Curriculum Launch</h3>
              <p className="text-slate-600 mb-4">
                We've developed age-appropriate cybersecurity training materials for K-12 students, 
                now available in our resource library.
              </p>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                <span>Learn More</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </article>

            <article className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-sm text-purple-600 font-semibold mb-2">PARTNERSHIP</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Tech Hub Network Expansion</h3>
              <p className="text-slate-600 mb-4">
                We're partnering with 10 new tech hubs across the region to expand our 
                verified professional network and local impact.
              </p>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                <span>View Details</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest resources, training announcements, and community updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm opacity-75 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;