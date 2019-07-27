import React, { Component } from 'react';
import { Layout, Typography, Card, Row, Col } from 'antd';
import { contentStyle } from '../../styles';
import svg1 from '../../FlatIcon/001-bitcoin.svg';
import svg2 from '../../FlatIcon/002-bitcoin-1.svg';
import svgExchangeRate from '../../FlatIcon/004-exchange.svg';
import svgChat from '../../FlatIcon/001-chat.svg';
import svgMobile from '../../FlatIcon/003-smartphone.svg';
import svgUpdate from '../../FlatIcon/005-idea.svg';
import { colStyle } from '../../styles';

const { Content } = Layout;
const { Meta } = Card;
const { Title, Paragraph } = Typography;

const features = [{svg: svg1, title:'Statistics', description: 'Stay informed with the latest up to date information pertaining to your favourite cryptocurrencies.'},
{svg: svgChat, title:'Community', description: 'Be informed about upcoming cryptocurrency events in your area.'},
{svg: svgExchangeRate, title:'Exchange Rates', description: 'View up to date exchange rates for your favourite cryptocurrencies.'},
{svg: svgMobile, title:'Mobile Friendly', description: 'This site aims to be mobile friendly. View website on any device you like.'},
{svg: svgUpdate, title:'Updates', description: 'App is continuously updated with'}
];

class ReactHome extends Component {
    
    render() {
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content  className="text-focus-in" style={contentStyle}>
                    <Title level={2}>Cryto</Title>
                    <Paragraph>Bringing you cryptocurrency related data in a user friendly, digestible dashboard platform.</Paragraph>

                    <Title level={2}>Features</Title>
                    
                    <Row gutter={16} style={{textAlign: 'center'}} type="flex">
                        {
                            features.map((item, index) => (
                                <Col key={index} xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                                    <Card 
                                    style={{border: 'none'}}
                                    cover={<img alt="Home page crypto svg" style={{padding:'2rem', maxWidth: '200px', margin: 'auto'}} src={item.svg}/>} 
                                    >
                                        <Meta 
                                        title={item.title} 
                                        description={item.description} />
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                    <Paragraph>Icons provided by flaticon.</Paragraph>
                </Content>
            </Layout>
        )
    }
}

export default ReactHome;
