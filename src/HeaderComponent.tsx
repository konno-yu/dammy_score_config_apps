import * as React from 'react';
import {
    Layout,
    Icon,
    Row,
} from 'antd';

const HeaderComponent: React.FC = () => {
    const { Header } = Layout;
    return (    
        <Header style={{ background: "#FFF", paddingLeft: 20 }}>
            <Row style={{ textAlign: "left", fontSize: 20 }}>
                <Icon type="bar-chart" /> Dammy Student Generator
            </Row>
        </Header>
    )
};


export default HeaderComponent;