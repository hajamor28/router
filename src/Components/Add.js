import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { Rating } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';



const Add = ({AddMovie}) => {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie]= useState({
    id: uuidv4(),
    title:'',
    description:'',
    posterUrl:'',
    rating:0
  })


  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const HandleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
  }
  const HandleSave=()=>{
    AddMovie(newMovie)
    handleClose()

  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Title</Form.Label>
              <Form.Control onChange={HandleChange} name='title' type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={HandleChange} name='description' type="text" placeholder="Enter Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>poster Url Image</Form.Label>
              <Form.Control onChange={HandleChange} name='posterUrl' type="text" placeholder="Enter poster Url" />
            </Form.Group>
            <Rating
  name="simple-controlled"
  defaultValue={0}
  onChange={(event, newValue) => {
    setNewMovie({...newMovie,rating:newValue});
  }}
  max={10}
/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleSave}>
            add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;