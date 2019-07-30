import React, { Component } from 'react'
import { Row, Card, Statistic,Col,Typography } from 'antd';
import { colStyle, cardStyle, titleStyle } from '../../styles';


const { Title } = Typography;

export default class ReactCoinDeveloperStats extends Component {
    render() {
        const { data} = this.props;
        return (
            <React.Fragment>
                <Title level={3} style={titleStyle}>
                    Developer Stats
                </Title>

                <Row gutter={16} style={{textAlign: 'center'}} type="flex">
                    { Object.entries(data).map((item, index) => {
                        if (typeof item[1] !== 'object') {
                            return (
                            <Col key={index} xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
                                <Card style={cardStyle}>
                                    <Statistic precision={1} title={item[0]} value={item[1]}/>
                                </Card>
                            </Col>
                            )
                        }
                    })}
                </Row>
            </React.Fragment>
        )
    }
}