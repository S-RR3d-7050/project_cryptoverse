import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Navbar,
  ExchangesTable,
} from './components';
import './App.css';
// import './styles/index.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <ExchangesTable />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: 'white', textAlign: 'center' }}
        >
          LCS2_S_S_M © 2022
          <Link to="/">{' '}Cryptoverse Tun Inc.</Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
