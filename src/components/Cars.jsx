import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { carData } from '../helpers/data';


const Cars = () => {
    console.log(carData)
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Cars
      </h3>
      <Row >
        {carData.map((car) => (
          <Col xs={6} sm={4} lg={3}>
            <Image className="img-thumbnail car-img w-100" src={car.img} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cars
