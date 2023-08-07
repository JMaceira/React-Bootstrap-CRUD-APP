import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function DentalCarousel() {
  return (
    <Carousel className='text-center'>
      <Carousel.Item interval={1000}>
        <img src="https://www.perio.org/wp-content/uploads/2020/02/dental-implant.png" text="Dental Implant" alt='Showing teeth with one tooth being implanted by screw' />
        <Carousel.Caption>
          <h4>Dental Implant</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QugOk2mUEtHrLCV9gfqFppmIM7t8urgxBA&usqp=CAU" text="Dental Cleaning" alt='Two dirty teeth looking right at two clean teeth' />
        <Carousel.Caption>
          <h4>Dental Cleanings</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqfWqDJkejFBX4o-wZl23Lp8EAlEDk-gb0Q&usqp=CAU" text="First slide" alt='' />
        <Carousel.Caption>
          <h4 className='text-primary text-bold'>That's All FOLKS!</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
