import { useCallback, useRef, useState } from 'react';
import { MovieSearchResult } from '../types';
import { fetchMovies } from '../services/movies';
import { toast } from 'sonner';

export function useMovies() {
    const previousMovieName = useRef<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [movies, setMovies] = useState<MovieSearchResult>({
        movies: [],
        totalResults: 0
    })

    const getAllMovies = useCallback(async (movieName: string) => {
        if (movieName === previousMovieName.current) return

        try {
            setIsLoading(true)
            setError(null)
            previousMovieName.current = movieName

            const newMovies = await fetchMovies(movieName, 1)
            setMovies(newMovies)
        } catch (error) {
            toast.error("Cannot get all movies")
            if (error instanceof Error) {
                setError(error.message)
                throw new Error(error.message);
            } else {
                setError(String(error))
            }
        } finally {
            setIsLoading(false)
        }

    }, [])

    return {
        movies, getAllMovies, isLoading, error
    }
}