import { useVideos } from "@/utils/httpClient";
import YouTube from "react-youtube";

type MovieVideoPlayerProps = {
  id: number;
  width?: number;
};

export default function MovieVideoPlayer({ id, width=640 }: MovieVideoPlayerProps) {
  const { data, error, isLoading } = useVideos(id);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  const trailers=data.results.filter(
    (r: { site: string; type: string; }) => r.site == "YouTube" && r.type == "Trailer"
  )
  const videoId = trailers[0].key;
  return <YouTube videoId={videoId} opts={{width:width.toString()}} />;
}
