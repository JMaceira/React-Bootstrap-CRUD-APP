import React from 'react'
import { useState, useEffect } from 'react';
import TableComponent from '../components/TableComponent'
import PatientForm from '../components/PatientForm'


export default function PatientsInfo() {
  const Patients_Api_URL = 'https://6496f10083d4c69925a341bd.mockapi.io/Patients';

  const [patientList, setPatientList] = useState([])


  //// CRUD operations for Application ////


  /// using function getCustomers in order to fetch the mockAPI url and turn the data it receives into json.
  function getPatients() {
    fetch(Patients_Api_URL)
      .then(data => data.json())
      .then(data => {
        setPatientList(data)
      })
  }


  const [newPatient, setNewPatient] = useState({
    name: '',
    address: '',
    number: '',
    balance: '',
  })

  const [updatedName, setUpdatedName] = useState('')
  const [updatedAddress, setUpdatedAddress] = useState('')
  const [UpdatedNumber, setUpdatedNumber] = useState('')
  const [updatedBalance, setUpdatedBalance] = useState('')

  function handleUpdatedName(updatedNameValue) {
    setUpdatedName(updatedNameValue)
  }

  function handleUpdatedAddress(updatedAddressValue) {
    setUpdatedAddress(updatedAddressValue)
  }

  function handleUpdatedNumber(updatedNumberValue) {
    setUpdatedNumber(updatedNumberValue)
  }

  function handleUpdatedBalance(updatedBalanceValue) {
    setUpdatedBalance(updatedBalanceValue)
  }



  function handleName(nameValue) {
    setNewPatient({
      ...newPatient,
      name: nameValue,
    })
  }

  function handleAddress(addressValue) {
    setNewPatient({
      ...newPatient,
      address: addressValue,
    })
  }

  function handleNumber(numberValue) {
    setNewPatient({
      ...newPatient,
      number: numberValue,
    })

  }

  function handleBalance(balanceValue) {
    setNewPatient({
      ...newPatient,
      balance: balanceValue,
    })
  }

  useEffect(() => {
    fetch(Patients_Api_URL)
      .then((data) => data.json())
      .then((data) => setPatientList(data))
  }, [])


  const postPatient = (e) => {
    e.preventDefault()
    console.log('doing postPatient')

    fetch(Patients_Api_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPatient)
    }).then(() => getPatients())


    setNewPatient({
      name: '',
      address: '',
      number: '',
      balance: '',
    })
  }

  const updatePatient = (patient) => {

    let updatedPatient = patient
    updatedPatient.name = updatedName
    updatedPatient.address = updatedAddress
    updatedPatient.number = UpdatedNumber
    updatedPatient.balance = updatedBalance
    console.log(updatedPatient)
    console.log('Updating patient name')

    fetch(`${Patients_Api_URL}/${patient.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPatient)
    }).then(() => getPatients())
  }

  const deletePatient = (id) => {
    console.log(id)
    console.log('DELETING USER')
    alert("This patient is being DELETED!")

    fetch(`${Patients_Api_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => getPatients())

  }



  return (
    <div>
      <br></br>
      <h1 className='text-center'><b>Patients Information</b></h1>

      <TableComponent
        patients={patientList}
        deletePatient={deletePatient}
        updatePatient={updatePatient}
        handleUpdatedName={handleUpdatedName}
        handleUpdatedAddress={handleUpdatedAddress}
        handleUpdatedNumber={handleUpdatedNumber}
        handleUpdatedBalance={handleUpdatedBalance} />

      <hr></hr>

      <PatientForm
        newPatient={newPatient}
        postPatient={postPatient}
        patients={patientList}
        handleName={handleName}
        handleAddress={handleAddress}
        handleNumber={handleNumber}
        handleBalance={handleBalance} />

    </div>



  )
}
