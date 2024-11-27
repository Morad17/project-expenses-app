import Nav from 'react-bootstrap/Nav'



const Navbar = () => {
  return (
    <Nav justify className="home-navbar" fill variant="tabs" defaultActiveKey="/home">  
        <Nav.Item>
            <Nav.Link >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link >Add Expenses</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link >Metrics</Nav.Link>
        </Nav.Item>
    </Nav>
  )
}

export default Navbar