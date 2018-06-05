import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import './HistorySection.css';
class HistorySection extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDownload = this.onClickDownload.bind(this);
  }

  onClickDownload() {
    console.log('download historical data clicked');
  }

  render() {
    return (
      <div className="history-section">
        <Container>
          <Row>
            <Col md={6}>
              <div className="gna-graph" />
            </Col>
            <Col md={6}>
              <div className="aum-graph" />
            </Col>
          </Row>
          <Button onClick={this.onClickDownload} className="download-button">
            {' '}
            Download Historical Data
          </Button>
        </Container>
      </div>
    );
  }
}

export default HistorySection;
