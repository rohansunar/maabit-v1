import Image from 'next/image';
import { FaChartLine, FaRobot, FaCode, FaDatabase, FaCloud, FaShieldAlt } from 'react-icons/fa';
import { HiArrowRight, HiCheck } from 'react-icons/hi';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const services = [
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our advanced analytics solutions.",
    icon: <FaChartLine className="w-6 h-6" />,
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Custom reporting dashboards",
      "Data-driven decision making"
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage the power of AI to automate processes and gain competitive advantage.",
    icon: <FaRobot className="w-6 h-6" />,
    features: [
      "Custom AI solutions",
      "Machine learning models",
      "Natural language processing",
      "Computer vision applications"
    ]
  },
  {
    title: "Software Development",
    description: "Build scalable and robust software solutions tailored to your business needs.",
    icon: <FaCode className="w-6 h-6" />,
    features: [
      "Custom software development",
      "Web & mobile applications",
      "API development",
      "Legacy system modernization"
    ]
  },
  {
    title: "Data Engineering",
    description: "Design and implement efficient data pipelines for seamless data flow.",
    icon: <FaDatabase className="w-6 h-6" />,
    features: [
      "ETL pipeline development",
      "Data warehousing",
      "Big data processing",
      "Data quality management"
    ]
  },
  {
    title: "Cloud Solutions",
    description: "Migrate and optimize your infrastructure in the cloud for better scalability.",
    icon: <FaCloud className="w-6 h-6" />,
    features: [
      "Cloud migration",
      "Serverless architecture",
      "Cloud cost optimization",
      "Multi-cloud management"
    ]
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions.",
    icon: <FaShieldAlt className="w-6 h-6" />,
    features: [
      "Security assessment",
      "Threat detection",
      "Compliance management",
      "Security monitoring"
    ]
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Expert Team Members" },
  { number: "24/7", label: "Support Available" }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            alt="Services Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-gray-900">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-delay text-gray-600">
            Empowering businesses with cutting-edge technology solutions
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 p-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0066FF] to-[#00B8FF]">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a wide range of technology services to help your business thrive in the digital age.
            Our expert team is ready to deliver innovative solutions tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-500/50 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="service-icon group-hover:bg-blue-50 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mt-4 group-hover:text-[#0066FF] transition-colors duration-300 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <ul className="feature-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item group-hover:translate-x-1 transition-transform duration-300 text-gray-600">
                      <HiCheck className="feature-check group-hover:text-[#0066FF]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#00B8FF] text-white font-semibold rounded-full hover:from-[#0052CC] hover:to-[#0099FF] transition-all duration-300 transform hover:scale-105 group shadow-lg shadow-blue-500/20">
                  Learn More
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
} 