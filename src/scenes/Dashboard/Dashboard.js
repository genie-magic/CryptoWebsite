import React from 'react';
import './Dashboard.css';
import DashboardSection from './sections/DashboardSection/DashboardSection';
import TransactionHistorySection from './sections/TransactionHistorySection/TransactionHistorySection';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-page">
        <DashboardSection />
        <TransactionHistorySection />
      </div>
    );
  }
}

export default Dashboard;
