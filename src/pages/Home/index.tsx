import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import Logo from '../../components/Logo';
import UserName from '../../components/UserName';
import WelcomeMessage from '../../components/WelcomeMessage';
import useGlobalStyles from '../../styles/defaultStyles';

const Home: React.FC = () => {
  const globalClasses = useGlobalStyles();
  return (
    <>
      <div className={globalClasses.container}>
        <Logo />
        <UserName classStyle={globalClasses.h2} title="John Cena" />
        <WelcomeMessage />
        <Link to="/register" className={globalClasses.alignItemsColumn}>
          <Button size="large" className={globalClasses.button}>
            Start
            <ArrowForward className={globalClasses.extendedIcon} />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
