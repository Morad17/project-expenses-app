import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import {useAuth} from "../hooks/Authprovider"
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
//Icons //



const Home = () => {
  const navigate = useNavigate()
  // Login States //
  const [user, setUser] = useState(null)
  const [loadForm, setLoadform] = useState('')
  const [credentials, setCredeuntials] = useState({
    username: "",
    password: ""
  })
  const [register, setRegister] = useState({
    username:"",
    email:"",
    password: "",
  })

  const auth = useAuth()

  const checkUser = () => {
    setUser(localStorage.getItem("username"))

  }

  useEffect(()=> {
    checkUser()
  },[user])

//Login //
  const setDetails = (e) => {
    setCredeuntials(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    auth.loginAction(credentials)
    const loggedUser = localStorage.getItem("username")
    if (loggedUser) {
      try{
        const res = await axios.get("https://project-expenses-app.onrender.com/get-expenses", loggedUser)
        navigate("/expenses")
        if (res.data.length > 0) {
          
        } else {
          navigate("/add-budget")
        }
      } catch (err){
        console.log(err)
      }
    } else {
      console.log("try again")
    }
  }
// Register //
  const setRegistration = (e) => {
    setRegister(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('https://project-expenses-app.onrender.com/register', {"username": register.username})
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container className="home justify-content-center text-center" fluid>
      <Row >
        <h1 className="home-title mt-4 mb-4">Expense Tracker {user}</h1>
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
       
      </Row>
      
      <Row className="login-row justify-content-center mt-3 ">
        <Col className="intro-paragraph" xs={12} md={5}>
            <p>
              To get started Login, Register or proceed as Guest.
            </p>
            <Col className="d-flex justify-content-evenly">
              <Button className="secondary" onClick={()=> setLoadform("login")}>Login</Button>
              <Button className="secondary" onClick={()=> setLoadform("register")}>Register</Button>
              <Button className="secondary" onClick={()=> setLoadform("guest")}>Guest</Button>
            </Col>
        </Col>
        {
          loadForm === "login" ? 
              <Col className="login" sm={12} md={5}>
                <h2>Login</h2>
                <Form onSubmit={handleLogin}>
                  <Form.Group>
                  <Form.Label>
                    Username
                  </Form.Label>
                  <Form.Control required name="username" type="text" onChange={setDetails}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Password
                    </Form.Label>
                    <Form.Control required name="password" type="password" onChange={setDetails}/>
                  </Form.Group>
                  <Button className="secondary" type="submit">Login</Button>
                </Form>
              </Col>
          : loadForm === "register"? 
              <Col className="register" sm={12} md={5}>
              <h2>Register</h2>
              <Form onSubmit={handleRegister}>
                <Form.Group>
                  <Form.Label>
                    Username
                  </Form.Label>
                  <Form.Control required name="username" type="text" onChange={setRegistration}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Email
                  </Form.Label>
                  <Form.Control required name="email" type="text" onChange={setRegistration}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Password
                  </Form.Label>
                  <Form.Control required name="password" type="password" onChange={setRegistration}/>
                </Form.Group>
                    <Button className="secondary"type="submit">Register</Button>
              </Form>
              </Col>
          : loadForm === "guest" ? 
              <Col className="guest" sm={12} md={5}>
                <h2>Guest</h2>
                <p>
                  Guest Allows you to use most features, 
                  but disables others such as metrics.
                </p>
                <Button>Guest Login</Button>
              </Col>
          : null
        }
        
        
        
      </Row>
    </Container>
  )
}

export default Home