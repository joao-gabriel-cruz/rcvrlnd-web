import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Welcome } from '../screens/Welcome';
import { Home } from '../screens/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);
