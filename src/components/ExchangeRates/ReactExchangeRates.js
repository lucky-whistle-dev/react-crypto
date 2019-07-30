//

import React, { Component } from 'react';
import ReactSider from '../Navigation/ReactSider';
import { Layout, Typography, Table, Tag } from 'antd';
import { contentStyle, tableStyle } from '../../styles';
import { connect } from 'react-redux';
import { fetchExchangeRates, setSiderMenuItem } from '../../redux_actions';


const { Content } = Layout;
const { Title, Paragraph } = Typography;


class ReactExchangeRates extends Component {

    componentDidMount() {
        this.props.fetchExchangeRates();
        this.props.setSiderMenuItem('exchange-rates-list');
    };

    render() {

        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: item => <Tag color="purple">{ item }</Tag>
            },
            {
                title: 'Unit',
                dataIndex: 'unit',
                key: 'unit'
            },
            {
                title: 'Value',
                dataIndex: 'value',
                key: 'value',
            },
            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
            }
        ]

        const loading = this.props.data.length > 0 ? false : true;
        return (
            <React.Fragment>
                <ReactSider/>
                <Layout style={{ padding: '1rem' }}>
                    <Content className="text-focus-in" style={{...contentStyle}}>
                        <Title level={2}>Exchange Rates</Title>
                        <Paragraph>View BTC-to-Currency exchange rates.</Paragraph>
                        <Table
                        style={tableStyle}
                        dataSource={this.props.data}
                        loading={loading}
                        columns={columns}
                        >
                        </Table>
                    </Content>
                </Layout>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.exchange_rates
    }
}

const mapActionsToProps = {
    fetchExchangeRates,
    setSiderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactExchangeRates);




