import Button from 'react-bootstrap/Button';
import React from 'react'
import { useState } from 'react';

export default function Todo() {

  let [cat, setCat] = useState()
  let [data, setData] = useState([])

  return (
    <>
      <h1 className="m-4" >Todo-List</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' value={cat} name='cname' onChange={(eve) => setCat(eve.target.value)} placeholder='Add dictionary' className="p-1 m-4" />
        <Button variant="outline-success" onClick={() => setData([...data, cat])} className='mb-1' >Add</Button>

        {data.map((dt)=>{
          return (<ol>{dt}</ol>)
        })}
       

      </form>
    </>

  )
}
