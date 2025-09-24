import { Metadata } from "next";
import Image from "next/image";
import MediaCarousel from "../../components/MediaCarousel";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getPortfolioItem, getAllPortfolioSlugs, PortfolioItem } from "../portfolioData";
import PortfolioForm from "../../components/PortfolioForm";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const portfolioItem = getPortfolioItem(params.slug);

  if (!portfolioItem) {
    return {
      title: "Portfolio Item Not Found",
      description: "The portfolio item you are looking for does not exist.",
    };
  }

  return {
    title: `${portfolioItem.title} | Portfolio`,
    description: portfolioItem.metaDescription,
    keywords: `${portfolioItem.title}, ${portfolioItem.category}, ${portfolioItem.technologies.join(
      ", "
    )}`,
    openGraph: {
      title: `${portfolioItem.title} | Portfolio`,
      description: portfolioItem.metaDescription,
      url: `/portfolio/${portfolioItem.slug}`,
      type: "website",
      images: [
        {
          url: portfolioItem.heroImage,
          width: 1200,
          height: 630,
          alt: portfolioItem.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${portfolioItem.title} | Portfolio`,
      description: portfolioItem.metaDescription,
      images: [portfolioItem.heroImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  return getAllPortfolioSlugs().map((slug) => ({
    slug: slug,
  }));
}

export default async function PortfolioPage({ params }: Props) {
  const portfolioItem = getPortfolioItem(params.slug);

  if (!portfolioItem) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Portfolio Item Not Found</h1>
          <p className="text-gray-600">The portfolio item you are looking for does not exist.</p>
          <a
            href="/portfolio"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Portfolio
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src={portfolioItem.heroImage}
          alt={portfolioItem.title}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <div className="max-w-2xl">
              {/* Badge */}
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
                Premium {portfolioItem.category} Solution
              </span>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                {portfolioItem.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                {portfolioItem.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-blue-200 text-sm mb-8">
                <span>Category: {portfolioItem.category}</span>
                <span>• Client: {portfolioItem.client}</span>
                <span>• Date: {portfolioItem.date}</span>
              </div>

              {/* Technologies Used */}
              <div>
                <h2 className="text-lg font-semibold mb-2 text-white">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {portfolioItem.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItem.stats.map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our {portfolioItem.category.toLowerCase()} provides all the tools and features
              necessary for optimal performance and user experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItem.features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide">Gallery</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              See Our {portfolioItem.category} in Action
            </h2>
          </div>
          <MediaCarousel media={portfolioItem.media} />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Built with Modern Technology
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {portfolioItem.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to ensure your{" "}
            {portfolioItem.category.toLowerCase()} is fast, secure, and scalable.
          </p>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Ready to Start Your {portfolioItem.category}?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll contact you within 24 hours to discuss your{" "}
              {portfolioItem.title} project.
            </p>
          </div>

          <PortfolioForm serviceName={portfolioItem.title} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
