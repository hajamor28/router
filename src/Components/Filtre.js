import React from 'react'
import { Rating } from '@mui/material';
import { Form, } from 'react-bootstrap'

const Filtre = ({rate,setSearch,setRate}) => {
    return (
        <div>
            <Form style={{ display: 'flex' }}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control onChange={(e)=> setSearch(e.target.value)} style={{ width: '300px' }} type="text" placeholder="Enter title" />
                </Form.Group>
                <Rating
                    name="simple-controlled"
                    value={rate}
                    max={10}
                    onChange={(event, value) => setRate(value)}
                />
            </Form>
        </div>
    )
}

export default Filtre
