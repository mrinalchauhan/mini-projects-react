import { createContext,useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"",
    darkTheme:()=>{},
    lightTheme:()=>{}
})
export const ThemeProvider=ThemeContext.Provider
 
export default function useTheme(){
    return useContext(ThemeContext)
}

// whenever you need any access of any values of "themeMode"  "lighttheme" "darktheme"  then we use "useTheme"
// and extract whatever we need from ThemeContext part "lighttheme" "darktheme"
