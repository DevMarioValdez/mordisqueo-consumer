import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const THEME_KEY = "theme";

const getStoredTheme = (): boolean => {
    const theme = localStorage.getItem(THEME_KEY);
    return theme === "dark";
};

const saveTheme = (isDark: boolean) => {
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    document.body.classList.toggle("dark", isDark);
};

const ToggleTheme = () => {
    const [dark, setDark] = useState(getStoredTheme());

    useEffect(() => {
        saveTheme(dark);
    }, [dark]);

    const toggleDarkMode = () => {
        setDark((prevDark) => !prevDark);
    };

    return (
        <div className="w-10 h-10 rounded-full flex items-center justify-center dark:bg-[#4e4e4e3f] bg-[#8f8ad9] border-solid border-2 border-[#F2F2F2] mr-5">
            <button onClick={() => toggleDarkMode()}>
                {
                    dark && <IoSunny size={25} color="yellow" /> // render sunny when dark is true
                }
                {
                    !dark && <IoMoon size={25} color="purple" /> // render moon when dark is false
                }
            </button>
        </div>
    );
};

export default ToggleTheme;
