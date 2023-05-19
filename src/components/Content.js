import React from 'react'

function Content({Age,SetAge,Weight,SetWeight,Height,SetHeight}) {
  // const[age, setAge]= useState('');
  // const[weight, setWeight]= useState('');
  // const[height, setHeight]= useState('');
  return (
    <div>
      <input type='number' placeholder='Age' value={Age} onChange={(e)=>SetAge(e.target.value)}/>
      <input type='number' placeholder='Weight' value={Weight} onChange={(e)=>SetWeight(e.target.value)}/>
      <input type='number' placeholder='Height' value={Height} onChange={(e)=>SetHeight(e.target.value)}/>
    </div>
  )
}

export default Content