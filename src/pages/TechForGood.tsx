import React from 'react';
import { Recycle, Shield, GraduationCap, Users, Laptop, BookOpen, Award, Heart } from 'lucide-react';

const TechForGood = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Tech for Good
          </h1>
          <p className="text-xl text-emerald-600 font-semibold mb-8">
            Sustainable technology. Secure communities. Empowered futures.
          </p>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            We're building a more sustainable and secure digital future through device refurbishment, 
            cybersecurity education, and comprehensive tech stewardship programs that start at the school level.
          </p>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Impact Programs</h2>
            <p className="text-xl text-slate-600">
              Comprehensive initiatives addressing technology's role in community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Device Recycling & Refurbishment */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <Recycle className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Device Refurbishment</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                We rescue, refurbish, and redistribute technology to extend device lifecycles and reduce e-waste 
                while providing affordable computing access to underserved communities.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Corporate device collection programs</li>
                <li>• Professional refurbishment services</li>
                <li>• Redistribution to schools and nonprofits</li>
                <li>• Environmental impact tracking</li>
              </ul>
            </div>

            {/* Cybersecurity Training */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Cybersecurity Education</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Protecting communities through comprehensive cybersecurity awareness, training programs, 
                and incident response support tailored for nonprofits and community organizations.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Community security workshops</li>
                <li>• Nonprofit vulnerability assessments</li>
                <li>• Incident response planning</li>
                <li>• Security awareness campaigns</li>
              </ul>
            </div>

            {/* School-Level Programs */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <GraduationCap className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">School Tech Stewardship</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Building the next generation of responsible technologists through hands-on programs that 
                teach device maintenance, cybersecurity awareness, and community service.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Student tech support teams</li>
                <li>• Device maintenance workshops</li>
                <li>• Cybersecurity youth programs</li>
                <li>• Community service projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Real Impact Stories</h2>
            <p className="text-xl text-slate-600">
              See how our programs are transforming communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Laptop className="h-8 w-8 text-emerald-600" />
                <h3 className="text-xl font-bold text-slate-800">Lincoln Elementary's Tech Lab</h3>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Thanks to Maxis's refurbishment program, our students now have access to 30 working computers. 
                The high school volunteers who helped set them up also taught our kids basic maintenance skills."
              </p>
              <div className="text-sm text-slate-600">
                <strong>Impact:</strong> 200+ students gained computer access, 15 high schoolers trained as tech mentors
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-800">Riverside Senior Center Security</h3>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "After the cybersecurity workshop, our staff feels confident about online safety. We've implemented 
                all the recommended practices and haven't had a single security incident since."
              </p>
              <div className="text-sm text-slate-600">
                <strong>Impact:</strong> 50+ seniors trained, 100% reduction in phishing incidents
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-8 w-8 text-purple-600" />
                <h3 className="text-xl font-bold text-slate-800">Community Food Bank Network</h3>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Our outdated inventory system was replaced with refurbished tablets and cloud software. 
                We can now track donations in real-time and coordinate better with partner organizations."
              </p>
              <div className="text-sm text-slate-600">
                <strong>Impact:</strong> 300% improvement in inventory accuracy, 5 food banks connected
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-slate-800">Jefferson High Tech Stewards</h3>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Our students are now fixing devices for local nonprofits as part of their service learning. 
                They've saved organizations thousands in repair costs while gaining valuable skills."
              </p>
              <div className="text-sm text-slate-600">
                <strong>Impact:</strong> 25 student stewards trained, 200+ devices repaired, $15K saved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Environmental Stewardship</h2>
            <p className="text-xl opacity-90">
              Every device we save makes a difference for our planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-lg opacity-90">Devices Refurbished</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15 Tons</div>
              <div className="text-lg opacity-90">E-Waste Diverted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50,000 lbs</div>
              <div className="text-lg opacity-90">CO2 Emissions Avoided</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$180K</div>
              <div className="text-lg opacity-90">Value Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Get Involved</h2>
            <p className="text-xl text-slate-600">
              Multiple ways to support sustainable technology in your community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all">
              <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Volunteer</h3>
              <p className="text-slate-600 mb-6">
                Join our refurbishment workshops, teach cybersecurity, or mentor student tech stewards.
              </p>
              <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
                Sign Up to Volunteer
              </button>
            </div>

            <div className="text-center p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <Laptop className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Donate Devices</h3>
              <p className="text-slate-600 mb-6">
                Corporate device donations help us provide technology access to those who need it most.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                Schedule Pickup
              </button>
            </div>

            <div className="text-center p-8 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-4">Partner School</h3>
              <p className="text-slate-600 mb-6">
                Bring tech stewardship programs to your school and empower students to serve their community.
              </p>
              <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold">
                Start a Program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make Technology Sustainable?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our mission to ensure technology serves everyone while protecting our planet for future generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 text-lg font-semibold shadow-lg">
              Join Our Programs
            </button>
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-lg hover:from-orange-500 hover:to-pink-600 transition-all duration-200 text-lg font-semibold shadow-lg">
              Support Our Mission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechForGood;