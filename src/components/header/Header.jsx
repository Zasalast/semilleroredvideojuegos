import logo_red from "./../../assets/red-vertical-color.png";
import { Layout, Menu, Breadcrumb } from "antd";
import "./Header.css";
import { useState } from "react";
const { Header, Content, Footer } = Layout;

const Headers = () => {
  const [phone, setPhone] = useState(false);
  const browserWindowsSize = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    console.log(windowWidth);
    console.log(windowHeight);
  };
  return (
    <Header className="App-nav">
      <a href="/home" title="Redes y Video Juegos">
        {" "}
        <img
          src={logo_red}
          className="App-logo"
          alt="logo"
          title="Redes y Video Juegos"
        />{" "}
      </a>
      <Menu mode="horizontal" defaultSelectedKeys={["1"]} className="App-nav">
        <a href="/about" title="Acerca de" title="Acerca de">
          <Menu.Item key="1">
            {browserWindowsSize() >= 360 ? (
              "Inicio"
            ) : (
              <i className="fas fa-home fa-2x" />
            )}
          </Menu.Item>
        </a>
        <a href="/w3d" title="Servidor Simulador">
          {" "}
          <Menu.Item key="2">
            {browserWindowsSize() >= 360 ? (
              "W3d"
            ) : (
              <i className="fas fa-globe fa-2x" />
            )}
          </Menu.Item>
        </a>

        <a href="/mv" title="Misión y Visión">
          <Menu.Item key="3">
            {browserWindowsSize() >= 360 ? (
              "Misión visión"
            ) : (
              <>
                <i class="fas fa-flag-checkered  fa-eye fa-2x"></i>
              </>
            )}
          </Menu.Item>
        </a>
        <a href="/team" title="Equipo">
          <Menu.Item key="4">
            {browserWindowsSize() >= 360 ? (
              "Miembros"
            ) : (
              <i className="fas fa-users fa-2x" />
            )}
          </Menu.Item>
        </a>
        <a href="/guide" title="Tutoriales">
          <Menu.Item key="5">
            {browserWindowsSize() >= 360 ? (
              "Tutoriales"
            ) : (
              <i class="fas fa-people-carry fa-2x"></i>
            )}
          </Menu.Item>
        </a>
        <a href="/help" title="Ayuda">
          <Menu.Item key="6">
            {browserWindowsSize() >= 360 ? (
              "Ayuda"
            ) : (
              <i className="fas fa-question fa-2x" />
            )}
          </Menu.Item>
        </a>
        <a href="/contact" title="contacto">
          <Menu.Item key="7">
            {browserWindowsSize() >= 360 ? (
              <i className="fas fa-address-book  " />
            ) : (
              <i className="fas fa-address-book fa-2x" />
            )}
          </Menu.Item>
        </a>
      </Menu>
    </Header>
  );
};

export default Headers;
