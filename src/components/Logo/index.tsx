import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LogoIcon from '../../assets/Logo Icon@1x.png';
import useGlobalStyles from '../../styles/defaultStyles';

const useStyles = makeStyles((theme) => ({
  logoIcon: {
    width: '35px',
    height: '35px',
    marginRight: '6px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Logo: React.FC = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <div className={classes.logo}>
      <img src={LogoIcon} className={classes.logoIcon} alt="Remove this" />
      <h1 className={globalClasses.h1}>zentity</h1>
    </div>
  );
};

export default Logo;
