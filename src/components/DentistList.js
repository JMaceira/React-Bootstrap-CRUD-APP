import React from 'react';
import { useState, useEffect } from 'react';

export default function DentistList() {
  const Dentist_Api_URL = 'https://6496f10083d4c69925a341bd.mockapi.io/Dentist';

  const [dentistList, setDentistList] = useState([])


  //// CRUD operations for Application ////

  /// using function getCustomers in order to fetch the mockAPI url and turn the data it receives into json.
  function getDentist() {
    fetch(Dentist_Api_URL)
      .then(data => data.json())
      .then(data => {
        setDentistList(data)
        console.log(data)
      })
  }

  /// useEffect in order to get the list of customers whenever the page re-renders and console.logging it
  useEffect(() => {
    //getCustomers() takes 2 seconds. console.log() takes 1 second - which one should we do first?
    getDentist()
  }, []) /// empty array makes it only happen one time 

  return (
    <div>
      {dentistList.map((dentist, index,) => (
        <dentist key={index} dentist={dentist} />
      ))}
    </div>
  );
}