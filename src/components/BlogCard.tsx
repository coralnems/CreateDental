import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
}

const BlogCard = ({ id, title, excerpt, imageUrl, date, author }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar size={16} className="mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-blue-800">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link
          href={`/blog/${id}`}
          className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
