import React from "react";
import "./ServicesOffered.css";
import { Card, Col, Row, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import red_videojuegos from "./../../assets/red-vertical-color.png";

import red_trabaje from "./../../assets/trabaje.png";
import redesempresariales from "./../../assets/redes-empresariales.png";
const { Meta } = Card;
const ServicesOffered = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={red_videojuegos} />}
        >
          {" "}
          <a href="https://sites.google.com/view/redes3d/qui%C3%A9nes-somos">
            <Meta title="¿Quiénes Somos?" description="" />{" "}
          </a>
        </Card>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={red_trabaje} />}
        >
          <a href="https://sites.google.com/view/redes3d/qu%C3%A9-hacemos?authuser=0">
            <Meta title="¿Qué hacemos? " description="" />
          </a>
        </Card>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={redesempresariales} />}
        >
          <a href="https://sites.google.com/view/redes3d/trabaja-con-nosotros?authuser=0">
            <Meta title="Trabaja con Nosotros" description="" />
          </a>
        </Card>
        ,
      </Row>
    </div>
  );
};
export default ServicesOffered;
