import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoinDetails } from '../../redux_actions';
import { Link } from 'react-router-dom';
import { Layout, Tag, Icon, Table, Skeleton, Row, Col, Button, Card, Typography, Avatar, Statistic } from 'antd';
import { contentStyle, cardStyle, colStyle, titleStyle } from '../../styles';
import ReactCoinScores from './ReactCoinScores';
import { Line } from 'react-chartjs-2';
import {fields } from '../../redux_reducers';


const { Content } = Layout;
const { Title, Paragraph } = Typography;



class ReactCoinsDetail extends Component {

    componentDidMount() {

        const { coinId } = this.props.match.params
        this.props.fetchCoinDetails(coinId)
    }

    render() {
        let finalColumns = [{title:'currency', key: 'currency', dataIndex: 'currency', render: item=> <Tag color="purple">{item}</Tag>}, ...fields.map(item => ({title: item, key: item, dataIndex: item}))]
        const keyCount = Object.keys(this.props.data).length;
        const chartData = {
            labels: keyCount > 0 ? this.props.data.market_data.sparkline_7d.price.map((item, index) => index) : [],
            datasets: [
                {
                    label: 'Sparkline 7d',
                    data: keyCount > 0 ? this.props.data.market_data.sparkline_7d.price : [],
                    backgroundColor: 'rgba(55, 144, 255, 0.8)'
                }
            ]
        }

        const marketKeys = ["circulating_supply",
                            "total_supply",
                            "public_interest_score",
                            "market_cap_change_24h",
                            "market_cap_change_percentage_24h",
                            "price_change_percentage_14d",
                            "price_change_percentage_1y",
                            "price_change_percentage_200d",
                            "price_change_percentage_24h",
                            "price_change_percentage_30d",
                            "price_change_percentage_60d",
                            "price_change_percentage_7d"
        ]            

        const chartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        display:false
                    },
                    ticks: {
                        maxTicksLimit: 16
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false
                    },
                    ticks: {
                        maxTicksLimit: 6
                    }
                }]
            }
        }
        const loading = Object.keys(this.props.data).length > 0 ? false : true;

        const { coingecko_rank } = this.props.data;
        const { market_cap_rank } = this.props.data;
        const { developer_score } = this.props.data;
        const { community_score } = this.props.data;
        const { liquidity_score } = this.props.data;
        const { coingecko_score } = this.props.data;

        const { market_data } = this.props.data;
        const { last_updated } = this.props.data; 

        console.log(this.props.data)
        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    { 
                        loading ?
                        <React.Fragment>
                            <Skeleton active/>
                            <Skeleton active/>
                            <Skeleton active/>
                            <Skeleton active/>
                        </React.Fragment> 
                            :
                        <React.Fragment>
                            
                            <Title level={2}>
                                <Avatar 
                                shape="square" 
                                size="large" 
                                src={this.props.data.image.large}
                                style={{marginRight:'1rem'}}/>
                                { this.props.data.name }
                            </Title>

                            <Paragraph>Last updated on <Tag color="green">{last_updated}</Tag></Paragraph>

                            <Button style={{marginBottom: '1rem'}}>
                                <Icon type="left" />
                                <Link to='/coins'>Back to coins list</Link>
                            </Button>
                            <Title level={3} style={{marginTop: '3rem'}}>
                                Scores and Ranks
                            </Title>
                            <ReactCoinScores
                            coingecko_rank={coingecko_rank}
                            market_cap_rank={market_cap_rank}
                            developer_score={developer_score}
                            community_score={community_score}
                            liquidity_score={liquidity_score}
                            coingecko_score={coingecko_score}/>
                            
                            <Title level={3} style={titleStyle}>
                                Market Stats
                            </Title>
                            <Row gutter={16} style={{textAlign: 'center'}} type="flex">
                                {
                                    marketKeys.map((key, index) => (
                                        <Col key={index} xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
                                            <Card style={cardStyle}>
                                                <Statistic precision={1} title={key} value={market_data[key]}/>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>

                            <Title level={3} style={titleStyle}>Detailed market data</Title>
                            <Table 
                            style={{overflowX:'auto'}}
                            bordered 
                            dataSource={this.props.market_data_processed} 
                            columns={finalColumns}>
                            </Table>

                            <Title level={3} style={titleStyle}>
                                7 Day Sparkline
                            </Title>
                            <Paragraph>Each unit on the x-axis represents 1 hour.</Paragraph>

                            <Line data={chartData} options={chartOptions}/>

                        </React.Fragment>
                    }                    
                </Content>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.coin_details
    }
}

const mapActionsToProps = { fetchCoinDetails }

export default connect(mapStateToProps, mapActionsToProps)(ReactCoinsDetail)
