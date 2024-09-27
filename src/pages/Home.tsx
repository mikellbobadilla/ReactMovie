import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Box } from '@mui/material';
import { Material } from '../types';

const mainStyles: Material = {
	width: '100%',
	maxWidth: '1280px',
	marginInline: 'auto',
	paddingInline: '12px'
}

export function Home() {
	return (
		<>
			<Header />
			<Box component={'main'} sx={mainStyles}>
				<Outlet />
			</Box>
		</>
	)
}