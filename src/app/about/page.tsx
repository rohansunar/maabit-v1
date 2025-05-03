'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLightbulb, FaHandshake, FaRocket, FaChartLine } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

const teamMembers = [
  {
    name: 'Dipuraj Thapa',
    role: 'Founder & CEO',
    bio: 'With over 10 years of experience in software development and digital transformation, Dipuraj founded Maabit with a vision to help businesses leverage technology for growth.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Rohan Sonar',
    role: 'CTO',
    bio: 'Sarah leads our technical strategy and ensures we stay at the cutting edge of technology. Her background in AI and cloud architecture drives our innovation.',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Raghva Chen',
    role: 'Lead Developer',
    bio: 'Michael specializes in full-stack development and has led numerous successful projects for enterprise clients across various industries.',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
  {
    name: 'Shini Sharma',
    role: 'UX/UI Design Lead',
    bio: 'Priya combines aesthetics with functionality to create intuitive user experiences that delight users while meeting business objectives.',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.',
    icon: <FaLightbulb className="w-8 h-8 text-maabit-blue" />,
  },
  {
    title: 'Integrity',
    description: 'We build relationships based on trust, transparency, and ethical business practices.',
    icon: <FaHandshake className="w-8 h-8 text-maabit-blue" />,
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to client communication.',
    icon: <FaRocket className="w-8 h-8 text-maabit-blue" />,
  },
  {
    title: 'Results-Driven',
    description: 'We focus on delivering measurable results that drive business growth for our clients.',
    icon: <FaChartLine className="w-8 h-8 text-maabit-blue" />,
  },
];

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Maabit was established with a mission to provide innovative software solutions.',
  },
  {
    year: '2021',
    title: 'First Major Client',
    description: 'Secured our first enterprise client and delivered a transformative digital solution.',
  },
  {
    year: '2022',
    title: 'Team Expansion',
    description: 'Grew our team to 10+ experts across development, design, and project management.',
  },
  {
    year: '2023',
    title: 'International Reach',
    description: 'Expanded our services to international clients across North America, Europe, and Asia.',
  },
  {
    year: '2024',
    title: 'Innovation Lab',
    description: 'Launched our innovation lab focused on AI, blockchain, and emerging technologies.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120] to-[#1a237e] opacity-90" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            alt="Team collaboration"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About <span className="text-maabit-blue">Maabit</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8">
            We're a team of passionate technologists dedicated to transforming digital visions into reality.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-40 text-center">
              <div className="text-4xl font-bold text-maabit-blue mb-2">5+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-40 text-center">
              <div className="text-4xl font-bold text-maabit-blue mb-2">100+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-40 text-center">
              <div className="text-4xl font-bold text-maabit-blue mb-2">50+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-40 text-center">
              <div className="text-4xl font-bold text-maabit-blue mb-2">20+</div>
              <div className="text-sm text-gray-300">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2020, Maabit began with a simple mission: to help businesses leverage technology to achieve their goals. Our founder, Dipuraj Thapa, recognized that many companies struggled to navigate the rapidly evolving digital landscape and needed a partner who could provide both technical expertise and strategic guidance.
              </p>
              <p className="text-gray-700 mb-6">
                What started as a small team of passionate developers has grown into a full-service digital solutions agency with expertise across web development, mobile applications, custom software, AI solutions, and cloud infrastructure.
              </p>
              <p className="text-gray-700">
                Today, we're proud to have helped dozens of businesses across various industries transform their operations, enhance customer experiences, and drive growth through innovative technology solutions.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-maabit-blue rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-gray-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            At Maabit, our values guide everything we do - from how we develop software to how we interact with our clients and each other.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-blue-50 rounded-full">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            Our diverse team of experts brings together a wealth of experience and passion for technology.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-maabit-blue font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="#" className="inline-flex items-center gap-2 text-maabit-blue font-semibold hover:underline">
              View all team members
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0b1120] to-[#1a237e] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Journey</h2>
          <p className="text-gray-300 mb-16 max-w-3xl mx-auto text-center">
            From our humble beginnings to where we are today, our journey has been defined by growth, learning, and continuous improvement.
          </p>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-maabit-blue/30"></div>

            {/* Timeline items */}
            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-maabit-blue border-4 border-[#0b1120] z-10"></div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
                      <div className="text-maabit-blue font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Approach</h2>
              <p className="text-gray-700 mb-6">
                At Maabit, we believe in a collaborative, transparent approach to software development. We don't just build what you ask for - we partner with you to understand your business goals and challenges, then design solutions that address the root causes, not just the symptoms.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-maabit-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Discovery & Strategy</h3>
                    <p className="text-gray-600">We begin by deeply understanding your business, users, and goals before proposing solutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-maabit-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Agile Development</h3>
                    <p className="text-gray-600">We work in short, iterative cycles to deliver value quickly and adapt to changing requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-maabit-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Quality Assurance</h3>
                    <p className="text-gray-600">Rigorous testing and quality checks are integrated throughout our development process.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-maabit-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Continuous Improvement</h3>
                    <p className="text-gray-600">We don't just launch and leave - we monitor, maintain, and continuously improve your solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop"
                  alt="Our approach to development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-maabit-blue rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gray-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}
