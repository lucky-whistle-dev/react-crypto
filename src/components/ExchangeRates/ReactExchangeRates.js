//

import React, { Component } from 'react';
import { Layout, Typography, Table, Tag } from 'antd';
import { contentStyle } from '../../styles';
import axios from 'axios';


const { Content } = Layout;
const { Title, Paragraph } = Typography;


class ReactAbout extends Component {

    state = {
        data: [],
        loading: true
    }

    componentDidMount() {
        axios.get('https://api.coingecko.com/api/v3/exchange_rates')
        .then(res => {
            this.setState({ data: Object.values(res.data.rates) }, ()=> {
                this.setState({ loading: !this.state.loading})
            })
        })
        .catch(err => console.error(err))

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


        console.log(this.state.data)
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content className="text-focus-in" style={{...contentStyle}}>
                    <Title level={2}>Exchange Rates</Title>
                    <Paragraph>View BTC-to-Currency exchange rates.</Paragraph>
                    <Table
                    dataSource={this.state.data}
                    loading={this.state.loading}
                    columns={columns}
                    >

                    </Table>
                </Content>
            </Layout>
        )
    }
}


export default ReactAbout;




