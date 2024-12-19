import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Table, Nav } from 'react-bootstrap'
import { ColorRing } from 'react-loader-spinner'
import { useNavigate } from 'react-router'
//Icons //
import { MdStadium, MdHandyman } from "react-icons/md"
import { FaTools } from "react-icons/fa"
import { TfiMicrophoneAlt } from "react-icons/tfi"
import { GrUserWorker, GrUserManager } from "react-icons/gr"
import { RiAdvertisementFill, RiMoneyPoundCircleLine } from "react-icons/ri"
import { SiTicktick } from "react-icons/si";



const Home = () => {

  const [budget, setBudget] = useState()
  const [expenses, setExpenses] = useState()
  const [totalBudget, setTotalBudget] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)

  const [newExpenses, setNewExpenses ] = useState({
    venue:0,
    equipment: 0,
    performers: 0,
    staff: 0,
    managerial: 0,
    marketing: 0,
    utility: 0,
  })


  const navigate = useNavigate()

  //Get Budget //
  const getBudget = async () => {
    try{
      const res = await axios.get("https://project-expenses-app.onrender.com/get-budget")
      const data = res.data[0]
      setBudget(data)
      delete data.id
      const values = Object.values(data)
      let newTotal = 0
      values.forEach((n)=> {
          newTotal += Number(n)
      })
      setTotalBudget(newTotal)
    } catch(err){
      console.log(err)
    }
  } 
  useEffect(()=>{
    getBudget()
  }, [])
  // Get Expenses //
  const getExpenses = async () => {
    try{
      const res = await axios.get("https://project-expenses-app.onrender.com/get-expenses")
      const data = res.data[0]
      setExpenses(data)
      delete data.id
      const values = Object.values(data)
      let newTotal = 0
      values.forEach((n)=> {
        newTotal += Number(n)
      })
      setTotalExpenses(newTotal)
    } catch(err){
      console.log(err)
    }
  } 
  useEffect(()=>{
    getExpenses()
  }, [])

  //Update Expenses //


  const handleChange = (e) => {
    setNewExpenses(prev=>({...prev, [e.target.name]:Number(e.target.value) }))
    const catId = document.getElementById( e.target.name + '-tick')
    console.log(catId)
    catId.style.display = "block"
  }
  const submit = async (e) => {
    e.preventDefault()
    try{
        await axios.put("https://project-expenses-app.onrender.com/new-expenses", newExpenses)
        console.log("sent successfully")
        navigate(0)
    } catch(err) {
        console.log(err)
    }
  }

  const inputTicked = () => {
    return <SiTicktick className="tick-icon"/>
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
          <Form.Group>
            <Form.Label>
              Username
            </Form.Label>
            <Form.Control name="username" type="text"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control name="password" type="password"/>
          </Form.Group>
          <Button className="secondary"type="submit">Login</Button>
        </Col>
        <Col className="register" sm={12} md={3}>
          <h2>Register</h2>
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
        </Col>
        <Col className="guest" sm={12} md={3}>
          <h2>Guest</h2>
          <p>
            Guest Allows you to use most features, but disable others such as metrics.
          </p>
          <Button>Guest Login</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home