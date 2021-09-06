
import { Link } from 'react-router-dom';

function Landing() {

  return (
    <>
      <h1>
        This is the landing page!
      </h1>
      <img src='/images/summer.jpg' style={{ width: '600px' }} />
      <br />
      <Link to={'../Home'}>Link to the home page</Link>
    </>
  );
}

export default Landing;
