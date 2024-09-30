import { Box, Card, CardMedia, CircularProgress, Stack, Typography } from '@mui/material'
import { SectionContainer } from '../components/SectionContainer'
import { useParams } from 'react-router-dom'
import { useMovie } from '../hooks/useMovie'
import { useEffect } from 'react'

export function PageMovie() {

  const { movieId } = useParams()

  const { movie, isLoading, error, getMovie } = useMovie()

  useEffect(() => {
    getMovie(movieId ?? '')
  }, [movieId, getMovie])

  if (isLoading && !error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (!isLoading && error) {
    return (
      <Typography variant='h6' color='error.main' sx={{textAlign: 'center'}}>
        {error}
      </Typography>
    )
  }

  return (
    <SectionContainer sx={{ width: '100%', maxWidth: '700px', marginInline: 'auto' }}>
      <Stack direction={{ xs: 'row' }} spacing={2} sx={{ marginBottom: '12px' }}>
        <Card elevation={0} sx={{ borderRadius: '0' }}>
          <CardMedia
            sx={{ aspectRatio: '2/3', maxWidth: '200px', borderRadius: '5px' }}
            component={'img'}
            image={movie?.poster}
            alt={movie?.title}
          />
        </Card>

        <Box component={'div'}>
          <Typography component={'h1'} variant='body1'>
            {movie?.title}
          </Typography>
          <Typography variant='subtitle1'>
            <strong>Type</strong> {movie?.type}
          </Typography>

          <Typography variant='subtitle1'>
            <strong>Rated</strong> {movie?.rated}
          </Typography>

          <Typography variant='subtitle1' sx={{ textWrap: 'pretty' }}>
            <strong>Released</strong> {movie?.released}
          </Typography>

          <Typography variant='subtitle1'>
            <strong>Genre</strong> {movie?.genre}
          </Typography>

          <Typography variant='subtitle1'>
            <strong>Year</strong> {movie?.year}
          </Typography>
        </Box>
      </Stack>

      <Box component={'div'}>
        <Typography variant='subtitle2' component='p' sx={{ textWrap: 'pretty' }}>
          {movie?.description}
        </Typography>
      </Box>
    </SectionContainer>
  )
}

// <Grid2 container spacing={2} columns={{ xs: 2 }}>
//   <Grid2 size={{ xs: 1 }}>
//     <Card elevation={0}>
//       <CardMedia
//         component={'img'}
//         image={movieResult.Poster}
//         alt={movieResult.Title}
//       />
//     </Card>
//   </Grid2>

//   <Grid2 size={{ xs: 1 }}>
//     <Card elevation={0} >
//       <CardContent sx={{ padding: '0' }}>
//         <Typography
//           variant='h1'
//           fontSize={'20px'}
//           fontWeight={500}
//           textAlign={'center'}
//           sx={{
//             textWrap: 'balance',
//             marginBottom: '8px'
//           }}
//         >
//           {movieResult.Title}
//         </Typography>

//         <Typography variant='subtitle2'>
//           <strong>Language:</strong> {movieResult.Language}
//         </Typography>

//         <Typography variant='subtitle2'>
//           <strong>Year:</strong> {movieResult.Year}
//         </Typography>

//         <Typography variant='subtitle2'>
//           <strong>Rated:</strong> {movieResult.Rated}
//         </Typography>

//         <Typography variant='subtitle2'>
//           <strong>Released:</strong> {movieResult.Released}
//         </Typography>


//         <Typography variant='subtitle2'>
//           <strong>Genre:</strong> {movieResult.Genre}
//         </Typography>

//         <Typography variant='subtitle2'>
//           <strong>Type:</strong> {movieResult.Type}
//         </Typography>
//       </CardContent>
//     </Card>
//   </Grid2>
// </Grid2>