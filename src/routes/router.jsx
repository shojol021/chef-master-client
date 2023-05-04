import { createBrowserRouter, useParams } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login-register/Login";
import Register from "../pages/login-register/Register";
import Terms from "../pages/terms/Terms";
import Chef from "../pages/chefs/Chef";
import Blog from "../pages/blog/Blog";
import PrivateRoute from "./PrivateRoute";
import Favourite from "../pages/favourite/Favourite";
import { getFavouriteFromLocalStorage } from "../utilities";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import User from "../pages/user/User";
import AboutUs from "../pages/about-us/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/chefs/:id',
                element: <PrivateRoute><Chef></Chef></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-10-ph-server-shojol021.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/favourite',
                element: <Favourite></Favourite>,
                loader: getFavouriteFromLocalStorage
            },
            {
                path: '/user',
                element: <User></User>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            }
        ]
    }
])

export default router;