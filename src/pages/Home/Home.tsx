import style from './home.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react';
import Container from '../../components/Home/Container';

function Home() {
  return (
    <Fragment>
      <NavBar />
      <Container />
    </Fragment>
  )
}

export default Home