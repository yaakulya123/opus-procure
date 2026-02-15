import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function HeroImage({
  src,
  alt,
  width = 1600,
  height = 900,
  className = "",
  priority = false,
}: HeroImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
