import React from 'react';
import './Dashboard.css';
import DashboardSection from './sections/DashboardSection/DashboardSection';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-page">
        <DashboardSection />
      </div>
    );
  }
}

export default Dashboard;
