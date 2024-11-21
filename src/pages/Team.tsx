import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, BookOpen, Users } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Team = () => {
  const navigate = useNavigate();

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Agronomist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
      education: "Ph.D. in Agricultural Sciences",
      experience: "20+ years in crop optimization",
      specialization: "Sustainable Farming Practices"
    },
    {
      name: "Dr. Priya Singh",
      role: "Soil Scientist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      education: "Ph.D. in Soil Sciences",
      experience: "15+ years in soil health management",
      specialization: "Soil Fertility & Conservation"
    },
    {
      name: "Dr. Amit Patel",
      role: "Plant Pathologist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      education: "Ph.D. in Plant Pathology",
      experience: "12+ years in disease management",
      specialization: "Integrated Pest Management"
    },
    {
      name: "Dr. Meera Reddy",
      role: "Water Management Expert",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80",
      education: "Ph.D. in Irrigation Science",
      experience: "18+ years in water conservation",
      specialization: "Smart Irrigation Systems"
    },
    {
      name: "Dr. Suresh Verma",
      role: "Organic Farming Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      education: "Ph.D. in Organic Agriculture",
      experience: "16+ years in organic farming",
      specialization: "Organic Certification & Practices"
    },
    {
      name: "Dr. Anjali Shah",
      role: "Climate Change Advisor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      education: "Ph.D. in Agricultural Meteorology",
      experience: "14+ years in climate-smart agriculture",
      specialization: "Climate Adaptation Strategies"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Team meeting"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Expert Team
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Leading agricultural scientists and experts dedicated to transforming Indian farming
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
                stat: "20+",
                label: "Expert Scientists"
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                stat: "150+",
                label: "Research Papers"
              },
              {
                icon: <Award className="h-8 w-8" />,
                stat: "45+",
                label: "Industry Awards"
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

      {/* Team Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                  <div className="space-y-2 text-gray-600">
                    <p>{member.education}</p>
                    <p>{member.experience}</p>
                    <p>Specialization: {member.specialization}</p>
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
          <h2 className="text-3xl font-bold mb-4">Work with Our Experts</h2>
          <p className="text-xl mb-8">
            Get personalized consultation from India's leading agricultural scientists
          </p>
          <CTAButton
            text="Schedule a Consultation"
            onClick={() => navigate('/contact')}
            className="bg-white text-green-800 hover:bg-gray-100"
          />
        </div>
      </section>
    </div>
  );
};

export default Team;