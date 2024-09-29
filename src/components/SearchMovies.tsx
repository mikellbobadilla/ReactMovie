import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ComponentProps } from 'react';
import { SearchFormContainer } from './SearchFormContainer';
import { useSearchMovies } from '../hooks/useSearchMovies';

type SearchFormProps = ComponentProps<typeof SearchFormContainer> & {
    isLoading: boolean
}

export function SearchMovies({ isLoading, onSubmit }: SearchFormProps) {

    const {errorField, fieldText, handleChange} = useSearchMovies()

    return (
        <Box component={'search'}>
            <SearchFormContainer onSubmit={onSubmit}>
                <TextField
                    error={Boolean(errorField)}
                    helperText={Boolean(errorField) ? errorField : ''}
                    id='movieName' name='movieName'
                    fullWidth
                    size='small'
                    label='Search'
                    type='search'
                    placeholder='Search movie'
                    value={fieldText}
                    onChange={handleChange}
                />

                <LoadingButton
                    disabled={Boolean(errorField)}
                    loading={isLoading}
                    variant='contained'
                    type='submit'
                    size="large"
                >
                    <SearchIcon />
                </LoadingButton>
            </SearchFormContainer>
        </Box>
    )
}