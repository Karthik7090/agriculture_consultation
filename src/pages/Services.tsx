import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, Droplet, Bug, Leaf, Sun, Beaker } from 'lucide-react'; // Icons from lucide-react
import CTAButton from '../components/CTAButton';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Sprout className="h-12 w-12 text-green-600" />,
      title: "Crop Management",
      description: "Comprehensive crop planning, monitoring, and optimization strategies to maximize yield and quality. Our experts provide tailored solutions for different crop varieties.",
      features: ["Crop Selection Guidance", "Growth Monitoring", "Yield Optimization", "Harvest Planning"],
    },
    {
      icon: <Droplet className="h-12 w-12 text-blue-600" />,
      title: "Water Management",
      description: "Smart irrigation solutions and water conservation techniques to ensure optimal water usage while maintaining crop health and sustainability.",
      features: ["Irrigation Planning", "Water Conservation", "Drainage Solutions", "Moisture Monitoring"],
    },
    {
      icon: <Bug className="h-12 w-12 text-red-600" />,
      title: "Pest Control",
      description: "Integrated pest management approaches combining traditional and modern techniques to protect crops while minimizing environmental impact.",
      features: ["Pest Identification", "Prevention Strategies", "Organic Solutions", "Disease Management"],
    },
    {
      icon: <Leaf className="h-12 w-12 text-green-500" />,
      title: "Organic Farming",
      description: "Expert guidance on organic farming practices, certification processes, and sustainable agriculture techniques for premium market access.",
      features: ["Organic Certification", "Natural Fertilizers", "Sustainable Practices", "Market Access"],
    },
    {
      icon: <Beaker className="h-12 w-12 text-purple-600" />,
      title: "Soil Testing",
      description: "Comprehensive soil analysis and improvement recommendations to ensure optimal growing conditions for your crops.",
      features: ["Nutrient Analysis", "pH Testing", "Soil Health Reports", "Enhancement Plans"],
    },
    {
      icon: <Sun className="h-12 w-12 text-yellow-500" />,
      title: "Climate-Smart Agriculture",
      description: "Advanced techniques and strategies to adapt farming practices to changing climate conditions and weather patterns.",
      features: ["Weather Monitoring", "Adaptation Strategies", "Risk Management", "Sustainable Methods"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1598887142484-b1a1b778470c?auto=format&fit=crop&q=80"
            alt="Farming services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover expert solutions to transform your farming journey.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                <div className="flex items-center justify-center p-6">
                  {service.icon}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <CTAButton
                    text="Learn More"
                    onClick={() => navigate(`/services/${service.title.toLowerCase().replace(/ /g, '-')}`)}
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert Assistance?</h2>
          <p className="text-xl mb-8">
            Let us help you achieve higher yields and sustainable farming.
          </p>
          <CTAButton
            text="Contact Us Today"
            onClick={() => navigate('/contact')}
            className="bg-white text-green-800 hover:bg-gray-100"
          />
        </div>
      </section>
    </div>
  );
};

export default Services;
