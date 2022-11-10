import { createBrowserRouter } from "react-router-dom";
import AddServices from "../Components/AddServices";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Join User/Login";
import Register from "../Components/Join User/Register";
import Main from "../Components/Main";
import Reviews from "../Components/Reviews";
import Services from "../Components/Services";
import ShowSingleServices from "../Components/Shared/ShowSingleServices";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            {
                path: '/services', element: <Services />,
                loader: () => fetch('http://localhost:5000/services'),
            },
            { path: '/reviews', element: <PrivateRouter><Reviews /></PrivateRouter> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/addServices', element: <AddServices /> },
            {
                path: '/showSingleServices/:id', element: <ShowSingleServices />,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
        ]
    }
])