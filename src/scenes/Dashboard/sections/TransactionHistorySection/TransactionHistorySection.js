import React from 'react';
import { Container, Table } from 'reactstrap';
import './TransactionHistorySection.css';

const renderTable = props => (
  <Table size="sm" hover responsive borderless className="history-table">
    <thead>
      <tr>
        <th>Date and Time</th>
        <th>Currency</th>
        <th>Amount</th>
        <th>Address</th>
        <th>GNA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>26-21-2017 11:23:37 UTC</td>
        <td>BTC</td>
        <td>0.05</td>
        <td>18Y674gNnT6algmU347EW23afgtr</td>
        <td>523</td>
      </tr>
      <tr>
        <td>26-21-2017 11:23:37 UTC</td>
        <td>BTC</td>
        <td>0.05</td>
        <td>18Y674gNnT6algmU347EW23afgtr</td>
        <td>523</td>
      </tr>
    </tbody>
  </Table>
);

class TransactionHistorySection extends React.Component {
  render() {
    return (
      <div className="transaction-section">
        <div className="Aligner-item Aligner-item--top" />
        <div className="Aligner-item text-center">
          <Container>
            <div className="title">Transaction History</div>
            <div className="deposit-history">
              <div className="deposit-title">Deposit History</div>
              {renderTable()}
            </div>
            <div className="withdraw-history">
              <div className="withdraw-title">Withdrawal History</div>
              {renderTable()}
            </div>
          </Container>
        </div>
        <div className="Aligner-item Aligner-item--bottom" />
      </div>
    );
  }
}

export default TransactionHistorySection;
