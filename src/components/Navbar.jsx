import { Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'



const Navbar = () => {
  return (
    <Nav className="home-navbar justify-content-between" variant="tabs" defaultActiveKey="/home">  
        <Nav.Item className="ps-3">
            <Nav.Link href="/" >Home</Nav.Link>
        </Nav.Item>
        <Col className="d-flex justify-content-around" sm={4}>
          <Nav.Item>
              <Nav.Link href="/add-budget" >Add/Update Budget</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link >Metrics</Nav.Link>
          </Nav.Item>
        </Col>
        
    </Nav>
  )
}

export default Navbar