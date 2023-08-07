import React from 'react'
import Card from 'react-bootstrap/Card';

function MeetChris() {
    return (
        <Card className='card-img-top img-fluid poster' id='chris' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://as1.ftcdn.net/v2/jpg/02/55/21/04/1000_F_255210499_rWAt8guZZSh3aha3YbvbNlZO8nq0syia.jpg" />
            <Card.Body>
                <Card.Title><h3>Meet Chris!</h3></Card.Title>
                <Card.Text>
                    <p>A General Dentist is the most common type of dentist. They can provide a full range of routine and often complex dental services. This dental professional is the primary care dental provider for people of all ages and is responsible for the diagnosis, treatment and overall management for your lifetime of oral health needs. If you are in need of more complex or specialized services or procedures, your general dentist may refer you to a dentist that has advanced training and specializes in that service.</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MeetChris;
