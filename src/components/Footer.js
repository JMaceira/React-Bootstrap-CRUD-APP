import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-light text-center text-white '>

      <div className='text-center p-3' style={{ backgroundColor: 'black' }}>
        © 2023 John Maceira:
        <a className='text-primary' href='https://www.youtube.com/watch?v=UzZj2ide0x8'>
           Click here for something awesome!
        </a>
      </div>
    </MDBFooter>
  );
}