import {
  AlignLeftOutlined,
  DingdingOutlined,
  AlignRightOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  DesktopOutlined,
  DeleteOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React from "react";
import { useState } from "react";
const { Header, Sider, Content,Footer } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashbord", "1", <PieChartOutlined />),
  getItem("Pages", "2", <DesktopOutlined />),
  getItem("Admin", "sub1", <UserOutlined />, [
    getItem("Bank", "3"),
    getItem("Income", "4"),
    getItem("Expense", "5"),
  ]),
  getItem("Master", "sub2", <TeamOutlined />, [
    getItem("Category", "6"),
    getItem("Sub Category", "7"),
    getItem("Brand List", "8"),
  ]),
  getItem("POS", "9", <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          className="sider vh-100"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 20,
            background: colorBgContainer,
          
          }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
      
      </Layout>
    </Layout>
  );
};


export default App;



