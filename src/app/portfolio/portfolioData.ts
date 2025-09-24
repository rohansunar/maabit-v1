//Centralized data for all services

export type PortfolioItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
  client: string;
  date: string;
  technologies: string[];
  media: MediaItem[];
  features: FeatureItem[];
  stats: StatItem[];
  heroImage: string;
  metaDescription: string;
};

export type MediaItem = {
  type: "image" | "video" | "youtube";
  src: string;
  alt?: string;
  poster?: string;
};

export type FeatureItem = {
  icon: string;
  title: string;
  desc: string;
  gradient: string;
};

export type StatItem = {
  number: string;
  label: string;
  desc: string;
};

export const portfolioData: { [key: string]: PortfolioItem } = {
  "ecommerce-platform": {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A complete e-commerce solution with advanced product filtering, secure payment integration, and inventory management system designed to help businesses scale online.",
    category: "Web Application",
    client: "Retail Startup",
    date: "Aug 2025",
    technologies: ["Next.js", "Node.js", "Stripe", "MongoDB", "TypeScript", "Tailwind CSS"],
    heroImage: "/images/cropped-Screenshot 2025-09-20 at 6.03.15 PM.png",
    metaDescription:
      "Complete e-commerce solution with advanced features for online business growth",
    media: [
      { type: "image", src: "/images/ecommerce-dashboard.png", alt: "Dashboard" },
      { type: "image", src: "/images/ecommerce-checkout.jpg", alt: "Checkout" },
      { type: "youtube", src: "https://www.youtube.com/watch?v=zxzU2AQvlbI" },
    ],
    features: [
      {
        icon: "🔍",
        title: "Advanced Product Filtering",
        desc: "Smart filtering and search options to help customers find products quickly.",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        icon: "💳",
        title: "Secure Payments",
        desc: "Multiple payment gateway integrations for safe transactions.",
        gradient: "from-green-500 to-green-600",
      },
      {
        icon: "📦",
        title: "Inventory Management",
        desc: "Track stock levels and manage SKUs with automatic alerts.",
        gradient: "from-purple-500 to-purple-600",
      },
      {
        icon: "📈",
        title: "Scalable Architecture",
        desc: "Handles growing traffic and business expansion effortlessly.",
        gradient: "from-orange-500 to-orange-600",
      },
      {
        icon: "📊",
        title: "Analytics & Reports",
        desc: "Gain insights into sales, customers, and product performance.",
        gradient: "from-red-500 to-red-600",
      },
      {
        icon: "📱",
        title: "Mobile-First Design",
        desc: "Fully responsive design for seamless shopping on any device.",
        gradient: "from-indigo-500 to-indigo-600",
      },
    ],
    stats: [
      { number: "5k+", label: "Products Managed", desc: "Average inventory size" },
      { number: "100k+", label: "Monthly Users", desc: "Platform performance" },
      { number: "99.9%", label: "Uptime Guarantee", desc: "Reliability assured" },
    ],
  },
  "ai-customer-service-chatbot": {
    slug: "ai-customer-service-chatbot",
    title: "AI Customer Service Chatbot",
    description:
      "An intelligent AI-powered chatbot that provides 24/7 customer support, reduces response time, and improves customer satisfaction.",
    category: "AI Solution",
    client: "Service Industry",
    date: "Sep 2025",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "WebSocket", "MongoDB"],
    heroImage: "/images/ai-chatbot-hero.jpg",
    metaDescription:
      "AI-powered customer service chatbot for 24/7 support and improved customer experience",
    media: [
      { type: "image", src: "/images/ai-chatbot-dashboard.png", alt: "Chatbot Dashboard" },
      { type: "image", src: "/images/ai-chatbot-conversation.jpg", alt: "Conversation Example" },
      { type: "youtube", src: "https://www.youtube.com/watch?v=example-ai" },
    ],
    features: [
      {
        icon: "🤖",
        title: "Natural Language Processing",
        desc: "Understands and responds to customer queries in natural language.",
        gradient: "from-purple-500 to-purple-600",
      },
      {
        icon: "⏰",
        title: "24/7 Availability",
        desc: "Round-the-clock customer support without human intervention.",
        gradient: "from-green-500 to-green-600",
      },
      {
        icon: "📊",
        title: "Analytics Dashboard",
        desc: "Track performance, customer satisfaction, and common queries.",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        icon: "🔄",
        title: "Seamless Integration",
        desc: "Integrates with existing CRM and support systems.",
        gradient: "from-orange-500 to-orange-600",
      },
      {
        icon: "🎯",
        title: "Personalized Responses",
        desc: "Learns from interactions to provide tailored solutions.",
        gradient: "from-red-500 to-red-600",
      },
      {
        icon: "🌐",
        title: "Multi-language Support",
        desc: "Supports multiple languages for global customer base.",
        gradient: "from-indigo-500 to-indigo-600",
      },
    ],
    stats: [
      { number: "24/7", label: "Availability", desc: "Round the clock support" },
      { number: "60%", label: "Faster Response", desc: "Compared to human agents" },
      { number: "95%", label: "Accuracy", desc: "In query resolution" },
    ],
  },
  "real-estate-mobile-app": {
    slug: "real-estate-mobile-app",
    title: "Real Estate Mobile App",
    description:
      "A comprehensive mobile application for property search, virtual tours, and seamless communication between buyers and agents.",
    category: "Mobile Application",
    client: "Real Estate Agency",
    date: "Jul 2025",
    technologies: ["React Native", "Firebase", "Google Maps API", "Node.js", "MongoDB"],
    heroImage: "/images/real-estate-hero.jpg",
    metaDescription: "Mobile app for property search, virtual tours, and real estate transactions",
    media: [
      { type: "image", src: "/images/real-estate-home.jpg", alt: "App Home Screen" },
      { type: "image", src: "/images/real-estate-property.jpg", alt: "Property Details" },
      { type: "youtube", src: "https://www.youtube.com/watch?v=example-real-estate" },
    ],
    features: [
      {
        icon: "🏠",
        title: "Property Search",
        desc: "Advanced filters for location, price, amenities, and more.",
        gradient: "from-blue-500 to-blue-600",
      },
      {
        icon: "📱",
        title: "Virtual Tours",
        desc: "360° virtual property tours from your mobile device.",
        gradient: "from-green-500 to-green-600",
      },
      {
        icon: "📍",
        title: "Location Intelligence",
        desc: "Interactive maps with neighborhood insights and amenities.",
        gradient: "from-purple-500 to-purple-600",
      },
      {
        icon: "💬",
        title: "Agent Communication",
        desc: "Direct messaging and appointment scheduling with agents.",
        gradient: "from-orange-500 to-orange-600",
      },
      {
        icon: "📊",
        title: "Market Analytics",
        desc: "Real-time market trends and property valuation tools.",
        gradient: "from-red-500 to-red-600",
      },
      {
        icon: "🔔",
        title: "Smart Notifications",
        desc: "Instant alerts for new listings and price changes.",
        gradient: "from-indigo-500 to-indigo-600",
      },
    ],
    stats: [
      { number: "50k+", label: "Properties", desc: "Active listings in database" },
      { number: "10k+", label: "Active Users", desc: "Monthly app users" },
      { number: "4.8★", label: "App Rating", desc: "User satisfaction score" },
    ],
  },
};

export function getPortfolioItem(slug: string): PortfolioItem | null {
  return portfolioData[slug] || null;
}

export function getAllPortfolioSlugs(): string[] {
  return Object.keys(portfolioData);
}
