import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Award, Users } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const SuccessStories = () => {
  const navigate = useNavigate();

  const stories = [
    {
      title: "300% Yield Increase in Cotton Farming",
      location: "Maharashtra",
      farmer: "Rajesh Patil",
      image: "https://images.unsplash.com/photo-1595338156806-0a0c4e841acb?auto=format&fit=crop&q=80",
      description: "Through advanced pest management and optimal irrigation techniques, we helped increase cotton yield by 300% while reducing water usage by 40%.",
      results: ["300% yield increase", "40% water savings", "Improved cotton quality", "Higher market value"]
    },
    {
      title: "Organic Rice Certification Success",
      location: "Punjab",
      farmer: "Gurpreet Singh",
      image: "https://images.unsplash.com/photo-1536617621572-1d5f1e6269a0?auto=format&fit=crop&q=80",
      description: "Supported the transition to organic rice farming, achieving certification and premium pricing in international markets.",
      results: ["Organic certification achieved", "50% premium pricing", "Soil health improved", "Sustainable practices"]
    },
    {
      title: "Water Conservation in Sugarcane",
      location: "Uttar Pradesh",
      farmer: "Amit Kumar",
      image: "https://images.unsplash.com/photo-1591086559154-a34d8ea15078?auto=format&fit=crop&q=80",
      description: "Implemented drip irrigation and moisture monitoring, resulting in 60% water savings while maintaining yield.",
      results: ["60% water savings", "Consistent yield", "Reduced costs", "Sustainable farming"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
            alt="Successful farming"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Real results from real farmers across India
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                stat: "10,000+",
                label: "Farmers Helped"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                stat: "95%",
                label: "Success Rate"
              },
              {
                icon: <Award className="h-8 w-8" />,
                stat: "150+",
                label: "District Awards"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-green-600 flex justify-center mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <Award className="h-6 w-6 text-yellow-500 mr-2" />
                      <span className="text-green-800 font-semibold">{story.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{story.title}</h3>
                    <p className="text-gray-600 mb-4">Farmer: {story.farmer}</p>
                    <p className="text-gray-600 mb-6">{story.description}</p>
                    <div className="space-y-2">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want Similar Results?</h2>
          <p className="text-xl mb-8">
            Let our experts help you achieve your farming goals
          </p>
          <CTAButton
            text="Get Started Today"
            onClick={() => navigate('/contact')}
            className="bg-white text-green-800 hover:bg-gray-100"
          />
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;