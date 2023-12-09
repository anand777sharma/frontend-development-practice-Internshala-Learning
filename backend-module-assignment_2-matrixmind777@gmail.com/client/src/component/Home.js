import Accordion from 'react-bootstrap/Accordion';
import { Container, Form, Tabs, Tab, Card, Button } from 'react-bootstrap';
import "./Home.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Home() {

    const value = 0.66;

    return (
        <>
            {/* <Container className="mb-3 mt-3">
                input field
                <Form.Label htmlFor="inputPassword5" className="w-25">
                    Enter Todo
                </Form.Label>
                <Form.Control
                    type="Text"
                    id="todo"
                    placeholder="i want to complete...."
                    aria-describedby="todo"
                />
            </Container> */}

            <Container className="row mx-auto mt-5">
                <Container className='col-lg-7'>
                    <Container>
                        {/* tabs */}
                        <Tabs
                            defaultActiveKey="PendingTodos"
                            id="justify-tab-example"
                            className="mb-3"
                            justify
                        >
                            <Tab eventKey="allTodo" title="All Todo">
                                <Accordion defaultActiveKey="0" >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>All Todo</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Tab>
                            <Tab eventKey="PendingTodos" title="Pending Todos">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Pending Todos</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Tab>
                            <Tab eventKey="completedTodos" title="Completed Todos">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Completed todos</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Tab>

                        </Tabs>






                    </Container>
                </Container>
                <Container className='col-lg-5 text-center'>
                    {/* todo Editting Section */}
                    <Card className='border-0'>

                        <Card.Body>
                            <Card.Title>Add Todo</Card.Title>

                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    {/* <Form.Label>Enter Todo</Form.Label> */}
                                    <Form.Control type="text" placeholder="Enter Todo" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    {/* <Form.Label>Describe Todo</Form.Label> */}
                                    <Form.Control as="textarea" rows={3} placeholder="Describe Your Todo..." />
                                </Form.Group>
                            </Form>

                            <Button variant="primary">Save Todo </Button>
                            
                        </Card.Body>
                    </Card>

                    <Card className='border-0' >
                      
                        <Card.Body>
                            <Card.Title>Your Progress</Card.Title>
                            <div style={{ width: 150, height: 150, margin: "20px auto " }}>
                                <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </>
    );

}

export default Home;
