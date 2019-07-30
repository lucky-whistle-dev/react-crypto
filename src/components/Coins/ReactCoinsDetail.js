import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoinDetails, setSiderMenuItem, fetchCoinMarketDetails } from '../../redux_actions';
import { Link } from 'react-router-dom';
import { Layout, Tag, Icon, Table, Skeleton, Row, Col, Button, Card, Typography, Avatar, Statistic } from 'antd';
import { contentStyle, cardStyle, colStyle, titleStyle } from '../../styles';
import ReactCoinScores from './ReactCoinScores';
import { Line } from 'react-chartjs-2';
import { market_processed_table_keys, market_stat_keys } from '../../constants';
import chartOptions from '../../ChartConfig';
import ReactSider from '../Navigation/ReactSider';
import ReactCoinCommunityStats from './ReactCoinCommunityStats';
import ReactCoinDeveloperStats from './ReactCoinDeveloperStats';


const { Content } = Layout;
const { Title, Paragraph } = Typography;


class ReactCoinsDetail extends Component {

    componentDidMount() {
        const { coinId } = this.props.match.params;
        this.props.fetchCoinDetails(coinId);
        this.props.fetchCoinMarketDetails(coinId);
        this.props.setSiderMenuItem('coin-detail');
    }

    // helper function to generate chart data from props
    getChartData = (loading, data, key, title, colour) => {
        return {
            labels: !loading ? data[key].map(item => new Date(item[0]).toLocaleString()) : [],
            datasets: [
                {
                    label: title,
                    data: !loading ? data[key].map(item => item[1]) : [],
                    backgroundColor: colour
                }
            ]
        }
    }

    render() {

        let finalColumns = [
            {
                title:'currency', 
                key: 'currency', 
                dataIndex: 'currency', 
                render: item=> <Tag color="purple">{item}</Tag>}, ...market_processed_table_keys.map(item => ({title: item, key: item, dataIndex: item
                }))
            ]

        const { coingecko_rank } = this.props.data;
        const { market_cap_rank } = this.props.data;
        const { developer_score } = this.props.data;
        const { community_score } = this.props.data;
        const { liquidity_score } = this.props.data;
        const { coingecko_score } = this.props.data;

        const { community_data } = this.props.data;
        const { developer_data } = this.props.data;

        const { market_data } = this.props.data;
        const { last_updated } = this.props.data; 
        
        const loading = Object.keys(this.props.data).length > 0 ? false : true;
        const coinMarketKeys = Object.keys(this.props.chart_data);
        const pricesLoading = coinMarketKeys.includes('prices') ? false : true;
        const marketCapsLoading = coinMarketKeys.includes('market_caps') ? false : true;
        const totalVolumesLoading = coinMarketKeys.includes('total_volumes') ? false : true;
        
        
        // Generate chart data for Chart.js 
        const { chart_data } = this.props;
        const chartPricesData = this.getChartData(pricesLoading, 
            chart_data, 
            'prices', 
            'Prices 7 Day', 
            'rgba(55, 144, 255, 0.7)')
        const chartMarketCapsData = this.getChartData(marketCapsLoading, 
            chart_data, 
            'market_caps',
            'Market Caps 7 Day', 
            'rgba(114, 17, 198, 0.7)')
        const chartTotalVolumesData = this.getChartData(totalVolumesLoading, 
            chart_data, 
            'total_volumes', 
            'Total Volumes 7 Day', 
            'rgba(26, 201, 166, 0.7)')

        return (
            <React.Fragment>
                <ReactSider/>
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
                                        market_stat_keys.map((key, index) => (
                                            <Col key={index} xs={24} sm={24} md={12} lg={8} xl={8} style={colStyle}>
                                                <Card style={cardStyle}>
                                                    <Statistic precision={1} title={key} value={market_data[key]}/>
                                                </Card>
                                            </Col>
                                        ))
                                    }
                                </Row>
                                
                                <ReactCoinCommunityStats data={community_data}/>

                                <ReactCoinDeveloperStats data={developer_data}/>
                        

                                <Title level={3} style={titleStyle}>Detailed market data</Title>
                                <Table 
                                rowKey = "currency"
                                style={{overflowX:'auto'}}
                                bordered 
                                dataSource={this.props.data.market_data_processed} 
                                columns={finalColumns}>
                                </Table>

                                <Title level={3} style={titleStyle}>Prices Chart</Title>
                                <Paragraph>Prices in USD for the past 7 days. Datetimes are converted from unix to locale.</Paragraph>
                                <Line data={chartPricesData} options={chartOptions}/>

                                <Title level={3} style={titleStyle}>Market Caps Chart</Title>
                                <Paragraph>Market cap data from the past 7 days. Datetimes are converted from unix to locale.</Paragraph>
                                <Line data={chartMarketCapsData} options={chartOptions}/>

                                <Title level={3} style={titleStyle}>Total Volumes Chart</Title>
                                <Paragraph>Total Volumes data from the past 7 days. Datetimes are converted from unix to locale.</Paragraph>
                                <Line data={chartTotalVolumesData} options={chartOptions}/>
                            </React.Fragment>
                        }                    
                    </Content>
                </Layout>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.coin_details,
        chart_data: state.coin_market_details
    }
}

const mapActionsToProps = { 
    fetchCoinDetails, 
    fetchCoinMarketDetails,
    setSiderMenuItem }

export default connect(mapStateToProps, mapActionsToProps)(ReactCoinsDetail)
