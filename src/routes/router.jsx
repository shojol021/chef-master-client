import { createBrowserRouter, useParams } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login-register/Login";
import Register from "../pages/login-register/Register";
import Terms from "../pages/terms/Terms";
import Chef from "../pages/chefs/Chef";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blog from "../blog/Blog";
import PrivateRoute from "./PrivateRoute";

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
            }
        ]
    }
])

export default router;