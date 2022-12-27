import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Github from '../assets/github.png'
import Linked from '../assets/linkedin.webp'
import Med from '../assets/medium.png'
import ListGroup from 'react-bootstrap/ListGroup';

function Footer(){
    return(
        <footer className='footer m-auto'>
     <ListGroup horizontal>
      <ListGroup.Item><a href="https://github.com/overtonr" target="_blank" rel="noreferrer"><img src={Github} alt="github icon" height="25px"></img></a></ListGroup.Item>
      <ListGroup.Item><a href="https://www.linkedin.com/in/rebecca-overton" target="_blank" rel="noreferrer"><img src={Linked} alt="linkedin icon" height="20px"></img></a></ListGroup.Item>
      <ListGroup.Item><a href="https://medium.com/@overton.rm" target="_blank" rel="noreferrer"><img src={Med} alt="medium icon" height="25px"></img></a></ListGroup.Item>
    </ListGroup>
      </footer>
      
    )
};

export default Footer;