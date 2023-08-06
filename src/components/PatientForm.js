import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function PatientForm({
  postPatient,
  handleName,
  handleAddress,
  handleNumber,
  handleBalance,
  newPatient }) {

  return (
    <form onSubmit={(e) => postPatient(e)} className='myPatientForm'>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='FullName' label='Full name' value={newPatient.name} onChange={(e) => handleName(e.target.value)} />
        </MDBCol>
        {/*  */}
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='PatientAddress' label='Address' value={newPatient.address} onChange={(e) => handleAddress(e.target.value)} />
      <MDBInput wrapperClass='mb-4' type='tel' id='PatientPhone' label='Phone' value={newPatient.number} onChange={(e) => handleNumber(e.target.value)} />

      <InputGroup className="mb-3" style={{
        width: "200px"
      }}>
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" type='balance' id='PatientBalance' label='Balance' value={newPatient.balance} onChange={(e) => handleBalance(e.target.value)}/>
      </InputGroup>

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='NewPatientCheckBox'
        label='Create New Patient?'
        defaultChecked
      />
      <MDBBtn>Submit</MDBBtn>
      <br></br>
    </form>
  );
}