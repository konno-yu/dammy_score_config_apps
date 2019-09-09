import * as React from 'react';
import {
    Layout,
    Icon,
    Row,
} from 'antd';

const HeaderComponent: React.FC = () => {
    const { Header } = Layout;
    return (
    <Layout>
        <Header style={{ background: "#FFF" }}>
            <Row style={{ textAlign: "left", fontSize: 20 }}>
                <Icon type="bar-chart" /> Dammy Student Generator
            </Row>
        </Header>
    </Layout>
    )
};


export default HeaderComponent;