import { Box, MenuItem, Select, useColorScheme } from '@mui/material';

export function SelectMode() {

    const { mode, setMode } = useColorScheme()
    if (!mode) return

    return (
        <Box>
            <Select
                size='small'
                value={mode}
                onChange={(event) =>
                    setMode(event.target.value as 'system' | 'light' | 'dark')
                }
                sx={{
                    fontSize: '12px',
                }}
            >
                <MenuItem value="system">System</MenuItem>
                <MenuItem value="light">Light</MenuItem>
                <MenuItem value="dark">Dark</MenuItem>
            </Select>
        </Box >
    )
}