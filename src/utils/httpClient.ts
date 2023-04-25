import useSWR from "swr";

const fetcher = (path: string) =>
  fetch(
    `https://api.themoviedb.org/3/${path}?api_key=ae7a88338c64c481907e5864e8b3eddc`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

export function useUpcominMovies() {
  const { data, error, isLoading } = useSWR("movie/upcoming", fetcher);

  return {
    data,
    isLoading,
    error,
  };
}

export function useVideos(movieId:number) {
    const { data, error, isLoading } = useSWR(`movie/${movieId}/videos`, fetcher);
  
    return {
      data,
      isLoading,
      error,
    };
  }