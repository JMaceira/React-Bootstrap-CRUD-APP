import React from 'react'
import Card from 'react-bootstrap/Card';
import OffTheCanvasRight from './OffcanvasRight';

function MeetJohn() {
    return (
        <Card className='card-img-top img-fluid poster' id='john' style={{ width: '18em' }}>
            <Card.Img variant="top" src="https://as1.ftcdn.net/v2/jpg/04/34/39/76/1000_F_434397641_mAr50gTwOOAgxaNUDGSCO71Pbr8RBt0o.jpg" />
            <Card.Body>
                <Card.Title><h3 className='text-center'>Meet John!</h3></Card.Title>
                <OffTheCanvasRight />
                {/* <Card.Text>
                    <p>Orthodontists specialize in the alignment of the teeth and jaw. These dental professionals use wires, braces, retainers, etc. to correct your bite.  A good bite makes it easier for you to bite, chew, and speak, and properly aligned teeth can be more esthetic. Today, a significant proportion of an orthodontist’s patients are adults. You are never too old to put your teeth in good alignment.</p>
                </Card.Text> */}
            </Card.Body>
        </Card>

    );
}

export default MeetJohn;