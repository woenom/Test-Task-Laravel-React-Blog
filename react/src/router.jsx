import {createBrowserRouter, Navigate} from "react-router-dom";
import Articles from "./views/Articles";
import NotFound from "./views/NotFound";
import DefaultLayout from "./Layouts/DefaultLayout";
import Article from "./views/Article";

const router = createBrowserRouter([
    {
        path:'/',
        element: <DefaultLayout />,
        children:[
            {
                path:'/',
                element: <Navigate to="/articles"/>
            },
            {
                path:'/articles',
                element: <Articles />
            },
            {
                path:'/articles/:id',
                element: <Article />
            },
        ]
    },
    {
        path:'*',
        element: <NotFound />
    },
])

export default router;