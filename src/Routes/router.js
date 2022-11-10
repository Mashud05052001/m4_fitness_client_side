import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Join User/Login";
import Register from "../Components/Join User/Register";
import Main from "../Components/Main";
import Reviews from "../Components/Reviews";
import Services from "../Components/Services";
import ShowSingleServices from "../Components/Shared/ShowSingleServices";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/services', element: <Services /> },
            { path: '/reviews', element: <Reviews /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/showSingleServices', element: <ShowSingleServices /> },
        ]
    }
])