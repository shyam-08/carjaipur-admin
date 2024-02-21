// import React from "react";
import { Box } from "@mui/material";
import DashboardAppbar from "./DashboardAppbar";
import DashboardSidebar from "./DashboardSidebar";
import { useNavigate } from "react-router-dom";
import "./dashcard.css";
import Inventory from "../Pages/Inventory";
import { Button } from "@mui/material";
import { InvertColors } from "@mui/icons-material";

// import Drivers from "../Pages/Drivers";

const Dashboard = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');


  return (
    <>
      <DashboardAppbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <DashboardSidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          {/* <section className="card-container">
            <section className="card-1">
              <div className="card-details">
                <h4 className="card-title">Sales this Month</h4>
                <section className="card-count">₹500</section>
                <section className="card-button">
                  <Button size="small">See more</Button>
                </section>
              </div>
            </section>
            <section className="card-2">
              <div className="card-details">
                <h4 className="card-title">Over due sales</h4>
                <section className="card-count">₹500</section>
                <section className="card-button">
                  <Button size="small">See more</Button>
                </section>
              </div>
            </section>
            <section className="card-3"> 
              <div className="card-details">
                <h4 className="card-title">Sales Quotes</h4>
                <section className="card-count">1500</section>
                <section className="card-button">
                  <Button size="small" onClick={() => navigate("/")}>See more</Button>
                </section>
              </div>
            </section>
          </section> */}
          <h1 >Welcome,{email}</h1>

<Inventory/>
          {/* <Drivers /> */}
          
        </Box>
      </Box>
      </Box>
      </Box>
    </>
  );
};

export default Dashboard;
