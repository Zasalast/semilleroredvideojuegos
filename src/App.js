import "./App.css";
import Footers from "./components/footer/Footer";
import Headers from "./components/header/Header";
import { SectionBody } from "./components/section/sectionBody";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Aside from "./components/aside/Aside";

const { SubMenu } = Menu;
const { Sider, Content } = Layout;
const App = () => {
  return (
    <div>
      <Headers />

      <Content>
        {" "}
        <SectionBody></SectionBody>
      </Content>
      {/*  <Aside /> */}

      <Footers style={{ textAlign: "center" }}></Footers>
    </div>
  );
};

export default App;
