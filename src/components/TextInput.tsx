import { TextField } from '@mui/material';
import { ComponentProps } from 'react';

type TextInputProps = ComponentProps<typeof TextField>

export function TextInput({ ...props }: TextInputProps) {
    return (
        <TextField
            sx={{ width: '100%', }}
            type='search'
            variant="outlined"
            size="small"
            {...props}
        />
    )
}