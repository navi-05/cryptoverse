import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  // const { data, isFetching } = useGetExchangesQuery();
  // const exchangesList = data?.data?.exchanges;
  // if (isFetching) return <Loader />

  return (
    <>
     <p style={{ color: 'red'}}>Since the exchange details is under premium subscription the development team couldn't afford that part of API RN!</p>
      {/* <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangesList?.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange?.id}
                showArrow={false}
                header={(
                  <Row key={exchange?.id}>
                    <Col span={6}>
                      <Text><strong>{exchange?.rank}.</strong></Text>
                      <Avatar className="exchange?-image" src={exchange?.iconUrl} />
                      <Text><strong>{exchange?.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange?.volume)}</Col>
                    <Col span={6}>{millify(exchange?.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange?.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {exchange?.description || ''}
              </Panel>
            </Collapse>
           
          </Col>
        ))}
      </Row> */}
    </>
  );
};

export default Exchanges;