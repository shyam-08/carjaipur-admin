import React , { useState, useEffect }  from 'react'
import DashboardAppbar from '../dashboard/DashboardAppbar'
import DashboardSidebar from '../dashboard/DashboardSidebar'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Typography } from '@mui/material';

const ContactData = () => {
  const [cardata, setCardata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
  const database = getFirestore();

        const carsCollection = collection(database, 'contact data'); // Reference to the Firestore collection
        const querySnapshot = await getDocs(carsCollection);
        const carsData=[];
        querySnapshot.forEach((doc) => {
          carsData.push({ id: doc.id, ...doc.data() });
        });
        setCardata( carsData);
        console.log(carsData)
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();

    
  
  }, []); 
  return (
    
    <div>
        
        <div className="p-4">   
      {/* <div className='mt-6'> */}
      <Typography variant='secondary' sx={{ padding:'4px'}}>We can track who want to reach us.</Typography>

      
      <table className="border-collapse border w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">S.No</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Number</th>
          
          </tr>
        </thead>
        <tbody>
          {cardata.map((car, index) => (
            <tr key={index} className="bg-white">
              <td className="border p-2">{car.sno || (index + 1)}</td>
              <td className="border p-2">{car.name}</td>
              <td className="border p-2">{car.email}</td>
              <td className="border p-2">{car.number}</td>
             

            </tr>
          ))}
        </tbody>
      </table>
      </div>
    {/* </div> */}
      
    </div>
  )
}

export default ContactData

