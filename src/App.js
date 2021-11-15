import Home from "./components/Home/Home";
import Myskill from "./components/Myskill/Myskill";
import Navigator from "./components/Navigator/Navigator";

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
      </div>   
    </div>
  );
}

export default App;
