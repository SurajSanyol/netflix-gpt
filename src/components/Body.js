import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import MovieDetails from './MovieDetails'



const Body = () => {



    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />,
          
        },
        {
            path: "/browse/movie",
            element: <MovieDetails />
        }



    ])



    return (
        <div>
            <RouterProvider router={appRouter}>

                <Login />
                <Browse />

            </RouterProvider>
        </div>
    )
}

export default Body