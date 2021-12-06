import React from "react";
import logo_red from "./../../assets/red-vertical-color.png";
import "./Home.css";
import ServicesOffered from "../servicesOffered/ServicesOffered";
import { Layout, Row } from "antd";
import Metodologia from "./../servicesOffered/Metodologia/Metodologia";
import MisionVision from "./../misionvision/MisionVision";
import Objetivos from "./../Objetivos/Objetivos";
import Group from "./../Group/Group";

/* import Carousel from './../W3d/Carousel/Carousel'; */
const { Content } = Layout;
const Home = () => {
  return (
    <Content orientation="left">
      <Row justify="space-around">
        <img src={logo_red} className="Home-logo" alt="logo" />
        <Row>
          <ServicesOffered />
        </Row>
        <Metodologia />
        <Row>
          <MisionVision />
        </Row>
        <Row>
          <Objetivos />
        </Row>
        <Row>
          <Group></Group>
        </Row>
      </Row>
    </Content>
  );
};
export default Home;
