import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const Home = () => {

  const [budget, setBudget] = useState()
  const [expenses, setExpenses] = useState()
  const [total, setTotal] = useState(0)

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
      const res = await axios.get("http://localhost:8000/get-budget")
      const data = res.data
      setBudget(data)
      const oldValues = data[0]
      delete oldValues.id
      const values = Object.values(oldValues)
      let newTotal = 0
      values.forEach((n)=> {
          newTotal += Number(n)
      })
      console.log(newTotal)
      setTotal(newTotal)
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
      const res = await axios.get("http://localhost:8000/get-expenses")
      const data = res.data
      setExpenses(data)
      console.log(data)
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
    console.log(budget)
    e.preventDefault()
    try{
        await axios.put("http://localhost:8000/new-expenses", newExpenses)
        console.log(newExpenses+"sent")
        navigate(0)
    } catch(err) {
        console.log(err)
    }
}

  return (
    <Container className="home justify-content-center" fluid>
      <Row >
        <h1 className="home-title mt-4 mb-4">Expense Tracker</h1>
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
          <Button className="secondary">Add Budget</Button>
        </Col>
      </Row>
      <Row >
        <Col className="budget-column text-center p-4" xs={12} lg={4}>
          <h3>Budget</h3>
          {
            budget && budget.map((b)=> {
              return <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Budget</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Venue</td>
                    <td>£{b.venue}</td>
                  </tr>
                  <tr>
                    <td>Equipment</td>
                    <td>£{b.equipment}</td>
                  </tr>
                  <tr> 
                    <td>Performers</td>
                    <td>£{b.performers}</td>
                  </tr>
                  <tr>
                    <td>Staff</td>
                    <td>£{b.staff}</td>
                  </tr>
                  <tr>
                    <td>Managerial</td>
                    <td>£{b.managerial}</td>
                  </tr>
                  <tr>
                    <td>Marketing</td>
                    <td>£{b.marketing}</td>
                  </tr>
                  <tr>  
                    <td>Utility</td>
                    <td>£{b.utility}</td>
                  </tr>
                  <tr>  
                    <td>Total</td>
                    <td>£{total}</td>
                  </tr>
                    
                </tbody>
              </Table>
            })
          }
        </Col>
        <Col className="update-expenses text-center p-4"  xs={12} lg={4}>
          <h3>Update Expenses</h3>
          <Form onSubmit={submit}>
                <Form.Group  className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Venue (£)
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control name="venue" type="number" onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Equipment (£)
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control name="equipment" type="number" onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Performers (£)
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control name="performers" type="number" onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Staff (£)
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control name="staff" type="number" onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Managerial (£)
                    </Form.Label>
                    <Col sm="5"><span></span>
                    <Form.Control name="managerial" type="number" onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Marketing (£)
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control name="marketing" type="number" onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Utility (£)
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control name="utility" type="number" onChange={handleChange} required/>
                    </Col>
                </Form.Group>
                <Col className="justify-content-center">
                    <Button variant="secondary" className="mt-2" type="submit">
                    Submit 
                    </Button>   
                </Col>
                
            </Form>
        </Col>
        <Col className="current-expenses text-center p-4"  xs={12} lg={4}>
          <h3>Current Expenses</h3>
          {
            expenses && expenses.map((e)=> {
              return <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Budget</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Venue</td>
                    <td>£{e.venue}</td>
                  </tr>
                  <tr>
                    <td>Equipment</td>
                    <td>£{e.equipment}</td>
                  </tr>
                  <tr> 
                    <td>Performers</td>
                    <td>£{e.performers}</td>
                  </tr>
                  <tr>
                    <td>Staff</td>
                    <td>£{e.staff}</td>
                  </tr>
                  <tr>
                    <td>Managerial</td>
                    <td>£{e.managerial}</td>
                  </tr>
                  <tr>
                    <td>Marketing</td>
                    <td>£{e.marketing}</td>
                  </tr>
                  <tr>  
                    <td>Utility</td>
                    <td>£{e.utility}</td>
                  </tr>
                    
                </tbody>
              </Table>
            })
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Home