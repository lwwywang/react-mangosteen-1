import { createBrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import { Root } from '../components/Root'
import { WelcomeLayout } from '../layouts/WelcomeLayout'
import { Home } from '../pages/Home'
import { Welcome1 } from '../pages/Welcome1'
import { Welcome2 } from '../pages/Welcome2'
import { Welcome3 } from '../pages/Welcome3'
import { Welcome4 } from '../pages/Welcome4'

export const router = createBrowserRouter([
  { path: '/', element: <Root />, },
  { path: '/home', element: <Home title="首页" /> },
  {
    path: '/welcome',
    element: <WelcomeLayout />,
    children: [
      { path: '1', element: <Welcome1 /> },
      { path: '2', element: <Welcome2 /> },
      { path: '3', element: <Welcome3 /> },
      { path: '4', element: <Welcome4 /> },
    ]
  },
  { path: '/items', element: <div>items</div> },
=======
import { RedirectToWelcome1 } from '../components/RedirectToWelcome1'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RedirectToWelcome1 />,
    children: [
      welcomeRoutes
    ],
  },
>>>>>>> 4b5a979a776b5e130f464b0520107a95b725325e
])
