import React from "react";

const projects = [
  {
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "E-Commerce Platform",
    description: "A complete e-commerce solution with advanced product filtering, payment gateway integration, and inventory management.",
    tag: { label: "Revenue Increase", value: "150%" },
    link: "#",
  },
  {
    category: "AI Solutions",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
    title: "AI Customer Service Chatbot",
    description: "An intelligent chatbot powered by natural language processing to handle customer inquiries and support requests.",
    tag: { label: "Support Cost Reduction", value: "70%" },
    link: "#",
  },
  {
    category: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1612299065617-f883adb67bd1",
    title: "Real Estate Mobile App",
    description: "A feature-rich mobile application for property listings, virtual tours, and real-time messaging between agents and clients.",
    tag: { label: "User Engagement", value: "35%" },
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-[#f5fafb] py-24 px-4 md:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-2 text-sm font-bold text-maabit-blue tracking-widest uppercase">Our Portfolio</div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Success <span className="text-maabit-blue">Stories</span> <span className="text-blue-700">That</span> Drive Results
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Explore our recent projects that showcase our expertise, innovation, and the measurable impact we've delivered for our clients.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden text-left hover:shadow-xl transition-shadow duration-300 relative">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="object-cover w-full h-full" />
                <span className="absolute top-3 left-3 bg-gray-900/80 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">{p.category}</span>
                <span className="absolute top-3 right-3 bg-maabit-blue/90 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">{p.tag.label} <span className="font-bold ml-1">{p.tag.value}</span></span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{p.title}</h3>
                <p className="text-gray-500 mb-4 text-sm">{p.description}</p>
                <a href={p.link} className="text-maabit-blue font-semibold text-sm hover:underline">View case study &rarr;</a>
              </div>
            </div>
          ))}
        </div>
        {/* <button className="mt-2 px-8 py-3 bg-white border border-gray-300 rounded-xl font-semibold text-gray-900 hover:bg-gray-100 transition">View All Case Studies &rarr;</button> */}
      </div>
    </section>
  );
} 