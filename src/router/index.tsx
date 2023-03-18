import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Welcome } from '../screens/Welcome';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
]);
