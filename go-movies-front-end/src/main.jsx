import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './components/Home.jsx'
import Movies from './components/Movies.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {index: true, element: <Home />},
      {
        path: "/movies",
        element: <Movies />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
