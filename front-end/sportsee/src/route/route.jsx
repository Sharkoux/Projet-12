
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../component/Layout'
import Profil from '../page/Profil'
import Erreur from '../page/error'


// Generate path for route function
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


/**
* Create route for render the appropriate UI
* @return { ReactDOM }
*/

function Route() {
    return <RouterProvider router={router} />
}

export default Route

