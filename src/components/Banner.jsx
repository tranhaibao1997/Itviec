import React from 'react';
import { Container, Row, Col, Form, FormControl, Button,DropdownButton,Dropdown } from 'react-bootstrap';

function Banner(props) {
    return (
        <div className="search-header">
            <Container>
                <div className="search-form">
                    <Row>
                        <Col md={10}>
                            <Form inline>
                                <FormControl style={{ width: "100%" }} type="text" placeholder="Search" className="mr-sm-2" />

                            </Form>
                        </Col>
                       
                        <Col md={2}>
                            <Button className="search-btn">Search</Button>
                        </Col>
                    </Row>
                </div>
            </Container>

        </div>
    );
}

export default Banner;