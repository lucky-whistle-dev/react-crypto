import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;


class ReactHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><Icon type="user" />Home</Menu.Item>
                        <Menu.Item key="2">Dashboard</Menu.Item>
                        <Menu.Item key="3">About</Menu.Item>
                        <Menu.Item key="4">Source</Menu.Item>
                    </Menu>
                </Header>
            </React.Fragment>
        )
    }
}

export default ReactHeader;
