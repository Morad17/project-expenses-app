import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

const Home = () => {
  return (
    <Container className="home" >
        <Row className="intro" >
            <h1>Project Expense Tracker</h1>
            <h3>Please Enter Your Total Budget For the Project</h3>
            <Col xs className="">
                <Form>
                    <Form.Group>
                        <Form.Control type="number" placeholder="Total Budget"/>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
        <Row className="expenses">
            <h1>Expenses</h1>
            <h3>Please Fill in all expected expenses for the Project</h3>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label>
                        Venue
                    </Form.Label>
                    <Form.Control type="number"/>
                    <Form.Label>
                        Equipment
                    </Form.Label>
                    <Form.Control type="number"/>
                    <Form.Label>
                        Performers
                    </Form.Label>
                    <Form.Control type="number"/>
                    <Form.Label>
                        Staff
                    </Form.Label>
                    <Form.Control type="number"/>
                    <Form.Label>
                        Managerial
                    </Form.Label>
                    <Form.Control type="number"/>
                    <Form.Label>
                        Marketing
                    </Form.Label>
                    <Form.Control type="number"/>
                    <Form.Label>
                        Utility
                    </Form.Label>
                    <Form.Control type="number"/>
                </Form.Group>
            </Form>
            <Col>

            </Col>
        </Row>
    </Container>
  )
}

export default Home