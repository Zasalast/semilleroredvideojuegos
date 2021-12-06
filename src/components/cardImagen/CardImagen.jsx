import React from "react";
import { Card, Col, Row, Avatar, Carousel } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import red_videojuegos from "./../../assets/Carrusel videojuegos fondo blanco.jpg";
import "./CardImagen.css";

const { Meta } = Card;
const contentStyle = {};
const contentStyle2 = {
  height: "0px",
  color: "#000",
  lineHeight: "160px",
  textAlign: "center",

  background: "#ffff",
};
function CardImagen({ data }) {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <Row gutter={[48, 48]} className="contenedor">
      <img alt="example" width={"100%"} height={"5%"} src={red_videojuegos} />
      <h2 className="texto-encima">¿Quiénes Somos?</h2>
      <h3 className="centrado">
        <b>
          {" "}
          En la búsqueda de sinergias para el desarrollo de las redes
          informáticas y los videojuegos desde la Universidad de la Amazonia -
          Florencia Caquetá Colombia.
        </b>
      </h3>
    </Row>
  );
}

export default CardImagen;
