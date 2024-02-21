// Inventory.js

import React, { useState, useEffect } from 'react';
// import firestore from 'firebase/app'; // Importing firestore instance from firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Modal from '../Modal/Modal'

const Inventory = () => {
  const [cardata, setCardata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
  const database = getFirestore();

        const carsCollection = collection(database, 'car data'); // Reference to the Firestore collection
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
    <div className="p-4">
      <div className='p-2'>
      <Modal/>

      </div>
      <table className="border-collapse border w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">S.No</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Car No</th>
            <th className="border p-2">Color</th>
            <th className="border p-2">Fuel</th>
            <th className="border p-2">Owner</th>
          </tr>
        </thead>
        <tbody>
          {cardata.map((car, index) => (
            <tr key={index} className="bg-white">
              <td className="border p-2">{car.sno || (index + 1)}</td>
              <td className="border p-2">{car.carname}</td>
              <td className="border p-2">{car.carno}</td>
              <td className="border p-2">{car.color}</td>
              <td className="border p-2">{car.fuel}</td>
              <td className="border p-2">{car.owner}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
