import logo from './logo.svg';
import './App.css';
import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Productive from './components/home/Productive';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Hero/>
     <Features/>
     <Productive/>
    </div>
  );
}

export default App;
