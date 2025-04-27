import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const ServiceCard = ({ title, description, imageUrl, linkUrl }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-blue-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={linkUrl} 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
