import MeetChris from '../components/Chris';
import MeetJohn from '../components/John';

export default function Home() {
  return (
    <div>
      <h1 className='text-center'>Meet Our Dentists!</h1>
      <br></br>
      <br></br>

      <MeetChris />
      <MeetJohn />
    </div>
  );
}