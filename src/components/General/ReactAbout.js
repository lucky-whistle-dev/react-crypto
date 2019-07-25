import React, { Component } from 'react';
import { Layout, Button, Typography, Table } from 'antd';
import { contentStyle } from '../../styles';
const { Content } = Layout;
const { Title, Paragraph } = Typography;


class ReactAbout extends Component {

    render() {
        // "antd": "^3.20.6",
        // "gh-pages": "^2.0.1",
        // "react": "^16.8.6",
        // "react-dom": "^16.8.6",
        // "react-router-dom": "^5.0.1",
        // "react-scripts": "3.0.1"
        const packages = [
            {
                name: 'antd',
                version: '^3.20.6',
                purpose: ''
            },
            {
                name: 'gh-pages',
                version: '^2.0.1',
                purpose: ''
            },
            {
                name: 'react',
                version: '^16.8.6',
                purpose: ''
            },
            {
                name: 'react-dom',
                version: '^16.8.6',
                purpose: ''
            },
            {
                name: 'react-router-dom',
                version: '^5.0.1',
                purpose: ''
            },
            {
                name: 'react-scripts',
                version: '3.0.1',
                purpose: ''
            },
            ];

            const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Version',
                dataIndex: 'version',
                key: 'version',
            },
            {
                title: 'Purpose',
                dataIndex: 'purpose',
                key: 'purpose',
            }];
        
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content className="text-focus-in" style={{...contentStyle}}>
                    <Title level={2}>About Page</Title>
                    <Paragraph>Consolidating RESTFUL calls from the CoinGecko API into a React application. I'll be using v3 of the API (the most recent version at the time of starting this project) This app will be using ant design for UI. </Paragraph>
                    <Title level={4}>Purpose</Title>
                    <Paragraph>This project was built in order to further learning and development of React applications, especially those involving connecting to third party APIs.</Paragraph>
                    <Title level={4}>Packages used in this project</Title>
                    <Paragraph>The following packages were installed via <strong>npm</strong></Paragraph>
                    
                    <Table
                    pagination={false} 
                    dataSource={packages} 
                    columns={columns}></Table>

                    <Paragraph></Paragraph>
                    <Title level={4}>Data source</Title>
                    <Paragraph>All the data which this application ingests and displays is processed from the CoinGecko API. A free and publicly available cryptocurrency api. See link below for more information.</Paragraph>
                    <Button>Visit CoinGecko</Button>
                </Content>
            </Layout>
        )
    }
}


export default ReactAbout;




