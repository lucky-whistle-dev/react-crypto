import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Button } from 'antd';
import { iconStyle } from '../../styles';
import geckoImage from '../../Branding/CoinGecko.png';

const { Header } = Layout;


class ReactHeader extends Component {

    state = {
        iconType: 'twoTone'
    }

    render() {
        
        const { iconType } = this.state;

        return (
            <React.Fragment>
                <Header className="header">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['home']}
                        style={{ lineHeight: '64px'}}
                    >
                        {/* Logo code <Menu.Item key="logo">
                            <img style={{ padding: '0', maxWidth: '100px'}} src={geckoImage}></img>
                        </Menu.Item> */}
                        <Menu.Item key="home">
                            <Link to="/">
                                <Icon type="home" style={iconStyle}/>Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">
                                <Icon type="info-circle" style={iconStyle}/>About
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="source">
                            <a target="_blank" href="https://github.com/danielc92/react-crypto-app">
                                <Icon theme="filled" type="github" style={iconStyle}/>Source
                            </a>
                        </Menu.Item>
                    </Menu>
                </Header>
            </React.Fragment>
        )
    }
}

export default ReactHeader;
