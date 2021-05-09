import Footer from "components/Footer"
import NavBar from "components/NavBar"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">DSVendas</h1>
          <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
          <hr />
          <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
          <Link className="btn btn-primary btn-lg bg-primary" to="/dashboard">
            Acessar dashboard
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
