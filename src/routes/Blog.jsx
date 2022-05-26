import Nav from 'react-bootstrap/Nav';
import React from 'react';
function Head() {
    return(
        <div className="container">
        <header className="d-flex justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
            <span className="fs-4">Blog</span>
          </a>
        <Nav variant='pills' defaultActiveKey="/blog">
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
        <div></div>
    );
}
class Blog extends React.Component{
    render(){
        return(
            <div>
                <Head />
                <Body />
            </div>
        )
    };
}
export default Blog;