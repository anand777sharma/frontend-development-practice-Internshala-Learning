import React from 'react'
import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap"

const Login = () => {
    return (
        <div>
            <Container>
                
                <Row>
                    <Col lg={6}>
                        <Card >
                            <Card.Img variant="top" src="https://m.economictimes.com/thumb/msid-94635807,width-1200,height-900,resizemode-4,imgsize-4700/twitter-blue-subscribers-getting-edit-feature.jpg" />

                        </Card>
                    </Col>
                    <Col lg={6}>
                        <>
                            <InputGroup className="mb-3">

                                <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder="name" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder="username" />

                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder="email" />

                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder="Password" />

                            </InputGroup>


                        </>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;