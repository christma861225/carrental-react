import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./index.scss";

import Car1 from "../../../assets/images/car1.png";
import Car2 from "../../../assets/images/car2.png";
import Car3 from "../../../assets/images/car3.png";

const Carlist = () => {
  const cars = [
    {
      no: "01",
      title: "2020 Nissan Pathfinder SL",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      posttime: "Posted time: 20:00",
      postdate: "Posted date: 20:00",
      avatar: Car1,
    },
    {
      no: "01",
      title: "2020 Nissan Pathfinder SL",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      posttime: "Posted time: 20:00",
      postdate: "Posted date: 20:00",
      avatar: Car1,
    },
    {
      no: "01",
      title: "2020 Nissan Pathfinder SL",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      posttime: "Posted time: 20:00",
      postdate: "Posted date: 20:00",
      avatar: Car2,
    },
    {
      no: "01",
      title: "2020 Nissan Pathfinder SL",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      posttime: "Posted time: 20:00",
      postdate: "Posted date: 20:00",
      avatar: Car2,
    },
    {
      no: "01",
      title: "2020 Nissan Pathfinder SL",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      posttime: "Posted time: 20:00",
      postdate: "Posted date: 20:00",
      avatar: Car3,
    },
    {
      no: "01",
      title: "2020 Nissan Pathfinder SL",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      posttime: "Posted time: 20:00",
      postdate: "Posted date: 20:00",
      avatar: Car3,
    },
    {
      no: "01",
      title: "2020 Nissan Pathfinder SL",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      posttime: "Posted time: 20:00",
      postdate: "Posted date: 20:00",
      avatar: Car1,
    },
    {
      no: "01",
      title: "2020 Nissan Pathfinder SL",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      posttime: "Posted time: 20:00",
      postdate: "Posted date: 20:00",
      avatar: Car1,
    },
    {
      no: "01",
      title: "2020 Nissan Pathfinder SL",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      posttime: "Posted time: 20:00",
      postdate: "Posted date: 20:00",
      avatar: Car2,
    },
    {
      no: "01",
      title: "2020 Nissan Pathfinder SL",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      posttime: "Posted time: 20:00",
      postdate: "Posted date: 20:00",
      avatar: Car2,
    },
    {
      no: "01",
      title: "2020 Nissan Pathfinder SL",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      posttime: "Posted time: 20:00",
      postdate: "Posted date: 20:00",
      avatar: Car3,
    },
    {
      no: "01",
      title: "2020 Nissan Pathfinder SL",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      posttime: "Posted time: 20:00",
      postdate: "Posted date: 20:00",
      avatar: Car3,
    },
  ];

  return (
    <div className="car-container">
      <Row>
        {cars.map((car, index) => (
          <Col xs={12} sm={12} md={6} key={index}>
            <Row className="car-item">
              <Col xs={2}>
                <img src={car.avatar} className="avatar"></img>
              </Col>
              <Col xs={10}>
                <Row>
                  <Col xs={6}>
                    <h1>{car.title}</h1>
                  </Col>
                  <Col xs={6}>
                    <Row>
                      <Col xs={6}>
                        <h5>{car.posttime}</h5>
                      </Col>
                      <Col xs={6}>
                        <h5>{car.postdate}</h5>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <h3>{car.description}</h3>
                </Row>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Carlist;
