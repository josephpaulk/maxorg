import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building, GraduationCap, Heart, CheckCircle, ExternalLink, Handshake, Award } from 'lucide-react';

const PartnerWithUs = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Partner With Us
          </h1>
          <p className="text-xl text-indigo-600 font-semibold mb-8">
            Amplify your impact through strategic partnerships
          </p>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto mb-8">
            Join our ecosystem of tech hubs, recruiting agencies, corporate sponsors, and educational institutions 
            working together to bridge the digital divide and create sustainable community impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://hrm.maxsys.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>Access Partner Portal</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            <Link 
              to="/contact"
              className="bg-white text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all duration-200 text-lg font-semibold border border-slate-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discuss Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-slate-600">
              Multiple ways to collaborate and create community impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tech Hubs */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
              <Building className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Tech Hubs & Coworking Spaces</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Partner with us to provide your members with meaningful project opportunities while 
                supporting local nonprofits and community organizations.
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Member engagement opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Community impact initiatives</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Local verification support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Co-branded events and workshops</span>
                </li>
              </ul>
              <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                Become a Hub Partner
              </button>
            </div>

            {/* Recruiting Agencies */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100">
              <Users className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Recruiting Agencies</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Expand your talent pipeline and offer candidates meaningful volunteer opportunities 
                that build skills and demonstrate community commitment.
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Access to verified talent network</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Candidate skill development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Portfolio building opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Community impact metrics</span>
                </li>
              </ul>
              <button className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
                Partner as Recruiter
              </button>
            </div>

            {/* Educational Institutions */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <GraduationCap className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Educational Institutions</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Integrate real-world community service into your curriculum while providing students 
                with hands-on experience and professional networking opportunities.
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Service learning integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Student portfolio development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Community partnership building</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Tech stewardship programs</span>
                </li>
              </ul>
              <button className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold">
                Partner as Institution
              </button>
            </div>

            {/* Corporate Sponsors */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
              <Award className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Corporate Sponsors</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Demonstrate corporate social responsibility while supporting digital inclusion initiatives 
                and building relationships with local nonprofit communities.
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Employee volunteer opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Device donation programs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Community impact reporting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Brand alignment with social good</span>
                </li>
              </ul>
              <button className="w-full bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-semibold">
                Explore Sponsorship
              </button>
            </div>

            {/* Government & Foundations */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100">
              <Handshake className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Government & Foundations</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Leverage our network and infrastructure to amplify the impact of your digital inclusion 
                and workforce development initiatives.
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Grant program implementation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Community needs assessment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Impact measurement and reporting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Scalable program models</span>
                </li>
              </ul>
              <button className="w-full bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors font-semibold">
                Discuss Collaboration
              </button>
            </div>

            {/* Community Organizations */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl border border-rose-100">
              <Heart className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Community Organizations</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Join our network to access tech support, share resources, and collaborate on 
                community-wide digital inclusion initiatives.
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Shared resource access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Collaborative project opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Cross-referral network</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Community advocacy support</span>
                </li>
              </ul>
              <button className="w-full bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors font-semibold">
                Join Community Network
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Partner With Maxis?</h2>
            <p className="text-xl text-slate-600">
              Shared values, measurable impact, and sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Verified Network Quality</h3>
              <p className="text-slate-700 leading-relaxed">
                Our local identity verification process ensures that all partners work with trusted, 
                accountable professionals who are committed to community impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Measurable Impact</h3>
              <p className="text-slate-700 leading-relaxed">
                Track and report on your community impact with our comprehensive metrics system, 
                perfect for grant reporting and stakeholder communication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Sustainable Model</h3>
              <p className="text-slate-700 leading-relaxed">
                Our community membership model ensures long-term sustainability while keeping costs 
                accessible for organizations that need support most.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Local Focus</h3>
              <p className="text-slate-700 leading-relaxed">
                Build genuine community connections through local partnerships that create lasting 
                relationships and ongoing collaboration opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Comprehensive Support</h3>
              <p className="text-slate-700 leading-relaxed">
                From initial partnership setup to ongoing program management, our team provides 
                the support you need to maximize your community impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Shared Resources</h3>
              <p className="text-slate-700 leading-relaxed">
                Access our library of resources, training materials, and best practices developed 
                specifically for digital inclusion and community technology initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Growing Network</h2>
            <p className="text-xl text-slate-600">
              Proud to work with organizations that share our commitment to digital inclusion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
              <div className="text-lg text-slate-700">Tech Hub Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-lg text-slate-700">Educational Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-lg text-slate-700">Corporate Sponsors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">50+</div>
              <div className="text-lg text-slate-700">Community Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Partnership Process</h2>
            <p className="text-xl text-slate-600">
              Simple steps to start making a difference together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Initial Discussion</h3>
              <p className="text-slate-600">
                Schedule a consultation to discuss your goals and explore partnership opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Partnership Design</h3>
              <p className="text-slate-600">
                Work together to design a partnership model that aligns with your mission and resources.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Implementation</h3>
              <p className="text-slate-600">
                Launch your partnership with full support from our team and access to all resources.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Ongoing Success</h3>
              <p className="text-slate-600">
                Regular check-ins, impact reporting, and continuous optimization of your partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner for Impact?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our growing network of organizations committed to bridging the digital divide 
            and creating sustainable community impact through technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://hrm.maxsys.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors text-lg font-semibold flex items-center justify-center space-x-2"
            >
              <span>Access Partner Portal</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors text-lg font-semibold"
            >
              Schedule Partnership Discussion
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerWithUs;