import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import PortfolioEditor from "../Pages/PortfolioEditor";
import ProjectDetails from "../Pages/ProjectDetails";
import PublicPortfolio from "../Pages/PublicPortfolio";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Layout from "../Pages/Layout";
import Hero from "../Pages/Hero";


const Routers = () => {
  return (
    <>
      <Routes>

       <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Hero/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/portfolio-editor" element={<PortfolioEditor />} />
        <Route path="/project-details" element={<ProjectDetails/>}/>
        <Route path="/public-portfolio" element={<PublicPortfolio/>}/>
       </Route>

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
};

export default Routers;
