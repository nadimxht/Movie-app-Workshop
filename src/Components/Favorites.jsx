import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
export default function Favorites({favorites ,openSide ,setOpenSide}) {
const handleClose=()=>{
    setOpenSide(false);
}

  return (
    <div>

<Offcanvas show={openSide} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Favorites</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            favorites==[]? (<p>no movies added to favorites</p>) : favorites.map(el=>(<><p>{el.title}</p> <img src={el.posterUrl} width={"40px"} height={"40px"} /></>))
          }
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}
