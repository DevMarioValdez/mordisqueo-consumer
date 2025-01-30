import { RouteObject } from "react-router";
import Dashboard from "./dashboard/Dashboard";
import AppLayout from "./layouts/shared/AppLayout";
import BaseLayout from "./layouts/shared/BaseLayout";

const routes: RouteObject[] = [
    {
        path: "",
        element: <BaseLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
        ],
    },
    {
        path: "/booking",
        element: <AppLayout />,
        children: [
            {
                path: "",
                element: <>HOLA MI NOMBRE ES BOOKING</>,
            },
        ],
    },
];

export default routes;
