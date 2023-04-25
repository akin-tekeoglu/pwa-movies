import { useVideos } from "@/utils/httpClient";
import YouTube from "react-youtube";

type MovieVideoPlayerProps = {
  id: number;
};

export default function MovieVideoPlayer({ id }: MovieVideoPlayerProps) {
  const { data, error, isLoading } = useVideos(id);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  const trailers=data.results.filter(
    (r: { site: string; type: string; }) => r.site == "YouTube" && r.type == "Trailer"
  )
  console.log(trailers)
  const videoId = trailers[0].key;
  return <YouTube videoId={videoId} />;
}
