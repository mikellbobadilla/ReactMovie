import { SectionContainer } from "../components/SectionContainer";
import { useMovies } from "../hooks/useMovies";
import { ListOfMovies } from "../components/ListOfMovies";
import { SearchMovies } from "../components/SearchMovies";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { useEffect } from "react";

export function PageMovies() {

  const { getAllMovies, movies, isLoading } = useMovies()
  const { fieldText } = useSearchMovies()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const movieName = formData.get('movieName') as string
    getAllMovies(movieName)
  }

  useEffect(() => {

    if (fieldText !== '') {
      getAllMovies(fieldText)
    }

  }, [fieldText])

  return (
    <>
      <SectionContainer>
        <SearchMovies isLoading={isLoading} onSubmit={handleSubmit} />
      </SectionContainer>

      <SectionContainer>
        <ListOfMovies movies={movies.movies} isLoading={isLoading} />
      </SectionContainer>

      {/* Pagination */}

    </>
  )
}