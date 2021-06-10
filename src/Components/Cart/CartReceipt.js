import React, {useState, useEffect } from 'react'

import { Col, Divider, Row, Table } from 'antd';
import 'antd/dist/antd.css';
import { ReceiptPage } from './CartElements'

const CartReceipt = () => {
  return (
      <ReceiptPage>
    <div className='container receipt-page' style={{ padding: 20, fontFamily: 'monospace' }}>
      <Row>
        <Col>
          <Divider>#Receipt</Divider>
        </Col>
      </Row>
         
      <Row gutter={24} style={{ marginTop: 32 }}>
        <Col span={8}>
          <h3>SKshop</h3>
          <div>#944/945, 4th Cross, 9th Main,</div>
          <div>Wuse II,</div>
          <div>Amino Crescent Road,</div>
          <div>Abuja -560076</div>
        </Col>
        <Col span={8} offset={8}>
          <table>
            <tr>
              <th>Invoice # :</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Invoice Date :</th>
              <td>07-06-2021</td>
            </tr>
            <tr>
              <th>Due Date :</th>
              <td>07-06-2021</td>
            </tr>
          </table>
        </Col>
      </Row>

      <Row style={{ marginTop: 48 }}>
        <div>Bill To: <strong>Idris Sadiq</strong></div>
        <div>Amino Crescent,</div>
        <div>Abuja- 560076</div>
      </Row>


      <Row style={{ marginTop: 48 }}>
        <Table dataSource={[{
            id: 1,
            name: 'paid items(4)',
            description: '[mens clothing, jewelery, womens clothing]',
            price: '$20000',
            quantity: 4
        }]}

        pagination={false}
        >
          <Table.Column title="Items" dataIndex='name' />
          <Table.Column title="Description" dataIndex='description' />
          <Table.Column title="Quantity" dataIndex='quantity' />
          <Table.Column title="Price" dataIndex='price' />
        </Table>
            <button className='receipt-btn'>Print</button>
      </Row>
    </div>
    </ReceiptPage>
  );
};

export default CartReceipt
