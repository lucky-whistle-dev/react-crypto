import React, { Component } from 'react';
import { Layout, List, Tag, Timeline, Typography, Icon } from 'antd';
import { contentStyle } from '../../styles';
import ReactSider from '../Navigation/ReactSider';
import { fetchEvents, setSiderMenuItem } from '../../redux_actions';
import { connect } from 'react-redux';
const { Title, Paragraph } = Typography;
const { Content } = Layout;

class ReactEvents extends Component {

    componentDidMount() {
        this.props.fetchEvents()
        this.props.setSiderMenuItem('events-list')
    }

    render() {
        const loading = this.props.data.length > 0 ? false : true;
        return (
            <React.Fragment>
                <ReactSider/>
                <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Events</Title>
                    <Paragraph>This page shows cryptocurrency related events around the globe...</Paragraph>

                    <List
                    loading={loading}
                    itemLayout="vertical"
                    size="large"
                    dataSource={this.props.data}
                    renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                        <img
                            className="responsive-image"
                            style={{maxWidth: '400px'}}
                            alt={item.title}
                            src={item.screenshot}
                        />
                        }
                    >
                        <List.Item.Meta
                        title={<a href={item.website}>{item.title}</a>}
                        description={item.venue}
                        />
                        {item.description.slice(0, 500)}...

                        <div style={{margin: '1.5rem 0rem'}} >
                            <Tag color="blue">Type: {item.type}</Tag>
                            <Tag color="blue">Location: {item.country}</Tag>
                        </div>

                        <Timeline>
                            <Timeline.Item 
                            color="blue"
                            dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Event starts on <span style={{fontWeight: 500}}>{ item.start_date }</span>
                            </Timeline.Item>
                            <Timeline.Item 
                            color="red"
                            dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Event ends on <span style={{fontWeight: 500}}>{ item.end_date }</span>
                            </Timeline.Item>
                        </Timeline>
                        
                    </List.Item>
                    )}
                />
                </Content>
            </Layout>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.events
    }
}

const mapActionsToProps = {
    fetchEvents, 
    setSiderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactEvents);
