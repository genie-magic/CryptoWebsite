import React from 'react';
import Flexbox from 'flexbox-react';
import { Container } from 'reactstrap';
import HistorySection from './sections/HistorySection/HistorySection';
import StatusSection from './sections/StatusSection/StatusSection';
import './Home.css';
class Home extends React.Component {
  render() {
    return (
      <Flexbox flexDirection="column" minHeight="100%" className="home">
        <StatusSection />
        <HistorySection />
      </Flexbox>
    );
  }
}
export default Home;
