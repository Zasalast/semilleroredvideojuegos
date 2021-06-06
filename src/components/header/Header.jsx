import logo_red from "./../../assets/red-vertical-color.png";
import { Layout, Menu, Breadcrumb } from "antd";
import "./Header.css";
const { Header, Content, Footer } = Layout;

const Headers = () => {
  return (
    <Layout theme="light">
      <Header className="App-nav">
        <img src={logo_red} className="App-logo" alt="logo" />
        <Menu mode="horizontal" defaultSelectedKeys={["1"]} className="App-nav">
          <a href="/home">
            <Menu.Item key="1">Inicio</Menu.Item>
          </a>
          <a href="/about">
            {" "}
            <Menu.Item key="2">Acerca de</Menu.Item>
          </a>
          <a href="/mv">
            <Menu.Item key="3">Misión visión</Menu.Item>
          </a>
          <a href="/team">
            <Menu.Item key="4">Miembros</Menu.Item>
          </a>
          <a href="/guide">
            <Menu.Item key="5">Tutoriales</Menu.Item>
          </a>
          <a href="/help">
            <Menu.Item key="6">Ayuda</Menu.Item>
          </a>
          <a href="/contact">
            <Menu.Item key="7">contacto</Menu.Item>
          </a>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Headers;
