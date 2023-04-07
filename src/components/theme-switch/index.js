import Switch from 'react-switch';
import { useContext } from "react";
import { ThemeContext, themes } from "../../Context/theme";


const Switcher = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    
    return (
        <>
            <Switch
                onChange={() =>
                    setTheme(theme === themes.light ? themes.dark : themes.light)
                }
                checked={theme === themes.dark}
                onColor={"#4949a2"}
                uncheckedIcon={false}
                checkedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
            />
        </>
    );
}

export default Switcher;