import logo from './logo.svg';
import './App.css';
import Card from './card.js';

function App() {
  return (
    <>
    <h1 className="bg-green-400 text-Black p-4 text-3xl rounded-xl  ">
      LEARNING TAILWIND CSS and PROPS IN REACT
    </h1>
    <div className="flex justify-between">
      <Card name="WINDOWS"  btn="click here to read" cmp1="Windows 10 " cmp2="Windows 8 " cmp3=" Windows 7"/> 
      <Card name="LINUX" btn="visit here" cmp1="Ubantu" cmp2="Fedora " cmp3="Debian "/> 
      <Card name="macOS"  btn=" click and visit"  cmp1="BIG SUR" cmp2="macOS Catalina" cmp3="zn" />
       </div> 
    </>
          
  );
}

export default App;
