import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Nav';
import { CiCloudOn } from "react-icons/ci";

export default function Search({setOpenSide, setSearchWord}) {
    
  return (
    <div>
        <Navbar className="bg-body-tertiary">
            <h2>Movie App</h2>
        <Form>
            <Form.Control onChange={(event)=>{ setSearchWord(event.target.value)}} placeholder='Search a movie' type="text" style={{marginLeft:"3rem" , width:"60%"}}/>
        </Form>
        <CiCloudOn style={{cursor:"pointer"}} onClick={()=>setOpenSide(true)} size={30}/>
      </Navbar>
    </div>
  )
}
