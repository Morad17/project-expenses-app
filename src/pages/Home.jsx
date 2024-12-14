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

  return (
    <Container className="home justify-content-center" fluid>
      <Row >
        <h1 className="home-title mt-4 mb-4">Expense Tracker {}</h1>
      </Row>
      <Row className="justify-content-center">
        <Col className="intro-paragraph" xs={12} md={5}>
        <p>
          Track all your expenses for a project in one app! This app will
          help show you your current budget, your running expenses, and allow you
          to constantly update your expenses as you are planning your Event, to ensure
          you keep to your budget.
        </p>
        </Col>
        <Col className="intro-paragraph" xs={12} md={5}>
          <p>
            To get started Click Add Budget to set your budget and return to home
            to keep track of your expenses
          </p>
          <Button href="/add-budget" className="secondary"><Nav.Link href="add-budget">Add Budget</Nav.Link></Button>
        </Col>
      </Row>
      <Row >
        <Col className="budget-column text-center p-4" xs={12} lg={6}>
          <h3>Budget</h3>
          {
            budget && expenses ?
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Budget</th>
                    <th>Category</th>
                    <th>Running Expenses</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>£{budget.venue}</td>
                    <td><MdStadium className="icon"/> Venue</td>
                    <td>£{expenses.venue}</td>
                  </tr>
                  <tr>
                    <td>£{budget.equipment}</td>
                    <td><FaTools className="icon"/>Equipment</td>
                    <td>£{expenses.equipment}</td>
                  </tr>
                  <tr> 
                    <td>£{budget.performers}</td>
                    <td><TfiMicrophoneAlt className="icon"/>Performers</td>
                    <td>£{expenses.performers}</td>
                  </tr>
                  <tr>
                    <td>£{budget.staff}</td>
                    <td><GrUserWorker className="icon"/>Staff</td>
                    <td>£{expenses.staff}</td>
                  </tr>
                  <tr>
                    <td>£{budget.managerial}</td>
                    <td><GrUserManager className="icon"/> Managerial</td>
                    <td>£{expenses.managerial}</td>
                  </tr>
                  <tr>
                    <td>£{budget.marketing}</td>
                    <td><RiAdvertisementFill className="icon"/>Marketing</td>
                    <td>£{expenses.marketing}</td>
                  </tr>
                  <tr>  
                    <td>£{budget.utility}</td>
                    <td><MdHandyman className="icon"/>Utility</td>
                    <td>£{expenses.utility}</td>
                  </tr>
                  <tr>
                    <td>£{totalBudget}</td>  
                    <td><RiMoneyPoundCircleLine className="icon"/> Total</td>
                    <td>£{totalExpenses}</td>
                  </tr>
                    
                </tbody>
              </Table>
            : 
            <Col>
              <h2>Loading</h2>
              <ColorRing
                visible={true}
                height="160"
                width="160"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </Col>
           
          }
        </Col>
        <Col className="update-expenses text-center p-4"  xs={12} lg={4}>
          <h3>Update Expenses</h3>
          <Form onSubmit={submit}>
                <Form.Group  className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                      <MdStadium className="icon"/>
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control name="venue" type="number" placeholder="Venue" onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                      <FaTools className="icon"/>
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control name="equipment" type="number" placeholder="Equipment"onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                      <TfiMicrophoneAlt className="icon"/>
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control name="performers" type="number" placeholder="Performers"onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                      <GrUserWorker className="icon"/>
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control name="staff" type="number" placeholder="Staff" onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                      <GrUserManager className="icon"/>
                    </Form.Label>
                    <Col sm="5"><span></span>
                    <Form.Control name="managerial" type="number" placeholder="Managerial" onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                     <RiAdvertisementFill className="icon"/>
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control name="marketing" type="number" placeholder="Marketing" onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                      <MdHandyman className="icon"/>
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control name="utility" type="number" placeholder="Utility" onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Col className="justify-content-center">
                    <Button variant="secondary" className="mt-2" type="submit">
                    Submit 
                    </Button>   
                </Col>
                
            </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Home