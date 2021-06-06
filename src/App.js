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
      <Layout>
        <Headers className="App-nav" />
        <Layout>
          <Content>
            {" "}
            <SectionBody></SectionBody>
          </Content>
          {/*  <Aside /> */}
        </Layout>
        <Footers style={{ textAlign: "center" }}></Footers>
      </Layout>
    </div>
  );
};

export default App;
