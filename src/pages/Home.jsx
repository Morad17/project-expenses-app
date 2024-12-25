import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Table, Nav } from 'react-bootstrap'
//Icons //



const Home = () => {
// Login States //
const [username, setUsername ] = useState('')
const [password,setPassword] = useState('')

useEffect(()=> {

},[])

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.post("https://project-expenses-app.onrender.com/login", {username, password})
      return console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container className="home justify-content-center text-center" fluid>
      <Row >
        <h1 className="home-title mt-4 mb-4">Expense Tracker {}</h1>
      </Row>
      <Row className="flex-column align-content-center">
        <Col className="intro-paragraph justify-content-center" xs={12} md={5}>
        <p>
          Track all your expenses for a project in one app! This app will 
          help show you your current budget, your running expenses, and allow you
          to constantly update your expenses as you are planning your Event, to ensure
          you keep to your budget.
        </p>
        </Col>
        <Col className="intro-paragraph" xs={12} md={5}>
          <p>
            To get started Login, Register or proceed as Guest.
          </p>
          <Col className="d-flex justify-content-evenly">
            <Button className="secondary">Login</Button>
          <Button className="secondary">Register</Button>
          <Button className="secondary">Guest</Button>
          </Col>
        
        </Col>
      </Row>
      <Row className="login-row justify-content-center mt-3 ">
        <Col className="login" sm={12} md={3}>
          <h2>Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group>
            <Form.Label>
              Username
            </Form.Label>
            <Form.Control name="username" type="text" onChange={(e)=> setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Password
              </Form.Label>
              <Form.Control name="password" type="password" onChange={(e)=> setPassword(e.target.value)}/>
            </Form.Group>
            <Button className="secondary" type="submit">Login</Button>
          </Form>
          
        </Col>
        <Col className="register" sm={12} md={3}>
          <h2>Register</h2>
          <Form>
            <Form.Group>
              <Form.Label>
                Username
              </Form.Label>
              <Form.Control name="username" type="text"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Email
              </Form.Label>
              <Form.Control name="email" type="text"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Password
              </Form.Label>
              <Form.Control name="password" type="password"/>
            </Form.Group>
            <Button className="secondary"type="submit">Register</Button>
          </Form>
        </Col>
        <Col className="guest" sm={12} md={3}>
          <h2>Guest</h2>
          <p>
            Guest Allows you to use most features, but disables others such as metrics.
          </p>
          <Button>Guest Login</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home