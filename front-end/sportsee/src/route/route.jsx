
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../component/Layout'
import Profil from '../page/Profil'
import Erreur from '../page/error'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/user/:id',
                element: <Profil />,
                errorElement: <Erreur />
            }
        ],
    },
])



function Route() {
    return <RouterProvider router={router} />
}

export default Route

