import * as React from "react";
import {
    Layout,
    Menu,
    Icon,
} from "antd";

const { Sider } = Layout;

const SiderComponent: React.FC = () => {
    
    return (
        <Sider width={200} style={{ background: "#FFF" }}>
            <Menu mode="inline" style={{ height: "100%", textAlign: "left", borderRight: 0, background: "#FFF" }}>
            <Menu.Item key="1">
                    <Icon type="user"/><span>学生</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="read"/><span>授業内容</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="schedule"/><span>スケジュール</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
};

export default SiderComponent;