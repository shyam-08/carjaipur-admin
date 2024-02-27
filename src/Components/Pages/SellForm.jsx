import React, { useState, useEffect } from 'react'
import DashboardAppbar from '../dashboard/DashboardAppbar'
import DashboardSidebar from '../dashboard/DashboardSidebar'
import { Box } from "@mui/material";
import { Button } from "@mui/material";

// import { getFirestore, collection, getDocs } from "firebase/firestore";
import SellData from './SellData';
const SellForm = () => {
    // const [cardata, setCardata] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const database = getFirestore();
    //       const carsCollection = collection(database, 'sell data');
    //       const querySnapshot = await getDocs(carsCollection);
    //       const carsData = [];
    //       querySnapshot.forEach((doc) => {
    //         carsData.push({ id: doc.id, ...doc.data() });
    //       });
    //       setCardata(carsData);
    //     } catch (error) {
    //       console.error('Error fetching data from Firestore:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []); 
  
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
            {/* <h1 >Welcome,{email}</h1> */}
    
    {/* <Inventory/> */}
    <SellData/>
            {/* <Drivers /> */}
            
          </Box>
        </Box>
        </Box>
        </Box>
      </>
    )
  
}

export default SellForm
