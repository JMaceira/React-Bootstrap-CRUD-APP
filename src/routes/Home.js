import MeetChris from '../components/Chris';
import MeetJohn from '../components/John';


export default function Home() {
  return (
    <div>
      <br></br>
      <h1 className='text-center'>Meet Our Dentists!</h1>

      <br></br>
      <br></br>

      <div className="d-flex justify-content-evenly">
        <MeetChris />
        <MeetJohn />

      </div>

      <br></br>

    </div>

  );
}