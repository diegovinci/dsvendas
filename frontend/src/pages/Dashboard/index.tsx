import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h3 className="text-primary py-3">Dashboard de vendas</h3>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-secondary">Taxa de sucesso</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-secondary">Quantidade de vendas por vendedor</h5>
            <DonutChart />
          </div>
        </div>

        <div className="row px-12">
          <div className="py-3">
            <h5 className="text-secondary">Tabela de vendas</h5>
          </div>
          <DataTable />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
