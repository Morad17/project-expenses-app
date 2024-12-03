import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'

const Home = () => {

  const [budget, setBudget] = useState()
  const [expenses, setExpenses] = useState()


  //Get Budget //
  const getBudget = async () => {
    try{
      const res = await axios.get("http://localhost:8000/get-budget")
      const data = res.data
      setBudget(data)
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

  return (
    <Container className="home justify-content-center" fluid>
      <Row >
        <h1 className="home-title mt-4">Expense Tracker</h1>
      </Row>
      <Row>
        <Col>
        <h3>Budget</h3>
        <Col>
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
                    
                </tbody>
              </Table>
            })
          }
        </Col>
        </Col>
        <Col>
        <h3>Expenses</h3>
        <Col>
        </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Home