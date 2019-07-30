# React Cryptocurrency App
Consolidating RESTFUL calls from the CoinGecko API into a React application. I'll be using v3 of the API (the most recent version at the time of starting this project) This app will be using ant design for UI. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Structure 
Generated with `tree` command.
```
.
├── API
│   └── index.js
├── ChartConfig
│   └── index.js
├── components
│   ├── App.css
│   ├── App.js
│   ├── Coins
│   │   ├── ReactCoinCommunityStats.js
│   │   ├── ReactCoinDetailSummary.js
│   │   ├── ReactCoinDeveloperStats.js
│   │   ├── ReactCoinMarketDetailedStats.js
│   │   ├── ReactCoinMarketStats.js
│   │   ├── ReactCoinScores.js
│   │   ├── ReactCoinsDetail.js
│   │   └── ReactCoinsList.js
│   ├── Empty
│   │   └── ReactEmpty.js
│   ├── Events
│   │   └── ReactEvents.js
│   ├── ExchangeRates
│   │   └── ReactExchangeRates.js
│   ├── Exchanges
│   │   └── ReactExchangesList.js
│   ├── General
│   │   ├── ReactAbout.js
│   │   └── ReactHome.js
│   ├── Global
│   │   └── ReactGlobal.js
│   ├── Navigation
│   │   ├── ReactFooter.js
│   │   ├── ReactHeader.js
│   │   └── ReactSider.js
│   └── StatusUpdates
│       └── ReactStatusUpdates.js
├── constants
│   └── index.js
├── images
│   ├── branding
│   │   └── CoinGecko.png
│   ├── flaticon
│   │   ├── 001-bitcoin.svg
│   │   ├── 001-chat.svg
│   │   ├── 002-bitcoin-1.svg
│   │   ├── 002-bitcoin.svg
│   │   ├── 003-bitcoin-2.svg
│   │   ├── 003-smartphone.svg
│   │   ├── 004-exchange.svg
│   │   ├── 005-idea.svg
│   │   ├── 006-binary.svg
│   │   └── worldwide.svg
│   └── logo
│       └── logo.png
├── index.js
├── redux_actions
│   └── index.js
├── redux_reducers
│   └── index.js
└── styles
    └── index.js
```

# Screenshots

**home**
![home](https://github.com/danielc92/react-crypto-app/blob/master/screenshots/Screen%20Shot%202019-07-29%20at%202.00.44%20pm.jpg)

**about**
![about](https://github.com/danielc92/react-crypto-app/blob/master/screenshots/Screen%20Shot%202019-07-29%20at%202.01.08%20pm.jpg)

**status updates**
![status updates](https://github.com/danielc92/react-crypto-app/blob/master/screenshots/Screen%20Shot%202019-07-29%20at%201.59.49%20pm.jpg)

**coins listing**
![coins listing](https://github.com/danielc92/react-crypto-app/blob/master/screenshots/Screen%20Shot%202019-07-29%20at%201.59.56%20pm.jpg)

**coin details 1**
![coin details](https://github.com/danielc92/react-crypto-app/blob/master/screenshots/Screen%20Shot%202019-07-29%20at%201.59.49%20pm.jpg)

**coin details 2**
![coin details 2](https://github.com/danielc92/react-crypto-app/blob/master/screenshots/Screen%20Shot%202019-07-29%20at%202.00.04%20pm.jpg)

**coin details 3**
![coin details 3](https://github.com/danielc92/react-crypto-app/blob/master/screenshots/Screen%20Shot%202019-07-29%20at%202.00.07%20pm.jpg)

**event list**
![event listing](https://github.com/danielc92/react-crypto-app/blob/master/screenshots/Screen%20Shot%202019-07-29%20at%202.00.16%20pm.jpg)

**exchanges listing**
![exchanges listing](https://github.com/danielc92/react-crypto-app/blob/master/screenshots/Screen%20Shot%202019-07-29%20at%202.00.31%20pm.jpg)

**exchange rates**
![exchange rates](https://github.com/danielc92/react-crypto-app/blob/master/screenshots/Screen%20Shot%202019-07-29%20at%202.00.36%20pm.jpg)

**global**
![global](https://github.com/danielc92/react-crypto-app/blob/master/screenshots/Screen%20Shot%202019-07-29%20at%202.00.40%20pm.jpg)


# Themes
The themes for this app will directly correlate to the api endpoints provided by the CoinGecko API. I want to split up the app into digestible React components in the following areas, which will most likely form part of a larger dashboard interface.

- Coins
- Exchanges
- Status Updates
- Exchange Rates
- Events
- Global

# Requirements (npm)
Requirements for this project can be found in the package.json. And can be installed with `npm install` from root of the project directory.

I aim to use the following packages:
**must have packages**
- antd (ui framework for react)
- react (front-end)
- react-router-dom (routing for react)
- chartjs (charting library)
- axios (graceful api calls)

**optional packages**
- redux (may need redux for state management if number of components grows)
- ant motion (animations for ant design ui)


# Tests

# Sources
- [The CoinGecko API](https://www.coingecko.com/en/api#)
- [React documentation](https://reactjs.org/docs/getting-started.html)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
