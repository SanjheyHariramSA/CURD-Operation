import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function form(props) {
  return (
    <div>
          <h1>Student's Form</h1>
          <section className="form">
            <Form onSubmit={props.handleSubmit}>
              <Container>
                <Row>
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Name"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Sanjhey Hariram SA"
                        name="name"
                        value={props.formData.name}
                        onChange={props.handleChange}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Qualification"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder="B.E.CSE" name="qualification" value={props.formData.qualification} onChange={props.handleChange}/>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Year of Passed Out"
                      className="mb-3"
                    >
                      <Form.Control type="text" placeholder="2023" name="Year_of_Passout" value={props.formData.Year_of_Passout} onChange={props.handleChange}/>
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="outline-primary" type="submit">Submit</Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </section>
    </div>
  );
}

export default form;
