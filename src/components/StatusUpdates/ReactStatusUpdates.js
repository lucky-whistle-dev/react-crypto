import React, { Component } from 'react';
import { Layout, Typography, Row, Col, List, Tag} from 'antd';
import { colStyle, contentStyle } from '../../styles';
import { connect } from 'react-redux';
import { fetchStatusUpdates, setSiderMenuItem, setHeaderMenuItem} from '../../redux_actions';
import ReactSider from '../Navigation/ReactSider';
const { Content } = Layout;
const { Title, Paragraph } = Typography;

class ReactStatusUpdates extends Component {

    componentDidMount() {
        this.props.fetchStatusUpdates();
        this.props.setSiderMenuItem('status-list');
        this.props.setHeaderMenuItem('dashboard');
    }

    render() {
        const loading = this.props.data.length > 0 ? false : true;
        return (
            <React.Fragment>
                <ReactSider/>
                <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Status Updates</Title>
                    <Paragraph>This feature is currently in beta. List all status_updates with data (description, category, created_at, user, user_title and pin)</Paragraph>
                    <Row gutter={16} style={{textAlign: 'center'}} type="flex">

                        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                        </Col>
                    </Row>

                    <List
                    pagination={!loading}
                    loading={loading}
                    itemLayout="vertical"
                    size="large"
                    dataSource={this.props.data}
                    renderItem={item => (
                    <List.Item
                        key={item.project.name}
                        extra={
                        <img
                            width={120}
                            alt={item.project.name}
                            src={item.project.image.large}
                        />
                        }
                    >
                        <List.Item.Meta
                        title={item.project.name}
                        description={`Posted by: ${item.user} - ${item.user_title} on ${item.created_at}`}
                        />
                        { item.description }
                        <div style={{marginTop: '1rem'}} >
                            <Tag color="orange">{item.category}</Tag>
                        </div>
                        
                    </List.Item>)}
                ></List>
                </Content>
            </Layout>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.status_updates
    }
}

const mapActionsToProps = {
    fetchStatusUpdates,
    setSiderMenuItem,
    setHeaderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactStatusUpdates)