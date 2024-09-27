import { Grid2 } from "@mui/material";
import { Movie } from "../types";
import { NoMoviesResult } from "./NoMoviesResult";
import { CardMovie } from "./CardMovie";

export function ListOfMovies({ movies }: { movies: Movie[] }) {

  if (movies.length === 0) {
    return (
      <NoMoviesResult />
    )
  }

  return (
    <Grid2 container spacing={2} columns={{ xs: 2, sm: 5, lg: 5 }}>
      {
        movies.map(movie => (
          <CardMovie key={movie.id} movie={movie} />
        ))
      }
    </Grid2>)

}