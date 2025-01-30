import "./App.css";
import Hero from "./dashboard/hero";
import Navigation from "./dashboard/navigation";

function App() {
    return (
        <div className="h-screen flex flex-col items-center justify-center font-epilogue dark:bg-zinc-800 bg-[hsl(0,0%,98%)]">
            <Navigation />
            <Hero />
        </div>
    );
}

export default App;
