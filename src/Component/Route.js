import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import AddTask from "./Pages/AddTask";
import CompeletedTask from "./Pages/CompeletedTask";
import MyTask from "./Pages/MyTask";
import Login from "./Shared/Login";
import Register from "./Shared/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completedtask',
                element: <CompeletedTask></CompeletedTask>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
])