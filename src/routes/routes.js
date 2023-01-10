import { createBrowserRouter } from "react-router-dom";
import Countries from "../components/Countries/Countries";
import Country from "../components/Country/Country";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>, children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'home',
                element: <Home></Home>
            },
            {
                path: 'countries',
                loader : async()=>{
                    return fetch('https://restcountries.com/v3.1/all')
                },
                element: <Countries></Countries>
            },
            {
                path: '/country/:name',
                loader: async({params}) => {
                    return fetch(`https://restcountries.com/v3.1/name/${params.name}`)
                },
                element: <Country></Country>
            }
        ]
    },
    {path: '*', element: <div>Route not found</div>}
])