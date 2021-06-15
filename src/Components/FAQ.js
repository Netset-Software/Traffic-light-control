import React from 'react'
import  { Accordion, Card } from 'react-bootstrap'
const FAQ = () => {
        return (
            <>
                <section className="faq_section py-5">
                    <div className="container">
                    <div className="row">
                        <aside className="col-md-12 col-sm-12">
                             <h5>Frequently Asked Questions</h5>
                        </aside>
                        <aside className="col-lg-12 mt-4">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                What is blood pressure?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>Blood pressure is the pressure of blood pushing against the walls of your arteries. Arteries carry blood from your heart to other parts of your body.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                                What do blood pressure numbers mean?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>Blood pressure is measured using two numbers:<br />
                                The first number, called systolic blood pressure, measures the pressure in your arteries when your heart beats.
                                The second number, called diastolic blood pressure, measures the pressure in your arteries when your heart rests between beats.
                                If the measurement reads 120 systolic and 80 diastolic, you would say, “120 over 80,” or write, “120/80 mmHg.”</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                                What are normal blood pressure numbers?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>A normal blood pressure level is less than 120/80 mmHg.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                                What is high blood pressure (hypertension)?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>High blood pressure, also called hypertension, is blood pressure that is higher than normal.
Your health care team can diagnose high blood pressure and make treatment decisions by reviewing your systolic and diastolic blood pressure levels and comparing them to levels found in certain guidelines.
The guidelines used to diagnose high blood pressure may differ from health care professional to health care professional:
Some health care professionals diagnose patients with high blood pressure if their blood pressure is consistently 140/90 mm Hg or higher.2 This limit is based on a guideline released in 2003, as seen in the table below.
Other health care professionals diagnose patients with high blood pressure if their blood pressure is consistently 130/80 mm Hg or higher.1 This limit is based on a guideline released in 2017</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
                                What do blood pressure numbers mean?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>Blood pressure is measured using two numbers:<br />
                                The first number, called systolic blood pressure, measures the pressure in your arteries when your heart beats.
                                The second number, called diastolic blood pressure, measures the pressure in your arteries when your heart rests between beats.
                                If the measurement reads 120 systolic and 80 diastolic, you would say, “120 over 80,” or write, “120/80 mmHg.”</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
                                What do blood pressure numbers mean?
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                <Card.Body>Blood pressure is measured using two numbers:<br />
                                The first number, called systolic blood pressure, measures the pressure in your arteries when your heart beats.
                                The second number, called diastolic blood pressure, measures the pressure in your arteries when your heart rests between beats.
                                If the measurement reads 120 systolic and 80 diastolic, you would say, “120 over 80,” or write, “120/80 mmHg.”</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        
                        </aside>
                    </div>
                    </div>
                </section>
            </>
        )
    
}

export default FAQ;
