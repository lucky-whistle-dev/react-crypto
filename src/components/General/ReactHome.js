import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import { contentStyle } from '../../styles';
const { Content } = Layout;
const { Title, Paragraph } = Typography;


class ReactHome extends Component {

    render() {
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content  className="text-focus-in" style={contentStyle}>
                    <Title level={2}>Home Page</Title>
                    <Paragraph>Consequat fugiat exercitation cillum proident aliquip irure non. Ad ad qui labore do nulla. Est pariatur culpa laborum labore aliqua incididunt. Sunt do ex aliqua irure magna adipisicing sint exercitation pariatur adipisicing. Tempor eiusmod minim officia nostrud eiusmod sunt veniam ipsum cillum enim ut consequat. Fugiat eiusmod ut sit ea commodo do eiusmod ex deserunt.</Paragraph>
                </Content>
            </Layout>
        )
    }
}

export default ReactHome;
