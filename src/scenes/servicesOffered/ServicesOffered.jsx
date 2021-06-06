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
      {" "}
      <Row gutter={16}>
        {" "}
        <a href="https://sites.google.com/view/redes3d/qui%C3%A9nes-somos">
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src={red_videojuegos} />}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="¿Quiénes Somos?"
              description="This is the description"
            />
          </Card>
        </a>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={red_trabaje} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="¿Qué hacemos? "
            description="This is the description"
          />
        </Card>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={redesempresariales} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Trabaja con Nosotros"
            description="This is the description"
          />
        </Card>
        ,
      </Row>
    </div>
  );
};
export default ServicesOffered;
