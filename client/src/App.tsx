import Books from './pages/Books';
import Add from './pages/Add';
import Update from './pages/Update';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",  
      element: <Books />
    }, {
      path: "/add",
      element: <Add />
    },
    {
      path: '/update/:id',
      element: <Update />
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}