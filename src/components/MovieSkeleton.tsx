import { Grid2, Skeleton } from '@mui/material';

export function MovieSkeleton() {
    return (
        <Grid2 size={1}>
            <Skeleton animation='wave' variant="rectangular" sx={{
                aspectRatio: '2/3',
                width: '100%',
                height: '300px',
                marginBottom: '8px',
                borderRadius: '5px'
            }} />
            <Skeleton animation='wave' variant="text" sx={{ fontSize: '14px', width: '80%', marginInline: 'auto' }} />
        </Grid2>
    )
}