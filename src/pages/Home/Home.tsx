import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react';
import Container from '../../components/Home/Container';
import Payment from '../../components/Popup/Payment/Payment';
import Burger from '../../components/Burger/Burger';
import IUser from '../../components/NavBar/classes/User/IUser';

function Home() {
  const user = new IUser('borsuk', '/users/borsuk/borsuk.jpg', 0, 1);
  return (
    <Fragment>
      <Burger user={user} />
      <Payment />
      <NavBar user={user} />
      <Container />
    </Fragment>
  );
}

export default Home;