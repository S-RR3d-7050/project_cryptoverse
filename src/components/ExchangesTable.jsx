/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table } from 'antd';
import millify from 'millify';

const ExchangesTable = () => {
    const columns = [
        {
            title: 'Exchanges',
            dataIndex: 'iconUrl',
            key: 'Exchanges',
            render: (iconUrl) => <img src={(`${iconUrl}`)} alt=".." width={50} height={50} />,
          },
        {
          title: 'Exchanges',
          dataIndex: 'name',
          key: 'Exchanges',
          render: (Exchanges) => <a>{Exchanges}</a>,
        },
        {
          title: '24h Trade Volume',
          dataIndex: 'volume',
          key: '24h Trade Volume',
          render: (volume) => <p>{millify(volume)}</p>,
        },
        {
          title: 'Markets',
          dataIndex: 'numberofMarkets',
          key: 'Markets',
        },
        {
            title: 'Change',
            dataIndex: 'marketShare',
            key: 'Change',
        },
      ];
      const data = [
        {
            uuid: 1,
            rank: 1,
            iconUrl: 'https://cdn.coinranking.com/mDTK5qrmq/binance.svg',
            name: 'Binance',
            volume: '6554685985.623574',
            numberofMarkets: 3,
            marketShare: '12.22',
            Description: 'AAAAAA',
          },
          {
            uuid: 1,
            rank: 1,
            name: 'Binance',
            volume: '6554685985.623574',
            iconUrl: 'https://cdn.coinranking.com/mDTK5qrmq/binance.svg',
            numberofMarkets: 3,
            marketShare: '12.22',
            Description: 'AAAAAA',
          },
          {
            uuid: 1,
            rank: 1,
            name: 'Binance',
            volume: '6554685985.623574',
            iconUrl: 'https://cdn.coinranking.com/mDTK5qrmq/binance.svg',
            numberofMarkets: 3,
            marketShare: '12.22',
            Description: 'AAAAAA',
          },
      ];
  return (
    <Table columns={columns} dataSource={data} />

  );
};

export default ExchangesTable;
