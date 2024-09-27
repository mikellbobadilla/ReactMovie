import { Box, Typography } from "@mui/material";
import { SearchForm } from "../components/SearchForm";
import { TextInput } from "../components/TextInput";
import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useMovies } from "../hooks/useMovies";
import { ListOfMovies } from "../components/ListOfMovies";

export function PageMovies() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('s') as string

  const [inputValue, setInputValue] = useState<string>(query)
  const { debounceValue } = useDebounce(inputValue, 500)

  const { movies, isLoading, getAllMovies, error } = useMovies()

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const queryField = formData.get('query') as string
    getAllMovies(queryField)
  }, [getAllMovies])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newParamValue = event.currentTarget.value
    setSearchParams({ s: newParamValue })
    setInputValue(newParamValue)
  }

  useEffect(() => {
    getAllMovies(debounceValue)
  }, [debounceValue, getAllMovies])

  return (
    <>
      <Box component={'section'} sx={{ padding: '20px 0 8px' }}>
        <SearchForm isLoading={isLoading} onSubmit={handleSubmit}>
          <TextInput
            name="query"
            id="query"
            label="Search movie"
            aria-label="Write the name of the movie you want to search"
            value={inputValue}
            onChange={handleChange}
          />
        </SearchForm>
      </Box>

      <Box component={'section'} sx={{ padding: '18px 0 8px' }}>
        {!isLoading && error && (<Typography variant='h5' color='warning.main'
          sx={{
            textAlign: 'center'
          }}>
          {error}
        </Typography>)}
        {!isLoading && !error && <ListOfMovies movies={movies.movies} />}
      </Box>

      {/* Pagination */}

    </>
  )
}