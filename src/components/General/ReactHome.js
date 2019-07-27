import React, { Component } from 'react';
import { Layout, Typography, Card, Row, Col } from 'antd';
import { contentStyle } from '../../styles';
import svg1 from '../../FlatIcon/001-bitcoin.svg';
import svg2 from '../../FlatIcon/002-bitcoin-1.svg';
import svg3 from '../../FlatIcon/003-bitcoin-2.svg';
import { colStyle } from '../../styles';

const { Content } = Layout;
const { Meta } = Card;
const { Title, Paragraph } = Typography;
const svgs = [svg1, svg2, svg3];

class ReactHome extends Component {
    
    render() {
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content  className="text-focus-in" style={contentStyle}>
                    <Title level={2}>Home Page</Title>
                    <Paragraph>Consequat fugiat exercitation cillum proident aliquip irure non. Ad ad qui labore do nulla. Est pariatur culpa laborum labore aliqua incididunt. Sunt do ex aliqua irure magna adipisicing sint exercitation pariatur adipisicing. Tempor eiusmod minim officia nostrud eiusmod sunt veniam ipsum cillum enim ut consequat. Fugiat eiusmod ut sit ea commodo do eiusmod ex deserunt.</Paragraph>

                    <Title level={2}>Cards</Title>
                    <Row gutter={16} style={{textAlign: 'center'}} type="flex">
                        {
                            svgs.map((svg, index) => (
                                <Col key={index} xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                                    <Card 
                                    style={{border: 'none'}}
                                    cover={<img alt="Home page crypto svg" style={{padding:'2rem', maxWidth: '200px', margin: 'auto'}} src={svg}/>} 
                                    >
                                        <Meta 
                                        title="svg-image" 
                                        description="Id mollit dolore tempor nulla ad aliqua irure aute reprehenderit commodo officia." />
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Content>
            </Layout>
        )
    }
}

export default ReactHome;
