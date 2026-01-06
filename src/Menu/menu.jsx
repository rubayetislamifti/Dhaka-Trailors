import { Link } from "react-router-dom";
import "./menu.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <h1 className="page-title">Dashboard</h1>

      {/* ===== Stats ===== */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>মোট অর্ডার</h3>
          <p>128</p>
        </div>

        <div className="stat-card pending">
          <h3>পেন্ডিং অর্ডার</h3>
          <p>24</p>
        </div>

        <div className="stat-card success">
          <h3>আজকের ডেলিভারি</h3>
          <p>8</p>
        </div>

        <div className="stat-card">
          <h3>মোট কাস্টমার</h3>
          <p>56</p>
        </div>
      </div>

      {/* ===== Quick Actions ===== */}
      <div className="quick-actions">
        <Link to="/order/new" className="action-card">
          ➕ নতুন অর্ডার
        </Link>

        <Link to="/order/table" className="action-card">
          📋 অর্ডার তালিকা
        </Link>

        <Link to="/customers" className="action-card">
          👥 কাস্টমার
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
