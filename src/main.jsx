import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Tours from './pages/Tours'
import Fleet from './pages/Fleet'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'tours', element: <Tours /> },
      { path: 'fleet', element: <Fleet /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
