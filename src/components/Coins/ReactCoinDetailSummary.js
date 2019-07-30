import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Tag, Icon, Button, Avatar } from 'antd';
const { Title, Paragraph } = Typography;


export default class ReactCoinDetailSummary extends Component {
    render() {
        const { name, image, last_updated } = this.props;
        return (
            <React.Fragment>
                <Title level={2}>
                    <Avatar 
                    shape="square" 
                    size="large" 
                    src={ image.large }
                    style={{marginRight:'1rem'}}/>
                    { name }
                </Title>

                <Paragraph>Last updated on <Tag color="green">{ last_updated }</Tag></Paragraph>

                <Button style={{marginBottom: '1rem'}}>
                    <Icon type="left" />
                    <Link to='/coins'>Back to coins list</Link>
                </Button>
            </React.Fragment>
            
        )
    }
}
