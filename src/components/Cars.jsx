import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { carData } from "../helpers/data";
import AddModal from "./AddModai";

const Cars = () => {
  const [show, setShow] = useState(false);
  const [car, setCar] = useState("");

  // console.log(carData)
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Cars
      </h3>
      <Row>
        {carData.map(({ id, name, type, img }) => (
          <Col xs={6} sm={4} lg={3}>
            <Image
              className="img-thumbnail car-img w-100"
              src={img}
              onClick={() => {
                setShow(true);
                setCar(name);
              }}
            />
            <p>{name}</p>
          </Col>
        ))}
      </Row>
      <AddModal show={show} setShow={setShow} car={car}/>
    </Container>
  );
};

export default Cars;
