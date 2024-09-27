import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Material, MovieDetail } from '../types';
import { useEffect, useState } from 'react';
import { fetchMovieById } from '../services/movies'

const mainStyles: Material = {
    padding: '12px',
    marginTop: '12px'
}

function useMovie(movieId: string) {
    const [movie, setMovie] = useState<MovieDetail | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchMovieById(movieId)
            .then(data => {
                setIsLoading(true)
                setError(null)
                if (!data) throw new Error('Movie not found');
                setMovie(data)
            })
            .catch(error => {
                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError(error)
                }
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [movieId])


    return {
        movie, isLoading, error
    }
}

export function Movie() {

    const params = useParams<{ movieId: string }>();

    const { movieId } = params

    const { movie } = useMovie(movieId ?? '')

    console.log({ movie })

    return (
        <Box component='main' sx={mainStyles}>
            <Box component='section' sx={{
                display: 'flex',
                gap: '12px'
            }}>
                <Box component='img' src={movie?.poster} sx={{
                    aspectRatio: '2/3',
                    width: '150px',
                    borderRadius: '5px'
                }} />

                <Box component='div' sx={{
                    width: '100%'
                }}>
                    <Typography variant='h2' sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        textWrap: 'balance'
                    }}>
                        {movie?.title}
                    </Typography>
                </Box>
            </Box>

            <Box component='section'>
                    <Typography>
                        {movie?.description}
                    </Typography>
            </Box>
        </Box>
    )
}