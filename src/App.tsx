import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { PageMovies } from './pages/PageMovies';
import { PageMovie } from './pages/PageMovie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <PageMovies />
      },
      {
        path: '/:movieId',
        element: <PageMovie />
      }
    ]
  }
])

/* Entry point App */
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
