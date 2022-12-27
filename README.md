
# My React Portfolio

[Take a look!](https://overtonr.github.io/portfolio/)


## Description
Welcome to my portfolio! This application allows me to showcase new skills, as well as some older projects. It contains a navigation bar that allows users to navigate to different pages.

<br>

```js
function Header(props) {
  return (
    <span>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#about"
                onClick={() => props.handlePageChange("About")}
                className={props.currentPage === "About" ? "nav-link active" : "nav-link"}>about me</Nav.Link>
              <Nav.Link href="#portfolio"
                onClick={() => props.handlePageChange("Portfolio")}
                className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>portfolio</Nav.Link>
              <Nav.Link href="#contact"
                onClick={() => props.handlePageChange("Contact")}
                className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}>contact</Nav.Link>
              <Nav.Link href="#resume"
                onClick={() => props.handlePageChange("Resume")}
                className={props.currentPage === "Resume" ? "nav-link active" : "nav-link"}>resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </span>
  );
};

```

<br>

The portfolio page contains some of my highlighted projects with some information about them. It also contains a form for users to reach out and connect (with validation for the email):

```
```
an external link to a PDF of my resume:

```js
<Card id= "form" style={{ width: '75vw'}}>
      <Card.Body>download my <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1gRL_PMn043xxQycdKu3EYVnzqeMdDL7v/view?usp=sharing">resume</a>.</Card.Body>
    </Card>

```
As well as some footer links to see more about me and my projects! (GitHub, LinkedIn, and Medium).


<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<br>

## Table of Contents
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Questions](#questions)

<br>


## Usage
Navigate to the [deployed link](https://overtonr.github.io/portfolio/) and follow the navigation links.

<br>

## Technologies Used:
* Github
* CSS
* JavaScript
* React
* React Bootstrap
* gh-page node package
* VS Code

<br>

## License
This application is covered under the MIT License

<br>

## Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rebecca-overton/)

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/overtonr)
