import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const TeamMember = ({ name, role, bio, imageUrl }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <Image 
          src={imageUrl} 
          alt={name} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-800">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
