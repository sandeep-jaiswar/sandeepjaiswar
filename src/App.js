import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Myskill from "./components/Myskill/Myskill";
import Navigator from "./components/Navigator/Navigator";
import Work from "./components/Work/Work";

function App() {
  const removeArrow  = () =>{
    if(!window.scrollY){
      document.getElementById('downarrow').style.opacity=0;
    }
  }

  return (
    <div className="App" id='app'>   
      <Navigator/>
      <div className='pages_container' onScroll={removeArrow}>
        <Home/>
        <Myskill/>
        <Work/>
        <Contact/>
        <About/>
      </div>   
    </div>
  );
}

export default App;
