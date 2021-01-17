//import { Tab } from 'bootstrap'
import React, { Component } from 'react'
//import { Nav, Row } from 'react-bootstrap'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourt">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://themeforest.img.customer.envatousercontent.com/files/297702576/03_Preview_Screenshot/01_preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=365bd7746c574f6cf0e351ba06710b82" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Quo labore repellendus nesciunt doloribus minima
                                        accusantium! Unde,doloremque fugiat sint laudantium
                                        aspernatur modi?
                                      </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://i1.wp.com/codeless.co/wp-content/uploads/2020/05/business-landing-page-figma-template.jpg?resize=800%2C600&ssl=1" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Quo labore repellendus nesciunt doloribus minima
                                        accusantium! Unde,doloremque fugiat sint laudantium
                                        aspernatur modi?
                                      </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Quo labore repellendus nesciunt doloribus minima
                                        accusantium! Unde,doloremque fugiat sint laudantium
                                        aspernatur modi?
                                      </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://i.pinimg.com/originals/2b/fb/28/2bfb28d39a1df0ec421ea7aee97f5294.jpg" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Quo labore repellendus nesciunt doloribus minima
                                        accusantium! Unde,doloremque fugiat sint laudantium
                                        aspernatur modi?
                                      </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourt">
                                    <img src="https://pinspiry.com/wp-content/uploads/2019/12/web_dashboard.jpg" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Quo labore repellendus nesciunt doloribus minima
                                        accusantium! Unde,doloremque fugiat sint laudantium
                                        aspernatur modi?
                                      </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://elements-preview-images-0.imgix.net/229b597b-e21f-4876-99cf-29bbdedb61c3?auto=compress%2Cformat&fit=max&w=900&s=75e8ab73ff109f918d363903bb9e865a" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Quo labore repellendus nesciunt doloribus minima
                                        accusantium! Unde,doloremque fugiat sint laudantium
                                        aspernatur modi?
                                      </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
