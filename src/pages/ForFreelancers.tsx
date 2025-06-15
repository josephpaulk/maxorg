import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, Heart, DollarSign, CheckCircle, ExternalLink, Award, MapPin } from 'lucide-react';

const ForFreelancers = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            For Tech Professionals
          </h1>
          <p className="text-xl text-emerald-600 font-semibold mb-8">
            Build a meaningful career while making a difference in your community
          </p>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto mb-8">
            Join a verified network of local tech professionals who are passionate about using their skills 
            to support nonprofits and community organizations. Because giving is beautiful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://hub.maxsys.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <Users className="h-5 w-5" />
              <span>Join Our Network</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <Link 
              to="/how-it-works"
              className="bg-white text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all duration-200 text-lg font-semibold border border-slate-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Maxis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Tech Professionals Choose Maxis</h2>
            <p className="text-xl text-slate-600">
              More than just another freelance platform—it's a community with purpose
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl">
              <Heart className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Meaningful Work</h3>
              <p className="text-slate-700 leading-relaxed">
                Every project you take on directly impacts your community. Help nonprofits extend their reach, 
                improve their operations, and achieve their mission-critical goals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Verified Network</h3>
              <p className="text-slate-700 leading-relaxed">
                Local identity verification builds trust and credibility. Clients know they're working 
                with legitimate, accountable professionals in their community.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <MapPin className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Local Focus</h3>
              <p className="text-slate-700 leading-relaxed">
                Build lasting relationships in your community. Offer on-site support when needed and 
                become a trusted technology partner for local organizations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <DollarSign className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Fair Compensation</h3>
              <p className="text-slate-700 leading-relaxed">
                Set your own rates and work terms. Many professionals choose to offer nonprofit discounts, 
                but you control your pricing and project selection.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl">
              <Users className="h-12 w-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Supportive Community</h3>
              <p className="text-slate-700 leading-relaxed">
                Connect with like-minded professionals who share your values. Collaborate, share resources, 
                and support each other's success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
              <Award className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Professional Growth</h3>
              <p className="text-slate-700 leading-relaxed">
                Build your reputation through community feedback, expand your skills working with diverse 
                organizations, and create a portfolio that makes a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Verification Process</h2>
            <p className="text-xl text-slate-600">
              Building trust through local identity verification and community standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Apply</h3>
              <p className="text-slate-600">
                Complete your professional profile and submit your application to join our network.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Verify</h3>
              <p className="text-slate-600">
                Complete local identity verification through our trusted community partners.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Review</h3>
              <p className="text-slate-600">
                Our community team reviews your skills and experience to ensure quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Start</h3>
              <p className="text-slate-600">
                Begin browsing projects, building relationships, and making a difference in your community.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Why Verification Matters</h3>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Local identity verification isn't just about security—it's about building genuine community connections. 
                When nonprofits know they're working with verified local professionals, they feel confident investing 
                in longer-term relationships and more complex projects.
              </p>
              <p className="text-slate-600">
                This trust translates into better projects, fair compensation, and the opportunity to become 
                a valued technology partner rather than just another contractor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills in Demand */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Skills in High Demand</h2>
            <p className="text-xl text-slate-600">
              Nonprofits need diverse tech expertise—there's a place for every skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Web Development</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>WordPress & CMS development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Responsive design & accessibility</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>E-commerce & donation platforms</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>SEO & performance optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Data & Analytics</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Database design & management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>CRM implementation & training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Reporting & visualization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Grant tracking & compliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Cybersecurity</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Security assessments & audits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Staff training & awareness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Incident response planning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Compliance documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">IT Support</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Network setup & maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Device procurement & setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Cloud migration & management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Backup & disaster recovery</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Digital Marketing</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Social media strategy & management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Email marketing campaigns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Content creation & strategy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Online fundraising optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Training & Education</h3>
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
                  <span>Curriculum development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span>Workshop facilitation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Professional Success Stories</h2>
            <p className="text-xl text-slate-600">
              Real professionals building meaningful careers through community impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Maria S., Full-Stack Developer</h3>
                <p className="text-emerald-600 font-semibold">2 years on Maxis • 15 completed projects</p>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "I was burned out from corporate work and looking for something more meaningful. Through Maxis, 
                I've built lasting relationships with three nonprofits who now consider me their go-to tech partner. 
                The work is challenging, the impact is real, and I've never been happier professionally."
              </p>
              <div className="text-sm text-slate-600">
                <strong>Specialties:</strong> Web development, database design, volunteer management systems
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">James T., Cybersecurity Consultant</h3>
                <p className="text-emerald-600 font-semibold">3 years on Maxis • 25+ organizations secured</p>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Nonprofits desperately need cybersecurity help but often can't afford enterprise solutions. 
                Through Maxis, I've developed affordable security packages specifically for smaller organizations. 
                It's rewarding work that's also built a sustainable practice for me."
              </p>
              <div className="text-sm text-slate-600">
                <strong>Specialties:</strong> Security assessments, staff training, incident response planning
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">David L., IT Support Specialist</h3>
                <p className="text-emerald-600 font-semibold">1 year on Maxis • 30+ support contracts</p>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "I started doing basic IT support for a local food bank and word spread quickly. Now I provide 
                ongoing support for a dozen nonprofits in my area. The verification process helped establish 
                trust immediately, and the community aspect means I'm never working in isolation."
              </p>
              <div className="text-sm text-slate-600">
                <strong>Specialties:</strong> Network maintenance, device setup, cloud migration, user training
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Sarah K., Digital Marketing Strategist</h3>
                <p className="text-emerald-600 font-semibold">18 months on Maxis • 20 campaigns launched</p>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Working with nonprofits has made me a better marketer. Their missions are so compelling, 
                and they're incredibly resourceful. I've learned to create high-impact campaigns on tight budgets, 
                skills that have made me more valuable across all my work."
              </p>
              <div className="text-sm text-slate-600">
                <strong>Specialties:</strong> Social media strategy, email marketing, content creation, fundraising campaigns
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Join our community of verified professionals who are making technology work for good
            </p>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Application Review</h4>
                  <p className="text-slate-600 text-sm">
                    We typically review applications within 3-5 business days and will guide you through 
                    the verification process.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Community Onboarding</h4>
                  <p className="text-slate-600 text-sm">
                    Once verified, you'll receive access to our platform, community resources, and 
                    best practices for nonprofit work.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Ongoing Support</h4>
                  <p className="text-slate-600 text-sm">
                    Our community team provides ongoing support, networking opportunities, and 
                    professional development resources.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://hub.maxsys.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 text-lg font-semibold shadow-lg flex items-center justify-center space-x-2"
              >
                <Users className="h-5 w-5" />
                <span>Apply to Join Network</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link 
                to="/contact"
                className="bg-white text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all duration-200 text-lg font-semibold border border-slate-200 shadow-lg"
              >
                Ask Questions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Your Skills Can Change Lives
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Every line of code, every system you secure, every problem you solve helps nonprofits 
            extend their reach and amplify their impact. Join us in building a more connected, 
            equitable digital future.
          </p>
          
          <div className="text-2xl font-bold mb-4">
            "The future belongs to those who share it."
          </div>
          
          <a 
            href="https://hub.maxsys.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors text-lg font-semibold shadow-lg"
          >
            Start Making a Difference Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default ForFreelancers;