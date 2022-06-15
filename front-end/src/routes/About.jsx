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
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
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
      src="images/MainBio.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="container marketing">

<div className="row">
  <div className="col-lg-4">
    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

    <h2 className="fw-normal">Heading</h2>
    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
    <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
  </div>
  <div className="col-lg-4">
    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

    <h2 className="fw-normal">Heading</h2>
    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
    <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
  </div>
</div>
</div>

            </main>
          </div>
        );
    };
}
export default About;