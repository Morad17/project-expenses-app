import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'

const AddExpenses = () => {

    const [expense, setExpense ] = useState({
        venue:0,
        equipment: 0,
        performers: 0,
        staff: 0,
        managerial: 0,
        marketing: 0,
        utility: 0,
    })

    const [total, setTotal] = useState(0)
    useEffect(()=>{
        const values = Object.values(expense)
        let newTotal = 0
        values.forEach((n)=> {
            newTotal += Number(n)
        })
       setTotal(newTotal)
        console.log(total)
    },[expense])

    const handleChange = (e) => {

        
        setExpense(prev=>({...prev, [e.target.name]:Number(e.target.value) }))

       
    }
   

    const submit = async (e) => {
        console.log(expense)
        e.preventDefault()
        try{
            await axios.put("http://localhost:8000/add-expenses", expense)
            console.log(expense+"sent")
        } catch(err) {
            console.log(err)
        }
    }

  return (
    
    <Container className="home" >
        <Row className="expenses">
            <h1>Expenses</h1>
            <h3>Please Fill in all expected expenses for the Project</h3>
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
        </Row>
        {/* Total Budget */}
        <Row className="intro justify-content-center text-center m-4" >
            <h3>Your Total Budget For the Project is</h3>
            <Col xs="8" className="">
                <h3>£{total}</h3>
            </Col>
        </Row>
    </Container>
  )
}

export default AddExpenses