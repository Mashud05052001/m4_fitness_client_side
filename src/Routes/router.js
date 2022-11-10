import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Main from "../Components/Main";
import Reviews from "../Components/Reviews";
import Services from "../Components/Services";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/services', element: <Services /> },
            { path: '/reviews', element: <Reviews /> },
        ]
    }
])