import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Layout, Skeleton, Row, Col, Button, Card, Typography, Avatar, Statistic } from 'antd';
import { contentStyle, cardStyle, colStyle } from '../../styles';
import ReactCoinScores from './ReactCoinScores';
import { Line } from 'react-chartjs-2';


const { Content } = Layout;
const { Title, Paragraph } = Typography;


export default class ReactCoinsDetail extends Component {
    
    state = {
        data: {},
        loading: true
    }

    componentDidMount() {

        const { coinId } = this.props.match.params
        const url =  `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&sparkline=true&developer_data=false`
        
        console.log('%cAttempting to make a request to ', url)
        
        axios.get(url)
        .then(res => {
            this.setState({data: res.data},
                ()=>this.setState({ loading: !this.state.loading }))
        })
        .catch(err => console.error(err))
    }

    render() {
        const keyCount = Object.keys(this.state.data).length;
        const chartData = {
            labels: keyCount > 0 ? this.state.data.market_data.sparkline_7d.price.map((item, index) => index) : [],
            datasets: [
                {
                    label: 'Sparkline 7d',
                    data: keyCount > 0 ? this.state.data.market_data.sparkline_7d.price : [],
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
            "price_change_percentage_7d"]            

        const options = {
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

        return (
            <Layout style={{ padding: '1rem' }}>
                <Content style={contentStyle}>
                    { 
                        this.state.loading ?
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
                                src={this.state.data.image.large}
                                style={{marginRight:'1rem'}}/>
                                { this.state.data.name }
                            </Title>

                            <Paragraph>Last updated on {this.state.data.last_updated}</Paragraph>

                            <Button style={{marginBottom: '1rem'}}>
                                <Link to='/coins'>Back to coins list</Link>
                            </Button>
                            <Title level={3}>
                                Scores and Ranks
                            </Title>
                            <ReactCoinScores
                            coingecko_rank={this.state.data.coingecko_rank}
                            market_cap_rank={this.state.data.market_cap_rank}
                            developer_score={this.state.data.developer_score}
                            community_score={this.state.data.community_score}
                            liquidity_score={this.state.data.liquidity_score}
                            coingecko_score={this.state.data.coingecko_score}/>
                            
                            <Title level={3}>
                                Market Stats
                            </Title>
                            <Row gutter={16} style={{textAlign: 'center'}} type="flex">
                                {
                                    marketKeys.map(key => (
                                        <Col xs={24} sm={24} md={8} lg={8} xl={8} style={colStyle}>
                                            <Card style={cardStyle}>
                                                <Statistic title={key} value={this.state.data.market_data[key]}/>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>

                            <Title level={3}>
                                7 Day Sparkline
                            </Title>

                            <Line data={chartData} options={options}/>

                        </React.Fragment>
                    }                    
                </Content>
            </Layout>
        )
    }
}


