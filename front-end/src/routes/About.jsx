import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './About.css'
class About extends React.Component{
    render(){
        return(
            <div className="container">
            <header className="d-flex justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img
                className="bi me-2"
                src="images/MyLogo.png"
                alt="My Logo"
                width="40"
                height="32" 
               />
                <span className="fs-4">About</span>
              </a>
            <Nav variant='pills' defaultActiveKey="/about">
                  <Nav.Item>
                    <Nav.Link href='/'>Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/about'>About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/gallary'>Gallary</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/blog'>Blog</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
            </header>
            <main>
            <Carousel fade>
              <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/CICD.png"
      alt="CICD"
    />
    <Carousel.Caption>
      <h3 className="text-muted">Experience with CI/CD</h3>
      <p className="text-muted">Full experience with DevOps and CI/CD using AWS. Familiar with Jenkins and Kubernetes. Have a excellent view on code deployement.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/fullstack.png"
      alt="Full Stack"
    />

    <Carousel.Caption>
      <h3 className="bg-light text-dark">Full Stack Engineer</h3>
      <p className="bg-light text-dark">Experience with building website. Full stack available. Programing in python, Java, C/C++ and HTML/CSS/JavaScript. Familiar with reactjs and django framework.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/deeplearning.png"
      alt="Deep Learning"
    />

    <Carousel.Caption>
      <h3 className="text-muted">Experience with Deep Learning</h3>
      <p className="text-muted">Experience with building neural network with pytorch. Have a good understanding on deep learning, image identification, CNN.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="container marketing">

<div className="row">
<div className="col-lg-4">
  <img
     src="images/Logo_of_NJUPT.svg" 
     width="140"
     height = "140"
     alt='Logo of NJUPT'
     />
    <h2 className="fw-normal">Nanjing University of Posts and Telecommunications (NJUPT)</h2>
    <p>Bachelor of Computer Science and Technology</p>
    <p><a className="btn btn-secondary" href="http://www.njupt.edu.cn"> Home Page &raquo;</a></p>
  </div>
  <div className="col-lg-4">
    {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
     */}
     <img
     src="images/Logo_of_NEU.svg" 
     className="rounded-circle"
     width="140"
     height = "140"
     alt='Logo of NEW'
     />

    <h2 className="fw-normal">Northeastern University</h2>
    <p>Master's degree in Information Systems.</p>
    <p><a className="btn btn-secondary" href="https://www.northeastern.edu">Home Page &raquo;</a></p>
  </div>
  <div className="col-lg-4">
     <img
     src="images/resume-cv.svg"
     width="140"
     height = "140"
     alt='Resume Logo'
     />

    <h2 className="fw-normal">RESUME</h2>
    <p>Looking for a resume of me? Here is my professional resume!</p>
    <p><a className="btn btn-secondary" href="https://zhenluo.me/resume.pdf">PDF Resume &raquo;</a></p>
  </div>

</div>
</div>

            </main>
          </div>
        );
    };
}
export default About;