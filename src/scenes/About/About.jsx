import React from "react";
import CardImagen from "../../components/cardImagen/CardImagen";
import MV from "../misionvision/MisionVision";
import Metodologia from "../servicesOffered/Metodologia/Metodologia";
import { Card, Col, Row, Avatar, Carousel } from "antd";
import "./About.css";
const gutters = {};
const vgutters = {};
const colCounts = {};
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  gutters[i] = value;
});
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value;
});
[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value;
});
const About = () => {
  const cols = [];
  return (
    <>
      <CardImagen />{" "}
      <Row gutter={[48, 48]}>
        <Col>
          <article className="centrado">
            <h3>R3D -Redes y Videojuegos - Semillero de Investigación</h3>
            <p>
              R3D -Redes y Videojuegos - Semillero de Investigación Somos un
              equipo de profesionales que busca aportar al desarrollo económico
              y tecnológico de la región Amazonica, impulsados por el anhelo de
              producir conocimiento bajo las premisas de las redes informáticas
              los contenidos digitales y los videojuegos. Desde la perspectiva
              local, Rede3D busca estrategias y soluciones innovadoras a los
              problemas de la Amazonia Colombiana .
            </p>
          </article>
        </Col>
      </Row>
      <article>
        <MV />
      </article>
      <Row gutter={[48, 48]}>
        <Col span={12} className="column">
          Column
        </Col>
        <Col span={12} className="column">
          Column
        </Col>
        <Col span={12} className="column">
          Column
        </Col>
        <Col span={12} className="column">
          Column
        </Col>
        <Col span={24} className="column">
          <div>Columnss</div>
        </Col>
        <Col span={24} className="column">
          <div>Columnss</div>
        </Col>
        ,
      </Row>
      <article>
        <Metodologia />
      </article>
    </>
  );
};
export default About;
