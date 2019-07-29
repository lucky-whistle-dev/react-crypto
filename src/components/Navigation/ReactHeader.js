import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { iconStyle } from '../../styles';
import logoImage from '../../images/logo/logo.png';
import { connect } from 'react-redux';
import { setHeaderMenuItem } from '../../redux_actions'; 


const { Header } = Layout;


class ReactHeader extends Component {

    render() {
        const { selected } = this.props;
        return (
            <React.Fragment>
                <Header className="header">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[selected]}
                        style={{ lineHeight: '64px'}}
                    >
                        <Menu.Item key="logo" onClick={()=>this.props.setHeaderMenuItem('home')}>
                            <Link to="/">
                            <img alt="daniel corcorans crypto react app logo" 
                            style={{ maxHeight: '40px'}} 
                            src={logoImage}></img>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="home" onClick={()=>this.props.setHeaderMenuItem('home')}>
                            <Link to="/">
                                <Icon type="home" style={iconStyle}/>Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="dashboard" onClick={()=>this.props.setHeaderMenuItem('dashboard')}>
                            <Link to="/status/list">
                                <Icon type="area-chart" style={iconStyle}/>Dashboard
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="about" onClick={()=>this.props.setHeaderMenuItem('about')}>
                            <Link to="/about">
                                <Icon type="info-circle" style={iconStyle}/>About
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="source">
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/danielc92/react-crypto-app">
                                <Icon theme="filled" type="github" style={iconStyle}/>Source
                            </a>
                        </Menu.Item>
                    </Menu>
                </Header>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.header_selected
    }
}

const mapActionsToProps = {
    setHeaderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactHeader);
