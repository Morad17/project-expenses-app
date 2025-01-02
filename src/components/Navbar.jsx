import { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { useAuth } from '../hooks/Authprovider'

const Navbar = () => {
  const [user, setUser ] = useState('')
  const checkUser = () => {
    setUser(localStorage.getItem("username"))
  }

  useEffect(()=> {
    checkUser()
  },[user])
  const auth = useAuth()
  const logout = () => {
    auth.logout()
    setUser('')
  }

  return (
    <Nav className="home-navbar justify-content-between align-items-center" variant="tabs" defaultActiveKey="/home">  
        <Col>
          <Nav.Item className="ps-3" sm={4}>
            <Nav.Link href="/" >Home</Nav.Link>
          </Nav.Item>
        </Col>
        <Col sm={4}>
          {user && <p>Welcome Back {user}</p>}
        </Col>
        <Col className="d-flex justify-content-around" sm={4}>
          <Nav.Item>
              <Nav.Link href="/add-budget" >Add/Update Budget</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link >Metrics</Nav.Link>
          </Nav.Item>
          {user && <Nav.Item>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav.Item>}
        </Col>
        
    </Nav>
  )
}

export default Navbar