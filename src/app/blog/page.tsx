import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogs";
import heroStyles from "@/styles/hero.module.css";

export const metadata = {
  title: "Dental Health Blog | DentalCare - Expert Tips & Advice",
  description: "Stay informed with the latest dental health tips, treatment information, and oral care advice from our expert dental team.",
  keywords: "dental blog, dental health tips, oral hygiene, dental advice, teeth care, gum health, dental treatments, dental news",
  alternates: {
    canonical: "https://www.dentalcare.com/blog",
  },
  openGraph: {
    title: "Dental Health Blog | DentalCare - Expert Tips & Advice",
    description: "Stay informed with the latest dental health tips, treatment information, and oral care advice from our expert dental team.",
    url: "https://www.dentalcare.com/blog",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg",
        width: 1200,
        height: 630,
        alt: "DentalCare Blog",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={heroStyles.heroBackgroundXSmall}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dental Health Blog</h1>
            <p className="text-xl text-blue-100">
              Stay informed with the latest dental health tips and news from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                date={post.date}
                author={post.author}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Stay up-to-date with the latest dental health tips, news, and special offers from our clinic.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
