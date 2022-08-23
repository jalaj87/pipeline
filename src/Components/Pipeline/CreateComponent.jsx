import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function App() {
  return (
    <div className="mb-4 align-middle" style={{display: 'block', width: 1500, 
                  padding: 80}}>
      <h4>Creating Java-Maven Pipeline</h4>
      <Form>
      <br/>
      <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>LOB</Form.Label>
          <Col sm={10}>
          <Form.Select aria-label="lob">
                <option>Choose LOB</option>
                <option value="CorpTech">Corporate Technology</option>
                <option value="Invest">Investment</option>
                <option value="ClientProspecting">Client Prospecting</option>
          </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Value Stream/Portfolio</Form.Label>
          <Col sm={10}>
          <Form.Select>
                <option>Choose Value Stream/Portfolio</option>
                <option value="CorpTech">Corporate Technology</option>
                <option value="Invest">Investment</option>
                <option value="ClientProspecting">Client Prospecting</option>
          </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Controller</Form.Label>
          <Col sm={10}>
          <Form.Select>
              <option>Choose the Controller</option>
                <option value="ctrl1">Windows</option>
                <option value="ctrl2">Linux</option>
                <option value="ctrl3">Docker</option>
          </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Application</Form.Label>
          <Col sm={10}>
          <Form.Select>
              <option>Choose Application ID</option>
                <option value="1">123</option>
                <option value="2">456</option>
                <option value="4">789</option>
          </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>UCD Deployment Process</Form.Label>
          <Col sm={10}>
          <Form.Select>
              <option>Choose Deployment Process</option>
                <option value="1">123</option>
                <option value="2">456</option>
                <option value="4">789</option>
          </Form.Select>
 </Col>
        </Form.Group>
<br/>           
        <Button variant="secondary">Back</Button>{' '}
        <Button variant="primary">Next</Button>
        
      </Form>
    </div>
  );
}