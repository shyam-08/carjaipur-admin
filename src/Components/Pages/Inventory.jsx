// Inventory.js

import React, { useState, useEffect } from 'react';
// import firestore from 'firebase/app'; // Importing firestore instance from firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import Modal from '../Modal/Modal'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Inventory = () => {
  const [cardata, setCardata] = useState([]);
  const [newData, setNewData] = useState({});
  const database = getFirestore();
  const deleteData = async (documentId) => {
    try {
      await deleteDoc(doc(database, 'car data', documentId)); // Delete the document using deleteDoc method
      console.log('Document deleted successfully.');
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  const updateData= async (documentId, newData) => {
    try {
      await updateDoc(doc(database, 'car data', documentId), newData); // Delete the document using deleteDoc method
      console.log('Document updated successfully.');
    } catch (error) {
      console.error('Error update document: ', error);
    }
  };

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
              <td className="border p-2">
    <DeleteIcon onClick={() => deleteData(car.id)} />
  </td>
  {/* <td className="border p-2">
    <ModeEditIcon onClick={() => updateData(car.id , newData)}/>
  </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
