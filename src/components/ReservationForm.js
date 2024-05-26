import { Row, Col, Form, Button } from "react-bootstrap";

function ReservationForm() {
  return (
    <div className="container p-5">
      <h2 className="text-center mt-3 mb-4" style={{ color: 'white', fontFamily: 'Times New Roman' }}>Book your table</h2>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formName">
              <Form.Label style={{ color: 'white' }}>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" style={{ color: 'white' }} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label style={{ color: 'white' }}>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" style={{ color: 'white' }} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formServer">
              <Form.Label style={{ color: 'white' }}>Select a Server</Form.Label>
              <Form.Control as="select" defaultValue="Choose..." style={{ color: 'white' }}>
                <option style={{ color: 'black' }}>Choose...</option>
                <option style={{ color: 'black' }}>Server 1</option>
                <option style={{ color: 'black' }}>Server 2</option>
                <option style={{ color: 'black' }}>Server 3</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formTextArea">
              <Form.Label style={{ color: 'white' }}>Additional Requests</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter any additional requests"
                style={{ color: 'white' }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="warning" type="submit" style={{ color: 'white' }}>
          Send Message
        </Button>
      </Form>
    </div>
  );
}

export default ReservationForm;
