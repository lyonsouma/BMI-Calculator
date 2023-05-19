// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Content from './components/Content';
import Navbars from './components/Navbar';
import React, {useState} from 'react';
function App() {
  const[age, setAge]= useState('');
  const[weight, setWeight]= useState('');
  const[height, setHeight]= useState('');
  return (
    <div className="App">
     <Navbars
     Weight = {weight}
     SetWeight = {setWeight}
     Height = {height}
     SetHeight ={setHeight}
     />
     <div>
      <Content 
      Age = {age}
      SetAge = {setAge}
      Weight = {weight}
      SetWeight = {setWeight}
      Height = {height}
      SetHeight ={setHeight}
      />
     </div>
    </div>
  );
}

export default App;
