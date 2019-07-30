import React, { Component } from 'react';
import { Table, Tag, Layout, Typography } from 'antd';
import { contentStyle, tableStyle } from '../../styles';
import { connect } from 'react-redux';
import ReactSider from '../Navigation/ReactSider';
import { fetchExchanges, setSiderMenuItem } from '../../redux_actions';

const { Content } = Layout;
const { Paragraph, Title } = Typography;


class ReactExchangesList extends Component {

    componentDidMount() {
        this.props.fetchExchanges()
        this.props.setSiderMenuItem('exchanges-list')
    }

    render() {
          const columns = [
            {
              title: 'Id',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: country => (<Tag color="purple">{country}</Tag>)
            },
            {
                title: 'Year est.',
                dataIndex: 'year_established',
                key: 'year_established',
              },
              {
                title: 'Country',
                dataIndex: 'country',
                key: 'country',
                render: country => (<Tag color="blue">{country}</Tag>)
              },
              {
                title: 'Trade 24h BTC',
                dataIndex: 'trade_volume_24h_btc',
                key: 'trade_volume_24h_btc',
              }
            ];

        const loading = this.props.data.length > 0 ? false : true;



        return (
          <React.Fragment>
          <ReactSider/>
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Exchanges List</Title>
                    <Paragraph>This page lists available exchanges.</Paragraph>
                    <Table
                    style={tableStyle}
                    bordered={true}
                    loading={loading}
                    dataSource={this.props.data} 
                    columns={columns} />
                </Content>
            </Layout>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      data: state.exchanges
    }
}

const mapActionsToProps = {
  fetchExchanges,
  setSiderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(ReactExchangesList);