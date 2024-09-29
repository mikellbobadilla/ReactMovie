import { Typography } from '@mui/material';
import { Material } from '../types';

const messageStyles: Material = {
  textAlign: 'center'
}

export function NoMoviesResult() {
  return (
    <Typography variant='h6' color='error.main' sx={messageStyles}>
      Movie not found
    </Typography>
  )
}