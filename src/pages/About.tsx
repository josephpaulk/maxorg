import React from 'react';
import { Heart, Shield, Target, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Maxis International
            </h1>
            <p className="text-xl text-emerald-600 font-semibold mb-8">
              Veteran-founded. Community-driven. Impact-focused.
            </p>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              We're building a movement where technology serves humanity, where local expertise meets community needs, 
              and where every connection strengthens the fabric of digital inclusion.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                To bridge the digital divide by connecting verified local tech talent with nonprofits and community 
                organizations, ensuring that technology serves everyone, everywhere.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                We believe that "Giving is Beautiful" - and through our platform, we make it possible for 
                tech professionals to contribute their skills meaningfully while building sustainable careers 
                in community impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-8 rounded-2xl">
              <Target className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
              <p className="text-slate-700 leading-relaxed">
                A world where digital equity is not a privilege but a fundamental right, where local communities 
                are empowered with the tech support they need, and where technology truly leaves no one behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Community First</h3>
              <p className="text-slate-600 leading-relaxed">
                Every decision we make prioritizes community benefit over profit. We measure success by the 
                lives we touch and the barriers we remove.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Trust & Security</h3>
              <p className="text-slate-600 leading-relaxed">
                Through local verification and cybersecurity education, we build networks of trust that 
                protect and empower communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Globe className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Sustainability</h3>
              <p className="text-slate-600 leading-relaxed">
                We champion responsible technology use, from device refurbishment to sustainable practices 
                that protect our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Our Story</h2>
            
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="text-xl leading-relaxed mb-6">
                Maxis International was born from a simple observation: while technology advances at breakneck speed, 
                too many communities are left behind in the digital divide.
              </p>
              
              <p className="leading-relaxed mb-6">
                Founded by veterans who understood the power of service and community, we recognized that the solution 
                wasn't just about providing technology—it was about building sustainable networks of local expertise 
                and trust.
              </p>
              
              <p className="leading-relaxed mb-6">
                Today, our platform connects hundreds of verified tech professionals with nonprofits, schools, and 
                community organizations. We've facilitated thousands of hours of tech support, refurbished countless 
                devices, and trained community members in cybersecurity and digital literacy.
              </p>
              
              <p className="leading-relaxed">
                But we're just getting started. Every day, we're working toward a future where "Geeks with Hearts" 
                isn't just our motto—it's a movement that transforms how technology serves humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Making a Difference
            </h2>
            <p className="text-xl opacity-90">
              Our impact grows stronger every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Verified Tech Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Nonprofit Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-lg opacity-90">Hours of Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Communities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Whether you're a tech professional looking to make an impact, an organization needing support, 
            or someone who believes in our vision—there's a place for you in our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Join Our Community
            </button>
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-lg hover:from-orange-500 hover:to-pink-600 transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Support Our Mission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;