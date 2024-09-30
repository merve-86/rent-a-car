import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { TiDelete } from "react-icons/ti";

const RentedCarList = ({ rents, setRents }) => {
  const handleToggle = (id) => {
    const updatedRents = rents.map((rent) =>
      rent.id === id ? { ...rent, isReturned: !rent.isReturned } : rent
    );
    setRents(updatedRents);
    localStorage.setItem("rentedCars", JSON.stringify(updatedRents));
  };

  const handleDelete = (id) => {
    const updatedRents = rents.filter((rent) => rent.id !== id);
    setRents(updatedRents);
    localStorage.setItem("rentedCars", JSON.stringify(updatedRents));
  };

  // console.log(rents)
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Rented Car List
      </h3>

      {rents.length > 0 ? (
        rents.map((rent) => (
          <Row
            key={rent.id}
            className={
              "rents justify-content-between align-items-center mx-auto " +
              (rent.isReturned ? " isReturned" : "")
            }
          >
            <Col>
              <h5>Name: {rent.customerName}</h5>
              <h5>Car: {rent.car}</h5>
            </Col>
            <Col>
              <h5>Date : {new Date(rent.date).toLocaleDateString()}</h5>
              <h5>Time : {new Date(rent.date).toLocaleTimeString()}</h5>
            </Col>
            <Col className="text-end">
              <TiTick
                type="button"
                className="text-success display-2"
                onClick={() => handleToggle(rent.id)}
              />
              <TiDelete
                type="button"
                className="text-danger display-2"
                onClick={() => handleDelete(rent.id)}
              />
            </Col>
          </Row>
        ))
      ) : (
        <h5 className="text-center">No Rented Cars</h5>
      )}
    </Container>
  );
};

export default RentedCarList;
