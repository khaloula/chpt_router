import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const AddMovie = (add) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [rate, setRate] = useState("")
const [posterUrl, setPosterUrl] = useState("")

const handleTitle =(e)=>{
    setTitle(e.target.value)
}
const handleDescription =(e)=>{
    setDescription(e.target.value)
}
const handleRate =(e)=>{
    setRate(e.target.value)
}
const handlePosterUrl =(e)=>{
    setPosterUrl(e.target.value)
}


const handleMovie = (e) =>{
    let newMovie = {title,description,rate,posterUrl}
    add(newMovie)
}


  return (
    <div>
          <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Movie Title</Form.Label>
    <Form.Control type="text" placeholder="Enter Title" value={title}onChange={handleTitle}/>
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter Description"value={description}onChange={handleDescription} />
    <Form.Label>Rates</Form.Label>
    <Form.Control type="Number" placeholder="Enter Rate"value={rate}onChange={handleRate} />
    <Form.Label>PosterUrl</Form.Label>
    <Form.Control type="Url" placeholder="Enter Poster url"value={ posterUrl }onChange={handlePosterUrl} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleMovie()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie