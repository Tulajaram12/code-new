import image from './image/unbox.png';
//import './App.css';
import Navbar from './components/Navbar.js';
import Content from './components/Content.js';
function App() {
  return (
  <div style={{backgroundImage:`url(${image})`}} className="App">
  <div>
     <Navbar/>
  </div>
  <div>
    <Content/>
  </div>
  </div>
  );
}

export default App;