import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Contact(){
    return (
        <>
        <h1>leave your contact info and say hello!</h1>
        <Form id= "form" style={{ width: '75vw'}}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>name:</Form.Label>
            <Form.Control type="name" placeholder="your name" />
        </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>email:</Form.Label>
            <Form.Control type="email" placeholder="your email" />
          </Form.Group>
    
          
      <FloatingLabel controlId="floatingTextarea2" label="leave me a message!">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '80px' }}
        />
      </FloatingLabel>
          <Button variant="primary" type="submit" style={{ height: '35px' }}>
            submit
          </Button>
        </Form>
        </>
      );
};

export default Contact;