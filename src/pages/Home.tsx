import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, Droplet, Bug, Users, Award } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80"
            alt="Agriculture background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Indian Agriculture Through Expert Consultation
            </h1>
            <p className="text-xl mb-8">
              Empowering farmers with scientific knowledge and sustainable practices for better yields
            </p>
            <CTAButton
              text="Get Free Consultation"
              onClick={() => navigate('/contact')}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expert Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sprout className="h-8 w-8" />,
                title: "Crop Management",
                description: "Scientific approach to maximize your crop yield"
              },
              {
                icon: <Droplet className="h-8 w-8" />,
                title: "Water Management",
                description: "Efficient irrigation solutions for water conservation"
              },
              {
                icon: <Bug className="h-8 w-8" />,
                title: "Pest Control",
                description: "Integrated pest management for crop protection"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-green-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Farmers Helped" },
              { number: "95%", label: "Success Rate" },
              { number: "20+", label: "Expert Scientists" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-yellow-500 mr-2" />
                  <span className="text-green-800 font-semibold">Featured Success Story</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  300% Yield Increase in Cotton Farming
                </h3>
                <p className="text-gray-600 mb-6">
                  Learn how we helped farmers in Maharashtra achieve record-breaking cotton yields
                  through sustainable farming practices and expert guidance.
                </p>
                <CTAButton
                  text="Read More Stories"
                  onClick={() => navigate('/success-stories')}
                  className="self-start"
                />
              </div>
              <div className="h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1595338156806-0a0c4e841acb?auto=format&fit=crop&q=80"
                  alt="Cotton field"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-600">
              Our agricultural scientists and experts are here to help you succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                role: "Chief Agronomist",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
              },
              {
                name: "Dr. Priya Singh",
                role: "Soil Scientist",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
              },
              {
                name: "Dr. Amit Patel",
                role: "Plant Pathologist",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-green-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <CTAButton
              text="Meet the Full Team"
              onClick={() => navigate('/team')}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8">
            Get expert consultation and start your journey towards sustainable farming
          </p>
          <CTAButton
            text="Schedule Consultation"
            onClick={() => navigate('/contact')}
            className="bg-white text-green-800 hover:bg-gray-100"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;