import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  email?: string;
  linkedin?: string;
};

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-[#f5faff] rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform p-4 w-full max-w-sm mx-auto">
      <Image
        src={member.image}
        alt={member.name}
        width={700}
        height={700}
        layout="responsive"
        className="rounded-lg object-cover"
      />
      <h2 className="text-xl font-semibold mt-4">{member.name}</h2>
      <p className="text-[#0077b6]">{member.role}</p>
      {member.email && (
        <p>
          Email:{" "}
          <a href={`mailto:${member.email}`} className="text-blue-600 underline">
            {member.email}
          </a>
        </p>
      )}
      {member.linkedin && (
        <p>
          LinkedIn:{" "}
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Profile
          </a>
        </p>
      )}
    </div>
  );
}
