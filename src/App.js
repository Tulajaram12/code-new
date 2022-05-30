import image from './image/unbox.png';
//import './App.css';
import Navbar from './components/Navbar.js';
import Content from './components/Content.js';
import Center from './components/Center.js';
import Middleware from './components/Middle';
function App() {
  return (
  <div style={{backgroundImage:`url(${image})`}} className="App">
    <div>
       <div>
          <Navbar/>
       </div>
      <Content/>
      <Middleware/>
      <Center/>
    </div>
  </div>
  );
}

export default App;