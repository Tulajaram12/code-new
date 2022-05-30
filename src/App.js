import image from './image/unbox.png';
//import './App.css';
import Navbar from './components/Navbar.js';
import Content from './components/Content.js';
import Center from './components/Center.js';
import Middleware from './components/Middle';
import Downware from './components/Downware';
import Footer from './components/Footer';

function App() {
  return (
  <div style={{backgroundImage:`url(${image})`}} className="App">
    <div className='container-fluid'>
      <Navbar/>
      <Content/>
      <Middleware/>
      <Center/>
      <Downware/>
      <hr/>
      <Footer/>
    </div>
  </div>
  );
}

export default App;