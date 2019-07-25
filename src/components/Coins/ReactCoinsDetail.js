import React, { Component } from 'react'

export default class ReactCoinsDetail extends Component {

    render() {
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Coins Detail - {'coin'}</Title>
                    <Paragraph>This page...</Paragraph>
                </Content>
            </Layout>
        )
    }
}
