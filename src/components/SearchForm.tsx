import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ComponentProps } from 'react';
import { Material } from '../types';

type SearchFormProps = ComponentProps<'form'> & {
    isLoading: boolean
}

const searchFormStyles: Material = {
    display: 'flex',
    gap: '12px',
    marginInline: 'auto',
    width: '100%',
    maxWidth: '600px'
}

export function SearchForm({ isLoading, onSubmit, children }: SearchFormProps) {

    return (
        <Box onSubmit={onSubmit} component='form' sx={searchFormStyles}>
            {children}
            <LoadingButton
                loading={isLoading}
                variant="contained"
                type='submit'
            >
                <SearchIcon />
            </LoadingButton>
        </Box>
    )
}