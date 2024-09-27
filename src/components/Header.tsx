import StreamIcon from '@mui/icons-material/Stream';
import { Box, Typography } from '@mui/material';
import { SelectMode } from './SelectMode';
import { Material } from '../types';

const headerStyle: Material = {
	padding: '8px 12px'
}

const titleStyle: Material = {
	fontSize: '20px',
	fontWeight: '600',
	display: 'flex',
	alignItems: 'center',
	gap: '2px'
}

const contentStyle: Material = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	maxWidth: '1280px',
	marginInline: 'auto'
}

export function Header() {
	return (
		<Box component='header' sx={headerStyle}>
			<Box component='div' sx={contentStyle}>
				<Typography sx={titleStyle}>
					<StreamIcon />
					React Movie
				</Typography>
				<SelectMode />
			</Box>
		</Box>
	)
}
