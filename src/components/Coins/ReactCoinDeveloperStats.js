import React, { Component } from 'react'


export default class ReactCoinDeveloperStats extends Component {
    render() {
        const { developer_data} = this.props;
        return (
            <React.Fragment>
                <Title level={3} style={titleStyle}>
                    Community Stats
                </Title>

                <Row gutter={16} style={{textAlign: 'center'}} type="flex">
                    { Object.entries(developer_data).map(item => {
                        if (typeof item[1] !== 'object') {
                            return (
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
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