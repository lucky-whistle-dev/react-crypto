import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { iconStyle } from '../../styles';
import { connect } from 'react-redux';

const { Sider } = Layout;
const {SubMenu} = Menu;

class ReactSider extends Component {
    render() {
        return (
            <React.Fragment>
                <Sider 
                breakpoint="md"
                collapsedWidth="0"
                width={240} 
                style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    selectedKeys={[this.props.sider_selected]}
                    defaultOpenKeys={['menu-exchange-rates', 'menu-updates', 'menu-coins', 'menu-events', 'menu-global', 'menu-exchanges']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    {/* Status updates */}
                    <SubMenu
                        key="menu-updates"
                        title={
                        <span>
                            <Icon type="alert" style={iconStyle}/>Updates
                        </span>
                        }
                        >
                        <Menu.Item key="status-list"><Link to='/status/list'>Updates Listing</Link></Menu.Item>
                    </SubMenu>
                   {/* Coin Sub Menu */}
                    <SubMenu
                        key="menu-coins"
                        title={
                        <span>
                            <Icon type="dollar" style={iconStyle}/>Coins
                        </span>
                        }
                        >
                        <Menu.Item key="coin-list"><Link to='/coins'>Coin Listing</Link></Menu.Item>
                        <Menu.Item key="coin-detail"><Link to='/coins/bitcoin'>Coin Detail View</Link></Menu.Item>
                    </SubMenu>
                    
                    {/* Events Sub Menu */}
                    <SubMenu
                        key="menu-events"
                        title={
                        <span>
                            <Icon type="team" style={iconStyle}/>Events
                        </span>
                        }
                        >
                        <Menu.Item key="events-list"><Link to='/events/list'>Events Listing</Link></Menu.Item>
                    </SubMenu>
                    
                    {/* Exchanges Menu */}
                    <SubMenu
                    key="menu-exchanges"
                    title={
                        <span>
                            <Icon type="bank" style={iconStyle}/>
                            Exchanges
                        </span>
                        }>
                    <Menu.Item key="exchanges-list"><Link to='/exchanges/list'>Exchanges Listing</Link></Menu.Item>
                    </SubMenu>

                    {/* Exchange Rates Menu */}
                    <SubMenu
                    key="menu-exchange-rates"
                    title={
                        <span>
                            <Icon type="dollar" style={iconStyle}/>
                            Exchange Rates
                        </span>
                        }>
                    <Menu.Item key="exchange-rates-list"><Link to='/exchange-rates'>Exchange Rates Listing</Link></Menu.Item>
                    </SubMenu>


                    {/* Global Sub Menu */}
                    <SubMenu
                        key="menu-global"
                        title={
                        <span>
                            <Icon type="global" style={iconStyle}/>
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

const mapStateToProps = (state) => {
    return {
        sider_selected: state.sider_selected
    }

}

export default connect(mapStateToProps)(ReactSider)
