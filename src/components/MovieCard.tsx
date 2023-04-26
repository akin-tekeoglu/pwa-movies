import Image from "next/image";
import { useState } from "react";
import MovieVideoPlayer from "./MovieVideoPlayer";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';


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
        className="aspect-auto flex-auto md:flex-none"
        width={300}
        height={400}
      />
      <div className="flex-auto space-y-3">
        <div className="flex justify-between">
          <h2 className="text-base md:text-xl font-semibold">{title}</h2>
          <h3 className="text-sm md:text-lg font-semibold">{rating}/10</h3>
        </div>
        <p className="text-xs font-medium md:text-lg max-h-50 overflow-ellipsis overflow-hidden">
          {overview}
        </p>
        {!showTrailer && (
          <button
            onClick={(e) => setShowTrailer(true)}
            type="button"
            className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
          >
            Play trailer
          </button>
        )}
        {showTrailer && !isMobile() && <MovieVideoPlayer id={id} />}
        {showTrailer && isMobile() && (
          <Popup open={true} closeOnDocumentClick onClose={()=>setShowTrailer(false)} contentStyle={{width:"fit-content"}}>
              <MovieVideoPlayer id={id} width={window.innerWidth} />
          </Popup>
        )}
      </div>
    </div>
  );
}

function isMobile() {
  return window.innerWidth <= 768;
}
