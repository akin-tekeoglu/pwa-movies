import MovieCard from "@/components/MovieCard";
import { useUpcominMovies } from "@/utils/httpClient";

export default function Home() {
  const { data, error, isLoading } = useUpcominMovies();
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <main>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Upcoming movies</h1>
        {data.results.map((r: { id: number; original_title: string; overview: string; vote_average: number; poster_path: any; })=><MovieCard key={r.id} id={r.id} title={r.original_title} overview={r.overview} rating={r.vote_average} image={new URL(`https://image.tmdb.org/t/p/w300${r.poster_path}`)}/>)}
      </div>
    </main>
  );
}
