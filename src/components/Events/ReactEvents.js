import React, { Component } from 'react'

export default class ReactEvents extends Component {
    render() {
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Events</Title>
                    <Paragraph>This page shows cryptocurrency related events around the globe...</Paragraph>
                </Content>
            </Layout>
        )
    }
}
