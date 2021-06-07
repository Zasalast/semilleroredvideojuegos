import React from "react";
import data from "./../Data.json";

import { Card, Col, Row, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const Team = () => {
  const { userId, description, fistName, job } = data.team;
  return (
    <>
      <h2>Team</h2>;
      <div className="site-card-wrapper">
        {" "}
        <Row gutter={16}>
          {" "}
          <a href="https://sites.google.com/view/redes3d/qui%C3%A9nes-somos">
            <Card
              style={{ width: 300 }}
              cover={<img alt="example" src={UserAddOutlined} />}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={fistName}
                description={description}
              />
            </Card>
          </a>
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src={UserAddOutlined} />}
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
            cover={<img alt="example" src={UserAddOutlined} />}
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
    </>
  );
};
export default Team;
