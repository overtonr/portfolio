import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Card from 'react-bootstrap/Card';
import Pfp from '../../src/assets/pfp.png';

function About(){
    return (
    <>
      <div className="about">
        <h1>hi, i'm rebecca!</h1>
        <Card.Img id= "pfp" variant="top" src={Pfp} style={{ width: '27vw'}}/>
        <Card>
          
          <Card.Body id= "form" style={{ width: '75vw'}}>
            <Card.Title>about me:</Card.Title>
            <Card.Text style={{ width: '75vw'}}>
              <p>Certified full stack developer interested in professional opportunities that allow me to expand my technical knowledge. Currently a Hospital Assistant at UC San Francisco Health Inpatient Psychiatric Unit and recent graduate from UC Berkeley's Full Stack Web Development Certification Program. Team player with great technical skills, clear communication, and an excellent work ethic.</p>
              
            </Card.Text>
            <Card.Title>background:</Card.Title>
            <Card.Text style={{ width: '75vw'}}>
              <p>I started my professional career in 2012 as a volunteer surgery receptionist at Sutter Health in 2012. Since then I have had many career opportunities that have taught me various soft skills as well as technical skills.</p>
              
              <p>I have had various jobs that include a stock associate lead, teller/customer service representative, various hospital assistant roles, and a few internships and board positions.</p>
              
              <p> I studied Psychology with an emphasis on Child Development at UC San Diego and graduated in December of 2020. I am excited to integrate my knowledge of healthcare practices with my various technical skills.</p>
            </Card.Text>
            
          </Card.Body>
        </Card>
        <p></p>
        </div>
        </>
      );
};

export default About;