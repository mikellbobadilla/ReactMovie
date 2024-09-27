import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, LinkProps, ThemeProvider } from '@mui/material';
import { Toaster } from 'sonner';
import './main.css'
import { LinkBehavior } from './components/LinkBehavior.tsx';

const darktheme = createTheme({
  colorSchemes: {
    dark: true,
    light: true,
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior
      } as LinkProps
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior
      }
    }
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darktheme}>
      <Toaster richColors={true} theme='system' position='top-center' />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
