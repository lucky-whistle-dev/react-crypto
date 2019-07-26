import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Layout, Skeleton, Row, Col, Button, Card, Typography, Avatar, Statistic } from 'antd';
import { contentStyle } from '../../styles';
import ReactCoinScores from './ReactCoinScores';
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
                            coingecko_score={this.state.data.coingecko_score}/>

                        </React.Fragment>
                    }                    
                </Content>
            </Layout>
        )
    }
}


