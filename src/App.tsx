import { useRoutes } from "react-router";
import "./App.css";
import router from "./router";

function App() {
    const content = useRoutes(router);
    return <>{content}</>;
}

export default App;
