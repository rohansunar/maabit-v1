import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Our Blog | Maabit',
  description: 'Insights, guides, and industry expertise to help you navigate the digital landscape and make informed technology decisions.',
  openGraph: {
    title: 'Our Blog | Maabit',
    description: 'Insights, guides, and industry expertise to help you navigate the digital landscape and make informed technology decisions.',
    url: '/blog',
    type: 'website',
  },
};

const articles = [
  {
    slug: 'custom-software-benefits',
    title: 'The Benefits of Custom Software Development for Enterprise Businesses',
    summary: "Discover how tailored software solutions can streamline operations, improve efficiency, and boost your company's competitive edge in today's digital landscape.",
    image: 'https://images.unsplash.com/photo-1612299065617-f883adb67bd1',
    tags: ['Custom Software', 'Enterprise Solutions'],
    readTime: '6 min read',
    author: { name: 'John Smith', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
    date: 'Apr 15, 2023',
    featured: true,
  },
  {
    slug: 'web-development-trends-2023',
    title: 'Web Development Trends to Watch in 2023',
    summary: 'Explore the cutting-edge technologies and design approaches that are shaping the web development landscape this year.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['Web Development', 'Technology Trends'],
    readTime: '8 min read',
    author: { name: 'Emily Johnson', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    date: 'Mar 28, 2023',
  },
  {
    slug: 'ai-mobile-app-development',
    title: 'How AI is Transforming Mobile App Development',
    summary: 'Learn how artificial intelligence and machine learning capabilities are revolutionizing mobile applications, from personalization to automation.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    tags: ['Mobile Development'],
    readTime: '5 min read',
    author: { name: 'Michael Chen', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    date: 'Mar 10, 2023',
  },
  {
    slug: 'cloud-solution-guide',
    title: 'The Ultimate Guide to Choosing a Cloud Solution Provider',
    summary: 'Navigate the complex world of cloud services with our comprehensive guide to evaluating providers, understanding pricing, and ensuring security.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    tags: ['Cloud Solutions', 'IT Infrastructure'],
    readTime: '10 min read',
    author: { name: 'Sarah Rodriguez', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
    date: 'Feb 15, 2023',
  },
  {
    slug: 'secure-web-applications',
    title: 'Building Secure Web Applications: Best Practices and Common Pitfalls',
    summary: 'Security should be a top priority in web development. Explore essential strategies for protecting your applications and data.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    tags: ['Web Development', 'Security'],
    readTime: '7 min read',
    author: { name: 'David Wilson', avatar: 'https://randomuser.me/api/portraits/men/44.jpg' },
    date: 'Jan 22, 2023',
  },
  {
    slug: 'ui-ux-design-success',
    title: 'The Role of UI/UX Design in Software Development Success',
    summary: 'Discover why thoughtful user interface and experience design is crucial for software adoption, user satisfaction, and business growth.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    tags: ['UI/UX Design', 'Software Development'],
    readTime: '6 min read',
    author: { name: 'Jessica Patel', avatar: 'https://randomuser.me/api/portraits/women/43.jpg' },
    date: 'Jan 5, 2023',
  },
];

export default function BlogPage() {
  return (
    <main>
      <header className="bg-[#0b1120] py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Our <span className="text-maabit-blue">Blog</span>
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Insights, guides, and industry expertise to help you navigate the digital landscape and make informed technology decisions.
        </p>
        <form role="search" className="max-w-md mx-auto">
          <label htmlFor="search" className="sr-only">Search articles</label>
          <div className="relative">
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Search articles..."
              className="w-full rounded-lg py-3 px-4 pr-10 bg-[#10182a] text-white placeholder-gray-400 border border-[#1a237e] focus:outline-none focus:ring-2 focus:ring-maabit-blue"
              aria-label="Search articles"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </span>
          </div>
        </form>
      </header>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">Latest Articles</h2>
            <select className="rounded-lg border border-gray-300 py-2 px-4 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-maabit-blue">
              <option>All Categories</option>
              <option>Custom Software</option>
              <option>Web Development</option>
              <option>Mobile Development</option>
              <option>Cloud Solutions</option>
              <option>UI/UX Design</option>
            </select>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <article className="md:col-span-2 row-span-2 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-100">
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {articles[0].tags.map((tag) => (
                    <span key={tag} className="bg-maabit-blue/90 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">{tag}</span>
                  ))}
                </div>
                <span className="absolute top-3 right-3 bg-gray-900/80 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">{articles[0].readTime}</span>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    <Link href={`/blog/${articles[0].slug}`}>{articles[0].title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{articles[0].summary}</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <Image src={articles[0].author.avatar} alt={articles[0].author.name} width={32} height={32} className="rounded-full object-cover" />
                  <span className="text-gray-800 font-semibold text-sm">{articles[0].author.name}</span>
                  <span className="text-gray-400 text-xs">{articles[0].date}</span>
                  <Link href={`/blog/${articles[0].slug}`} className="ml-auto text-maabit-blue font-semibold text-sm hover:underline">Read Article &rarr;</Link>
                </div>
              </div>
            </article>
            {/* Other Articles */}
            {articles.slice(1).map((a) => (
              <article key={a.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                <div className="h-48 w-full relative">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {a.tags.map((tag) => (
                      <span key={tag} className="bg-maabit-blue/90 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">{tag}</span>
                    ))}
                  </div>
                  <span className="absolute top-3 right-3 bg-gray-900/80 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">{a.readTime}</span>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      <Link href={`/blog/${a.slug}`}>{a.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{a.summary}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    <Image src={a.author.avatar} alt={a.author.name} width={28} height={28} className="rounded-full object-cover" />
                    <span className="text-gray-800 font-semibold text-xs">{a.author.name}</span>
                    <span className="text-gray-400 text-xs">{a.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {/* Pagination */}
          <nav className="flex justify-center mt-12" aria-label="Pagination">
            <ul className="inline-flex items-center gap-2">
              <li><button className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-500 font-bold hover:bg-maabit-blue/10">&lt;</button></li>
              <li><button className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-900 font-bold bg-maabit-blue/90 text-white">1</button></li>
              <li><button className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-500 font-bold hover:bg-maabit-blue/10">2</button></li>
              <li><button className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-500 font-bold hover:bg-maabit-blue/10">3</button></li>
              <li><span className="px-2 text-gray-400">...</span></li>
              <li><button className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-500 font-bold hover:bg-maabit-blue/10">10</button></li>
              <li><button className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-500 font-bold hover:bg-maabit-blue/10">&gt;</button></li>
            </ul>
          </nav>
        </div>
      </section>
      {/* Newsletter Signup */}
      <section className="bg-[#f5fafb] py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold mb-2 text-[#c7e6fa]">Subscribe to Our Newsletter</h2>
          <p className="text-[#c7e6fa] mb-6">Stay updated with the latest industry insights, technology trends, and expert advice delivered directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              className="rounded-lg px-4 py-3 w-full sm:w-auto flex-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maabit-blue"
              aria-label="Your email address"
            />
            <button type="submit" className="bg-maabit-blue text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">Subscribe</button>
          </form>
          <p className="text-xs text-[#c7e6fa] mt-2">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </main>
  );
} 