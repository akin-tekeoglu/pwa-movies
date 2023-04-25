import { useVideos } from "@/utils/httpClient";
import Image from "next/image";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import MovieVideoPlayer from "./MovieVideoPlayer";

type MovieCardProps = {
  id: number;
  title: string;
  overview: string;
  rating: number;
  image: URL;
};

export default function MovieCard({
  id,
  title,
  overview,
  rating,
  image,
}: MovieCardProps) {
  const [showTrailer, setShowTrailer] = useState(false);
  return (
    <div className="border flex space-x-4">
      <Image
        src={image.toString()}
        alt={title}
        className="aspect-auto flex-none"
        width={300}
        height={400}
      />
      <div className="flex-auto space-y-3">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          <h3 className="text-lg font-semibold">{rating}/10</h3>
        </div>
        <p className="text-lg font-medium">{overview}</p>
        {!showTrailer && (
          <button
            onClick={(e) => setShowTrailer(true)}
            type="button"
            className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
          >
            Play trailer
          </button>
        )}
        {showTrailer && <MovieVideoPlayer id={id} />}
      </div>
    </div>
  );
}
