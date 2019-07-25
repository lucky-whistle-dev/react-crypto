import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

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
                        <SubMenu
                            key="menu-coins"
                            title={
                            <span>
                                <Icon type="dollar" />Subnav
                            </span>
                            }
                        >
                            <Menu.Item key="coin-list">List View</Menu.Item>
                            <Menu.Item key="coin-market">Markets</Menu.Item>
                            <Menu.Item key="coin-detail">Detail View</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="menu-events"
                            title={
                            <span>
                                <Icon type="team" />Events
                            </span>
                            }
                        >
                            <Menu.Item key="events-latest">Latest Events</Menu.Item>
                            <Menu.Item key="events-all">All Events</Menu.Item>
                            <Menu.Item key="events-countries">Countries</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="menu-global"
                            title={
                            <span>
                                <Icon type="global" />
                                Global
                            </span>
                            }
                        >
                            <Menu.Item key="9">Main</Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
            </React.Fragment>
        )
    }
}

export default ReactSider;
