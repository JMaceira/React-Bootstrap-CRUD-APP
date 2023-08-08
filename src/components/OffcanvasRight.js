import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function OffTheCanvasRight() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-info text-dark" onClick={handleShow}>
                More About this Dentists Specialty
            </Button>

            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><h1 className='text-center'>An Orthodontists Information</h1></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h3>Orthodontists specialize in the alignment of the teeth and jaw. These dental professionals use wires, braces, retainers, etc. to correct your bite.  A good bite makes it easier for you to bite, chew, and speak, and properly aligned teeth can be more esthetic. Today, a significant proportion of an orthodontist’s patients are adults. You are never too old to put your teeth in good alignment.</h3>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
