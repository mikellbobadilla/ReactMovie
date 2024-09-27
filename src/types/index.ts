import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'

/* Backend */
export interface ApiMovie {
    imdbID: string
    Title: string
    Poster: string
    Year: string
    Type: string
}

/* Backend */
export interface ApiMovieSearchResponse {
    Search: ApiMovie[]
    totalResults: string
    Response: string
}

/* Backend */
export interface ApiMovieDetail {
    imdbID: string
    Title: string
    Year: string
    Rated: string
    Released: string
    Genre: string
    Plot: string
    Poster: string
    Type: string
    Response: string
}

/* UI */
export interface MovieDetail {
    id: string
    year: string
    rated: string
    released: string
    genre: string
    description: string
    poster: string
    type: string
    title: string
}

/* UI */
export interface Movie {
    id: string
    title: string
    poster: string,
    year: string
}

/* UI */
export interface MovieSearchResult {
    movies: Movie[];
    totalResults: number
}



export type Material = SxProps<Theme>