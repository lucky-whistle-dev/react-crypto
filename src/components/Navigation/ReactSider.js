import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Sider, Content } = Layout;
const {SubMenu} = Menu;

class ReactSider extends Component {
    render() {
        return (
            <React.Fragment>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['menu-coins']}
                    defaultOpenKeys={['menu-coins', 'menu-events', 'menu-global']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                   {/* Coin Sub Menu */}
                    <SubMenu
                        key="menu-coins"
                        title={
                        <span>
                            <Icon type="dollar"/>Coins
                        </span>
                        }
                        >
                        <Menu.Item key="coin-list"><Link to='coins'>Coin List</Link></Menu.Item>
                        <Menu.Item key="coin-detail">Detail View</Menu.Item>
                        <Menu.Item key="coin-market">Markets</Menu.Item>
                    </SubMenu>
                    
                    {/* Events Sub Menu */}
                    <SubMenu
                        key="menu-events"
                        title={
                        <span>
                            <Icon type="team"/>Events
                        </span>
                        }
                        >
                        <Menu.Item key="events-latest">Latest Events</Menu.Item>
                        <Menu.Item key="events-all">All Events</Menu.Item>
                        <Menu.Item key="events-countries">Countries</Menu.Item>
                    </SubMenu>
                    
                    {/* Exchanges Menu */}
                    <SubMenu
                    key="menu-exchanges"
                    title={
                        <span>
                            <Icon type="bank"/>
                            Exchanges
                        </span>
                        }>
                    <Menu.Item key="exchanges-list"><Link to='/exchanges/list'>Exchanges List</Link></Menu.Item>
                    </SubMenu>

                    {/* Global Sub Menu */}
                    <SubMenu
                        key="menu-global"
                        title={
                        <span>
                            <Icon type="global"/>
                            Global
                        </span>
                        }
                    >
                        <Menu.Item key="global-main"><Link to='/global'>Data</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
            </React.Fragment>
        )
    }
}

export default ReactSider;
