import Image from "next/image";

interface Props {
  quote: { name: string, review: string }
}

export default function QuoteCard({ quote: { name, review } }: Props) {

  return (
    <div className="bg-gray-200 p-10 flex flex-col justify-between gap-4 relative">
      <blockquote className="text-lg">
        {review}
      </blockquote>
      <div className="flex gap-3 items-center">
        <Image
          className="rounded-full h-14 w-14"
          width={1000}
          height={1000}
          alt="profile image"
          src="/profile.jpeg"
        />
        <h3 className="font-semibold text-xl">{name}</h3>
      </div>
    </div>
  );
}