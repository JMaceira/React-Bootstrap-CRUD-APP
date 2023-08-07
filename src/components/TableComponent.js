import React from 'react'
import { Table } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';




export default function TableComponent({ patients, deletePatient, updatePatient, handleUpdatedName, handleUpdatedAddress, handleUpdatedNumber, handleUpdatedBalance }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Table striped responsive hover>
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Patient Full Name</th>
          <th>Patient Phone Number</th>
          <th>Patient Address</th>
          <th>Patient Balance Due</th>
          <th>Edit Section</th>
        </tr>
      </thead>
      <tbody>

        {patients.map((patient, index) => (
          <tr key={index} patient={patient}>
            <td>{patient.id}</td>
            <td>{patient.name}</td>
            <td>{patient.number}</td>
            <td>{patient.address}</td>
            <td>{patient.balance}</td>
            <td>    <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                ✍
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/delete" ><button onClick={() =>  {deletePatient(patient.id)}}>🚮</button></Dropdown.Item>
                <Dropdown.Item href="#/update" ><>
                  <Button variant="primary" onClick={handleShow}>
                    Update Patient
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title ><h1>Patient Update Info</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>   <input onChange={(e) => handleUpdatedName(e.target.value)} placeholder='Enter New Name'></input>
                    <input onChange={(e) => handleUpdatedAddress(e.target.value)} placeholder='Enter New Address'></input>
                    <br></br>
                    <br></br>
                    <input onChange={(e) => handleUpdatedNumber(e.target.value)} placeholder='Enter New Number'></input>
                    <input onChange={(e) => handleUpdatedBalance(e.target.value)} placeholder='Enter New Balance'></input>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={() => {
                        handleClose()
                        updatePatient(patient)
                      } }>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></td>

            {/* <td>
                <button onClick={() => deletePatient(patient.id)}>🚮</button>
                </td>
                <td>
                  <input onChange={(e) => handleUpdatedName(e.target.value)} placeholder='Enter New Name'></input>
                <button onClick={(e) => updatePatient(patient)}>update</button>
                </td> */}

          </tr>
        ))}
      </tbody>
    </Table>
  );
}




