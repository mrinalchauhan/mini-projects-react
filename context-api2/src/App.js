
import './App.css';
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';
import { ThemeProvider } from './context/theme';
import { useEffect, useState } from 'react';

function App() {
  const[themeMode,setthemeMode]=useState("light")

  const lightTheme=()=>{
    setthemeMode("light")
  }
  
  const darkTheme=()=>{
    setthemeMode("dark")
  }

  // useEffect(()=>{
  //   document.querySelector('html').remove("light","dark")
  //   document.querySelector('html').add(themeMode)
  // },[themeMode])

  useEffect(() => {
    const htmlElement = document.querySelector('html');
  
    // Remove all existing classes
    htmlElement.classList.remove("light", "dark");
  
    // Add the current theme class
    htmlElement.classList.add(themeMode);
  }, [themeMode]);
  

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className='flex-flex-wrap min-h-screen items-center'>
      <div className='w-full'>
        
        <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
             <ThemeBtn/>
        </div>
         <div className='w-full max-w-sm mx-auto'>
          <Card/>
         </div>
      </div>
    </div>
    
    </ThemeProvider>
  );
}

export default App;
 // remember to make changes in tailwind.config.js