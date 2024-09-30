import { useCallback, useState } from "react";
import { MovieDetail } from "../types";
import { fetchMovieById } from '../services/movies'
import { toast } from "sonner";

export function useMovie() {
  const [movie, setMovie] = useState<MovieDetail | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const getMovie = useCallback(async (movieId: string) => {

    try {
      setIsLoading(true)
      setError(null)

      const newMovie = await fetchMovieById(movieId);
      if (!newMovie) throw new Error('Movie not found');

      setMovie(newMovie)
    } catch (err) {
      toast.error('Movie not Found')
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError(String(err))
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    isLoading, getMovie, error, movie
  }
}