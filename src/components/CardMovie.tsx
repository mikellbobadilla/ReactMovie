import { Card, CardActionArea, CardContent, CardMedia, Grid2 } from "@mui/material";
import { Movie } from "../types";
import { CardTitle } from "./CardTitle";

export function CardMovie({ movie }: { movie: Movie }) {
  return (
    <Grid2 size={{ xs: 1, sm: 1, lg: 1 }}>
      <Card elevation={0} sx={{ borderRadius: '0' }}>
        <CardActionArea href={movie.id} sx={{ overflow: 'hidden' }}>
          <CardMedia
            sx={{
              aspectRatio: '2/3',
              borderRadius: '2px'
            }}
            component={'img'}
            image={movie.poster}
            alt={movie.title}
          />
        </CardActionArea>
        <CardContent>
          <CardTitle variant="h5">
            {movie.title}
          </CardTitle>
        </CardContent>
      </Card>
    </Grid2>
  )
}