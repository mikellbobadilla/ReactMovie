import { Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import movieResult from '../mocks/movie.json'

export function PageMovie() {
  return (
    <Grid2 container spacing={2} columns={{ xs: 2 }}>
      <Grid2 size={{ xs: 1 }}>
        <Card elevation={0}>
          <CardMedia
            component={'img'}
            image={movieResult.Poster}
            alt={movieResult.Title}
          />
        </Card>
      </Grid2>

      <Grid2 size={{ xs: 1 }}>
        <Card elevation={0} >
          <CardContent sx={{ padding: '0' }}>
            <Typography
              variant='h1'
              fontSize={'20px'}
              fontWeight={500}
              textAlign={'center'}
              sx={{
                textWrap: 'balance',
                marginBottom: '8px'
              }}
            >
              {movieResult.Title}
            </Typography>

            <Typography variant='subtitle2'>
              <strong>Language:</strong> {movieResult.Language}
            </Typography>

            <Typography variant='subtitle2'>
              <strong>Language:</strong> {movieResult.Language}
            </Typography>

            <Typography variant='subtitle2'>
              <strong>Language:</strong> {movieResult.Language}
            </Typography>

            <Typography variant='subtitle2'>
              <strong>Language:</strong> {movieResult.Language}
            </Typography>

          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  )
}