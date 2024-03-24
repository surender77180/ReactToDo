import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function AddCard() {
  let[data,setData] = useState([]);
  let [values, setValues] = useState({
    name: "",
    des: "",
    price: ""
  })

  let handleInputChange = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value, });
  };
  function addToList(){
    setData([...data,values]);
  }

  return (
    <>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type='text' value={values.name} name='name' onChange={handleInputChange} placeholder='Product-Name' className="p-1 ms-5 mt-5" />
        <input type='text' value={values.des} name='des' onChange={handleInputChange} placeholder='Product-Des' className="p-1 ms-5" />
        <input type='text' value={values.price} name='price' onChange={handleInputChange} placeholder='Product-Prise' className="p-1 ms-5" />
        <Button variant="outline-success" onClick={addToList} className='ms-4 mb-1' >Add</Button>
      </form>
      {
       data.map(d =>(
        <div>
          <h1>Name: {d.name}</h1>
          <h1>Des: {d.des}</h1>
          <h1>Price: {d.price}</h1>
        </div>
        ))}
    </>
  );
}
