import { DashboardData } from "../../components/DashboardData/DashboardData";
import "./Dashboard.css";
import { ReactComponent as Image } from "../../Data/hero.svg";

export const Dashboard = () => {
  return (
    <div className="main-page">
      <section className="dashboard-section">
        <Image className="hero-img" />
      </section>
      <section className="dashboard-data dashboard-section">
        <h1 className="page-heading">Fitness Dashboard</h1>
        <DashboardData />
      </section>
    </div>
  );
};
