import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router'
//Icons //
import { MdStadium, MdHandyman } from "react-icons/md"
import { FaTools } from "react-icons/fa"
import { TfiMicrophoneAlt } from "react-icons/tfi"
import { GrUserWorker, GrUserManager } from "react-icons/gr"
import { RiAdvertisementFill, RiMoneyPoundCircleLine } from "react-icons/ri"

const AddBudget = () => {

    const [budget, setBudget ] = useState({
        venue:0,
        equipment: 0,
        performers: 0,
        staff: 0,
        managerial: 0,
        marketing: 0,
        utility: 0,
        total: 0
    })
 const [total, setTotal] = useState(0)

    const navigate = useNavigate()

    // Set Total Budgets //
    useEffect(()=>{
        const values = Object.values(budget)
        let newTotal = 0
        values.forEach((n)=> {
            newTotal += Number(n)
        })
       setTotal(newTotal)
        console.log(total)
    },[budget, total])

    const handleChange = (e) => {
        setBudget(prev=>({...prev, [e.target.name]:Number(e.target.value) }))
    }
   

    const submit = async (e) => {
        e.preventDefault()
        try{
            await axios.put("https://project-expenses-app.onrender.com/add-budget", budget)
            console.log("sent successfully")
        } catch(err) {
            console.log(err)
        }
    }
    // Reset All Budgets //
    const resetBudget = async () => {
        try{
            await axios.put("https://project-expenses-app.onrender.com/reset-budget")
            console.log("reset Success")
            navigate(0)
        } catch(err) {
            console.log(err)
        }
    }

  return (
    
    <Container className="budget justify-content-center" >
        <Row className="justify-content-center text-center mt-4">
            <h1>Forcaseted Budget</h1>
            <h3>Please Fill in all expected expenses for the Project</h3>
            <Col className="update-expenses text-center  p-4"  xs={12} lg={8}>
                <Form onSubmit={submit}>
                    <Form.Group  className="mt-2 form-group form-group-venue"as={Row}>
                        <Form.Label column sm="1">
                            <MdStadium className="icon"/>
                        </Form.Label>
                        <Col >
                        <Form.Control name="venue" type="number" placeholder="Venue" onChange={handleChange} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2 form-group form-group-equipment"as={Row}>
                        <Form.Label column sm="1">
                            <FaTools className="icon"/>
                        </Form.Label>
                        <Col>
                        <Form.Control name="equipment" type="number" placeholder="Equipment"onChange={handleChange} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2 form-group form-group-performers"as={Row}>
                        <Form.Label column sm="1">
                            <TfiMicrophoneAlt className="icon"/>
                        </Form.Label>
                        <Col>
                        <Form.Control name="performers" type="number" placeholder="Performers"onChange={handleChange} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2 form-group form-group-staff"as={Row}>
                        <Form.Label column sm="1">
                            <GrUserWorker className="icon"/>
                        </Form.Label>
                        <Col >
                        <Form.Control name="staff" type="number" placeholder="Staff" onChange={handleChange} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2 form-group form-group-managerial"as={Row}>
                        <Form.Label column sm="1">
                            <GrUserManager className="icon"/>
                        </Form.Label>
                        <Col>
                        <Form.Control name="managerial" type="number" placeholder="Managerial" onChange={handleChange} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2 form-group form-group-marketing"as={Row}>
                        <Form.Label column sm="1">
                        <RiAdvertisementFill className="icon"/>
                        </Form.Label>
                        <Col >
                        <Form.Control name="marketing" type="number" placeholder="Marketing" onChange={handleChange} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mt-2 form-group form-group-utility"as={Row}>
                        <Form.Label column sm="1">
                            <MdHandyman className="icon"/>
                        </Form.Label>
                        <Col >
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
        {/* Total Budget */}
        <Row className="intro justify-content-center text-center m-4" >
            <h3>Your Total Budget For the Project is</h3>
            <Col xs="8" className="">
                <h3>£{total}</h3>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Reset All Budgets</h3>
                <Button variant="secondary" className="mt-2" type="submit" onClick={resetBudget}>
                    Reset
                </Button>
            </Col>
        </Row>

    </Container>
  )
}

export default AddBudget
