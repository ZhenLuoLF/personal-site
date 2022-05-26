
import React from 'react';
import Nav from 'react-bootstrap/Nav'
import './App.scss';

function Head() {
  return (
    <div className="container">
    <header className="d-flex justify-content-center py-3 mb-4 border-bottom">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Zhen Luo</span>
      </a>
    <Nav variant='pills' defaultActiveKey="/">
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
  </div>
  );
}

function Body() {
  return(
    <div className='container'>
        <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="images/MainBio.jpg" class="d-block mx-lg-auto img-fluid" alt="Main Bio" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">A photographer who can't play the guitar is not a good programmer. :P</h1>
        <p class="lead">I am a student at Northeastern University. Focus on back-end software development and CI/CD, DevOps workflow. I'm trying to explore web3 and machine learning areas. I also enjoy taking photographs and playing guitar. </p>
        {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div> */}
      </div>
    </div>
  </div>
    </div>
  );
}

class App extends React.Component{
  render() {
    return (
      <div>
    <Head />
    <Body />
    </div>
    );
  }
}
export default App;
