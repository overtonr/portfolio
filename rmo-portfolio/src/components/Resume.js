import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function Resume(){
    return (
    <>
    <div id="resume">
    <h1>explore my skills:</h1>
    <Card id= "form" style={{ width: '75vw'}}>
      <Card.Body>download my <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1gRL_PMn043xxQycdKu3EYVnzqeMdDL7v/view?usp=sharing">resume</a>.</Card.Body>
    </Card>
        <Accordion id= "form" style={{ width: '75vw'}}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>front-end skills</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>back-end skills</Accordion.Header>
            <Accordion.Body>
            <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>Model View Controller (MVC)</li>
            <li>Progressive Web Applications (PWA)</li>
            <li>REST</li>
        
            </ul>
              
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>dev tools</Accordion.Header>
            <Accordion.Body>
            <ul>
            <li>Git</li>
            <li>NPM</li>
            <li>Jest</li>
            <li>Webpack</li>
            </ul>
              
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>database skills</Accordion.Header>
            <Accordion.Body>
            <ul>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>NoSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>GraphQL</li>
        
            </ul>
              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
        </>
      );
};

export default Resume;