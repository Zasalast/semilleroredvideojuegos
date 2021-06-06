import React from "react";
import logo_red from "./../../assets/red-vertical-color.png";
import "./Home.css";
import ServicesOffered from "../servicesOffered/ServicesOffered";
import { Layout } from "antd";
const { Content } = Layout;
const Home = () => {
  return (
    <>
      <Content>
        <img src={logo_red} className="Home-logo" alt="logo" />
        <ServicesOffered />
      </Content>
    </>
  );
};
export default Home;
