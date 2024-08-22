
import { useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/theme';

function App() {
  const[themeMode,setthemeMode]=useState("light")
  
  const lightTheme=()=>{
    setthemeMode("light")
  }

  const darkTheme=()=>{
    setthemeMode("dark")
  }
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    {/* we have used routing in header and footer so use thse components in main.js directly */}
     <div className='flex flex-wrap min-h-screen items-center'>
      <div className='w-full'>
        <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
          {/* themebtn */}
        </div>
        <div className='w-full max-w-sm mx-auto'>
          {/*card */}
        </div>
      </div>
     </div>
    </ThemeProvider>
  );
}

export default App;
