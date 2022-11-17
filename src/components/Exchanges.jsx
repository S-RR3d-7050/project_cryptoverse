import React from 'react';
// eslint-disable-next-line no-unused-vars
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
// import Loader from './Loader';
import dummydata from '../utils/dummydata';
// import dummyExchanges from '../utils/dummyExchanges';
// import ala from '../utils/final.js';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  // eslint-disable-next-line no-unused-vars
  const a = useGetExchangesQuery();

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {dummydata.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${(exchange.volume)}</Col>
                    <Col span={6}>{(exchange.numberofMarkets)}</Col>
                    <Col span={6}>{(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.Description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
