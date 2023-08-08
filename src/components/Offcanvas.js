import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function OffTheCanvasLeft() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-info text-dark" onClick={handleShow}>
                More About this Dentists Specialty
            </Button>

            <Offcanvas className='' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><h1 className='text-center'>General Dentist Information</h1></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h3>A General Dentist is the most common type of dentist. They can provide a full range of routine and often complex dental services. This dental professional is the primary care dental provider for people of all ages and is responsible for the diagnosis, treatment and overall management for your lifetime of oral health needs. If you are in need of more complex or specialized services or procedures, your general dentist may refer you to a dentist that has advanced training and specializes in that service.</h3>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

