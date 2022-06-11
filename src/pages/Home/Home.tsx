import NavBar from '../../components/NavBar/NavBar';
import { Fragment, useEffect } from 'react';
import Container from '../../components/Home/Container';
import Payment from '../../components/Popup/Payment/Payment';
import Burger from '../../components/Burger/Burger';
import IUser from '../../components/NavBar/classes/User/IUser';
import { useParams, useNavigate } from 'react-router-dom';
import IHome from '../../components/Home/clasess/IHome';

function Home() {
  const user = new IUser('borsuk', '/users/borsuk/borsuk.jpg', 0, 1);
  const home = new IHome();
  const { id } = useParams();
  const router = useNavigate();

  useEffect(() => {
    if (!home.isPage(id)) router(`/panel/${home.page[0]}`); 
  }, []);

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