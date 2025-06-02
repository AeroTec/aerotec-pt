import Image from "next/image"
import Link from "next/link"

export default function ProjectLogo({ name, logo, link }: ProjectLogo) {
  const logoContent = (
      <Image
        src={logo}
        alt={name}
        width={160}
        height={160}
        className="object-contain"
      />
  )

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" title={name}>
      {logoContent}
    </Link>
  )
}
