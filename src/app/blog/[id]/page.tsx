import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import { Calendar, ChevronLeft, User } from "lucide-react";
import { notFound } from "next/navigation";
import SchemaMarkup from "@/components/SchemaMarkup";
import "@/styles/blog.css";
import { Metadata } from "next";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    return {
      title: "Blog Post Not Found | DentalCare",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | DentalCare Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  // Get related posts (excluding the current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .filter((p) => p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  // Prepare article schema data
  const articleSchema = {
    headline: post.title,
    image: post.imageUrl,
    author: {
      name: post.author,
    },
    publisher: {
      name: "DentalCare",
      logo: "https://www.dentalcare.com/logo.png", // Replace with actual logo URL
    },
    datePublished: post.date,
    dateModified: post.date,
    description: post.excerpt,
    url: `https://www.dentalcare.com/blog/${post.id}`,
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />
      {/* Hero Section */}
      <section
        className="relative h-[50vh] text-white blog-hero"
        style={{ backgroundImage: `url(${post.imageUrl})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-blue-300 hover:text-white mb-4 transition duration-300">
              <ChevronLeft size={20} className="mr-1" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-blue-100">
              <Calendar size={18} className="mr-2" />
              <span className="mr-4">{post.date}</span>
              <User size={18} className="mr-2" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    fill
                    sizes="96px"
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800">{post.author}</h3>
                  <p className="text-blue-600 mb-3">{post.authorRole}</p>
                  <p className="text-gray-600">
                    {post.author === "Dr. Sarah Johnson" &&
                      "Dr. Johnson is a passionate dental professional with over 15 years of experience. She specializes in cosmetic dentistry and is dedicated to patient education and creating comfortable experiences for patients with dental anxiety."}
                    {post.author === "Dr. James Wilson" &&
                      "Dr. Wilson is a skilled oral surgeon with 12 years of experience in dental implants and complex oral procedures. He is committed to using the latest techniques to ensure optimal patient outcomes."}
                    {post.author === "Dr. Michael Chen" &&
                      "Dr. Chen is an experienced orthodontist who has helped thousands of patients achieve beautiful smiles. He specializes in adult orthodontics and is certified in various clear aligner systems."}
                    {post.author === "Dr. Emily Rodriguez" &&
                      "Dr. Rodriguez is a pediatric dentistry specialist who loves working with children. With her gentle approach and 10 years of experience, she helps young patients develop positive associations with dental care."}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Related Posts */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-6">Related Posts</h3>
                <div className="space-y-6">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={relatedPost.imageUrl}
                            alt={relatedPost.title}
                            fill
                            sizes="80px"
                            className="rounded-md object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-800 mb-1">
                            <Link href={`/blog/${relatedPost.id}`} className="hover:text-blue-600 transition duration-300">
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-gray-500">{relatedPost.date}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">No related posts found.</p>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 bg-blue-900 text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Have Questions?</h3>
                <p className="mb-6">
                  Our team is ready to answer your dental health questions and help you schedule an appointment.
                </p>
                <Link
                  href="/contact"
                  className="block bg-white text-blue-900 text-center px-6 py-3 rounded-md hover:bg-blue-100 transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
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
