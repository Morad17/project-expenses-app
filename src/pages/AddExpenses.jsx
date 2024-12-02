import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const AddExpenses = () => {
  return (
    
    <Container className="home" >
        <Row className="expenses">
            <h1>Expenses</h1>
            <h3>Please Fill in all expected expenses for the Project</h3>
            <Form>
                <Form.Group  className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Venue
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control type="number"/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Equipment
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control type="number"/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Performers
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control type="number"/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Staff
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control type="number"/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Managerial
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control type="number"/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Marketing
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control type="number"/>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2 justify-content-center"as={Row}>
                    <Form.Label column sm="1">
                        Utility
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control type="number"/>
                    </Col>
                </Form.Group>
                <Col className="justify-content-center">
                    <Button variant="secondary" className="mt-2" type="submit">
                    Submit
                    </Button>   
                </Col>
                
            </Form>
        </Row>
        <Row className="intro justify-content-center text-center m-4" >
            <h3>Your Total Budget For the Project is</h3>
            <Col xs="8" className="">
                <Form>
                    <Form.Group>
                        <Form.Control type="number" placeholder="Total Budget"/>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default AddExpenses