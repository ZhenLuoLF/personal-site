import Nav from 'react-bootstrap/Nav';
import React from 'react';
import './Contact.css'
class Contact extends React.Component{
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
                <span className="fs-4">Contact</span>
              </a>
            <Nav variant='pills' defaultActiveKey="/contact">
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

    <body>
    <div className="container px-4 py-5" id="featured-3">
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
          <a href="https://www.linkedin.com/in/zhenluo222/"><img
          src="images/linkedin.png"
          alt="Linkedin"
          width="36pt"
          height="36pt"
           /></a>
        <h2>LinkedIn Profile</h2>
        <p>Click the LinkedIn icon and connect with me!</p>
      </div>
      <div className="feature col">
        <a href="mailto:louzhufrank@outlook.com">
          <img
          src="images/email-icon.png"
          alt="email"
          width="36pt"
          height="36pt"
          />
        </a>
        <h2>Email address</h2>
        <p>Email me at louzhufrank@outlook or just click the icon!</p>
      </div>
      <div className="feature col">
        <a href="https://github.com/ZhenLuoLF">
          <img
          src="images/GitHub-icon.png"
          alt="GitHub"
          width="36pt"
          height="36pt"
        /></a>
        <h2>Github</h2>
        <p>Visit my GitHub and discover interesting things!</p>
      </div>
    </div>
  </div>
    </body>
          </div>
          
        );
    };
}
export default Contact;