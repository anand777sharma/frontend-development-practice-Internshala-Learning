import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ eventKey, children }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (

        <Button
            type="button"
            variant='outline'
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}

function Test() {
    return (
        <Accordion defaultActiveKey="0">
            <Card >
                <Card.Header>
                    <div style={{
                        display: "flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <p>This the first Todo</p>
                        <div style={{
                            margin: "0 0 0 auto"
                        }}>
                            <CustomToggle  eventKey="0"><i class="fa-solid fa-chevron-down"></i></CustomToggle>
                            <Button variant='outline'>delet</Button>
                            <Button variant='outline'>edit</Button>
                        </div>

                    </div>



                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Test;