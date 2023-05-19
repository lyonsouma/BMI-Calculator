// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Content from './components/Content';
import Navbars from './components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbars />
     <div>
      <Content />
     </div>
    </div>
  );
}

export default App;
