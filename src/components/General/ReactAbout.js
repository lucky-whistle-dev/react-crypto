import React, { Component } from 'react';
import { Layout, List, Tag, Typography, Table } from 'antd';
import { contentStyle } from '../../styles';
import coinGeckoLogo from '../../images/branding/CoinGecko.png';
import {connect} from 'react-redux';
import { setHeaderMenuItem } from '../../redux_actions';
const { Content } = Layout;
const { Title, Paragraph } = Typography;


class ReactAbout extends Component {
    
    componentDidMount() {
        this.props.setHeaderMenuItem('about')
    }

    render() {

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
            {
                name: 'react-chartjs-2',
                version: '^2.7.6',
                purpose: ''
            },
            {
                name: 'axios',
                version :'^0.19.0',
                purpose: ''
            },
            {
                name: 'redux-thunk',
                version :'^2.3.0',
                purpose: ''
            },
            {
                name: 'redux',
                version :'^4.0.4',
                purpose: ''
            },
            {
                name: 'react-redux',
                version: '^7.1.0',
                purpose: ''
            }
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
                render: item => <Tag color="green">{item}</Tag>
            }];
            
            const challenges = [
                'Organizing large amounts of data from third party API.'
                ,'Complex routing within nested components.'
                ,'Restructuring data from API calls into a suitable format for UI components.'
                ,'Creating maintainable structure for components and resusable configurations.'
                ,'Learning to use a brand new UI framework (Ant Design UI).'
            ]

        return (
            <Layout style={{ padding: '1rem' }}>
                <Content className="text-focus-in" style={{...contentStyle}}>
                    <Title level={2}>About Page</Title>
                    <Paragraph>Consolidating RESTFUL calls from the CoinGecko API into a React application. I'll be using v3 of the API (the most recent version at the time of starting this project) This app will be using ant design for UI. </Paragraph>
                    
                    
                    <Title level={3}>Purpose</Title>
                    <Paragraph>This project was built in order to further learning and development of React applications, especially those involving connecting to third party APIs.</Paragraph>
                    
                    <Title level={3}>Data source</Title>
                    <Paragraph>All the data which this application ingests and displays is processed from the CoinGecko API. A free and publicly available cryptocurrency api. Click below to visit CoinGecko official website.</Paragraph>
                    
                        <a 
                        rel="noopener noreferrer" 
                        target="_blank" 
                        href="https://www.coingecko.com/en/api#">
                        <img 
                        className="responsive-image"
                        alt="coingecko api link"
                        style={{border: '1px solid #f3f3f3', maxWidth: '400px'}} 
                        src={coinGeckoLogo}>
                        </img>
                    </a>
                    <Paragraph/>

                    <Title level={3}>Challenges</Title>
                    <Paragraph>Building this application posed some challenges;</Paragraph>
                    <List
                    style={{marginBottom: '2rem'}}
                    size="medium"
                    bordered
                    dataSource={challenges}
                    renderItem={c => <List.Item>{c}</List.Item>}
                    />

                    <Title level={3}>Packages used in this project:</Title>
                    <Paragraph>The following packages were installed via <strong>npm</strong></Paragraph>
                    
                    <Table
                    bordered
                    pagination={false} 
                    dataSource={packages} 
                    columns={columns}></Table>
                    
                </Content>
            </Layout>
        )
    }
}

const mapActionsToProps = {
    setHeaderMenuItem
}

export default connect(null, mapActionsToProps)(ReactAbout);




