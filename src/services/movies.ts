import { ApiMovieDetail, ApiMovieSearchResponse, Movie, MovieDetail, MovieSearchResult } from '../types';

const API_KEY = '5994b3a8'

export async function fetchMovieById(id: string): Promise<MovieDetail | null> {
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)

        if (res.status === 401) {
            throw new Error("Api key inválido")
        }

        const data: ApiMovieDetail = await res.json()

        if (data.Response === 'False') {
            return null
        }

        return {
            id: data.imdbID,
            year: data.Year,
            rated: data.Rated,
            released: data.Released,
            genre: data.Genre,
            description: data.Plot,
            poster: data.Poster,
            type: data.Type,
            title: data.Title
        }

    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error(String(error));
        }
    }
}

export async function fetchMovies(query: string, page: number = 1): Promise<MovieSearchResult> {
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`)

        if (res.status === 401) {
            throw new Error("Api key inválido")
        }

        const data: ApiMovieSearchResponse = await res.json()

        if (data.Response === 'False') {
            return {
                movies: [],
                totalResults: 0
            }
        }

        const movies: Movie[] = data?.Search.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year
        }))

        return {
            movies: movies,
            totalResults: Number(data.totalResults)
        }

    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error(String(error));
        }
    }
}