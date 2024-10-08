import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { carData } from "../helpers/data";
import AddModal from "./AddModal";

const Cars = ({rents, setRents}) => {
  const [show, setShow] = useState(false);
  const [car, setCar] = useState("");

  // console.log(carData)
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Cars
      </h3>
      <Row>
        {carData.map(({ id, name, type, img }) => (
          <Col xs={6} sm={4} lg={3} key={id}>
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
      <AddModal show={show} setShow={setShow} car={car} rents={rents} setRents={setRents} />
    </Container>
  );
};

export default Cars;
