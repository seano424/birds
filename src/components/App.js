import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import BirdList from "./BirdList";
import BirdImage from './BirdImage';
import './App.scss';

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={7}><BirdList /></Col>
        <Col sm={5}><BirdImage /></Col>
      </Row>
    </Container>
  );
}

export default App;
