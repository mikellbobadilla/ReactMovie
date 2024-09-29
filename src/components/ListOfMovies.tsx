import { Grid2 } from "@mui/material";
import { CardMovie } from "./CardMovie";
import { Movie } from "../types";
import { MovieSkeleton } from "./MovieSkeleton";
import { NoMoviesResult } from "./NoMoviesResult";

export function ListOfMovies({ movies, isLoading = true }: { movies: Movie[], isLoading?: boolean }) {

  if (isLoading) {
    return (
      <Grid2 container spacing={2} columns={{ xs: 2, sm: 4, lg: 5 }}>
        <MovieSkeleton />
        <MovieSkeleton />
      </Grid2>
    )
  }

  if (!isLoading && movies.length === 0) {
    return (
      <NoMoviesResult />
    )
  }

  return (
    <Grid2 container spacing={2} columns={{ xs: 2, sm: 4, lg: 5 }}>
      {
        movies.map(movie => (
          <CardMovie key={movie.id} movie={movie} />
        ))
      }
    </Grid2>)

}