import { Outlet } from "react-router";

const AppLayout = () => {
    return (
        <div className="h-screen flex flex-col items-center">
            <Outlet />
        </div>
    );
};

export default AppLayout;
