import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function AddCard() {

  let [values, setValues] = useState({
    name:"",
    des:"",
    prise:""
  })

  let handleInputChange=(e)=>{
    let {name, value} = e.target;
    setValues({...values, [name]:value,});
  };

  return (
    <>
    <table>
    <th>Name</th>
    <th>Des</th>
    <th>Pries</th>
    <tr>{values.name}</tr>
    <tr>{values.des}</tr>
    <tr>{values.prise}</tr>
    </table>
      <div>
        <input type='text' value={values.name} name='name' onChange={handleInputChange} placeholder='Product-Name'  className="p-1 ms-5 mt-5" />
        <input type='text' value={values.des} name='des' onChange={handleInputChange} placeholder='Product-Des'  className="p-1 ms-5"/>
        <input type='text' value={values.prise} name='prise' onChange={handleInputChange} placeholder='Product-Prise'  className="p-1 ms-5"/>
        <Button variant="outline-success" onClick={values} className='ms-4 mb-1' >Add</Button>
      </div>

      
    </>
  );
}
