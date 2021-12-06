import logo from "./../../logo.svg";
import logo_red from "./../../assets/red-vertical-color.png";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  HomeOutlined,
  ToolOutlined,
  PictureOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
const { Footer, Sider, Content } = Layout;

const Aside = () => {
  return (
    <Sider theme="light">
      {" "}
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }}
      >
        <SubMenu key="sub1" icon={<HomeOutlined />} title="Lugares">
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" icon={<EnvironmentOutlined />} title="Criaturas">
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>

        <SubMenu key="sub3" icon={<ToolOutlined />} title="Herramientas">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};
export default Aside;
