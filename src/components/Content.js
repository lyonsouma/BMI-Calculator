import React,{useState} from 'react'

function Content() {
  const[age, setAge]=useState('');
  const[weight, setWeight]=useState('');
  const[height, setHeight]=useState('');
  return (
    <div>
      <input type='number' placeholder='Enter Your Age ' value={age} onChange={(e)=>setAge(e.target.value)}/>
      <input type='number' placeholder='Enter Your Weight ' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
      <input type='number' placeholder='Enter Your height ' value={height} onChange={(e)=>setHeight(e.target.value)}/>
    </div>
  )
}

export default Content