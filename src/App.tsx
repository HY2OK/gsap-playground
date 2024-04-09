import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ButtonToggle from './components/ButtonToggle/ButtonToggle'
import LayerSection from './components/LayerSection/LayerSection'
import LandingPage from './components/LandingPage/LandingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: 'button-toggle',
        element: <ButtonToggle />,
      },
      {
        path: 'layer-section',
        element: <LayerSection />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
