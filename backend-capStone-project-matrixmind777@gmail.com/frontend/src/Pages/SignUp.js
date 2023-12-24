import React from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap"

const SignUp = () => {
    return (
        <div >
            <Container className='vh-100 d-flex align-items-center justify-content-center '>

                <Row>
                    <Col lg={6}>
                        <Card >
                            <Card.Img className='shadow-lg' variant="top" src="https://m.economictimes.com/thumb/msid-94635807,width-1200,height-900,resizemode-4,imgsize-4700/twitter-blue-subscribers-getting-edit-feature.jpg" />

                        </Card>
                    </Col>
                    <Col lg={6} className='my-auto'>
                        <>
                            <h2 className='text-center mb-3 '>
                                SignUp
                            </h2>
                            <InputGroup className="mb-3 shadow-sm">

                                <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder="name" />
                            </InputGroup>
                            <InputGroup className="mb-3 shadow-sm">
                                <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder="username" />

                            </InputGroup>
                            <InputGroup className="mb-3 shadow-sm">
                                <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder="email" />

                            </InputGroup>
                            <InputGroup className="mb-4 shadow-sm">
                                <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder="Password" />

                            </InputGroup>

                            <div className="d-grid gap-2 shadow">

                                <Button variant="secondary" size="lg">
                                    SignUp
                                </Button>
                            </div>
                            <br />
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-lg-5"><hr className="my-4" /></div>
                                <div className="col-lg-1"><h4>
                                    or</h4></div>
                                <div className="col-lg-5"><hr className="my-4" /></div>
                            </div>
                          
                            <p className='text-center'>
                                Already have Account?
                            </p>
                            <a className='text-decoration-none' href="#">
                                <div className="d-grid gap-2 shadow">

                                    <Button variant="secondary" size="lg">
                                       Login
                                    </Button>
                                </div>
                            </a>
                        </>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignUp;