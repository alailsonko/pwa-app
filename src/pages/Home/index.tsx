import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Slash from '../../assets/Slash@2x.png';
import Logo from '../../assets/Logo Icon@1x.png';
import Code from '../../assets/Code@3x.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '4vh',
  },
  alignItemsColumn: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '6vh',
  },
  button: {
    margin: theme.spacing(1),
    fontFamily: 'GilroyBold',
    fontSize: '18pt',
    lineHeight: '24pt',
    textAlign: 'left',
    color: '#FFFFFF',
    textTransform: 'none',
    border: '2px solid #FFFFFF',
    borderRadius: '0',
    padding: '10pt',
    position: 'absolute',
    bottom: '6vh',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      border: '2px solid #EA573E',
      color: '#EA573E',
      boxShadow: 'none',
    },
  },
  extendedIcon: {
    marginLeft: theme.spacing(9),
  },
  h1: {
    fontFamily: 'GilroyBold',
    fontSize: '18pt',
    lineHeight: '24pt',
    textAlign: 'center',
    color: '#EA573E',
    fontWeight: 'bold',
  },
  h2: {
    fontFamily: 'GilroyMedium',
    fontSize: '18pt',
    lineHeight: '24pt',
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'normal',
  },
  h3: {
    fontFamily: 'GilroyMedium',
    fontSize: '18pt',
    lineHeight: '24pt',
    textAlign: 'center',
    color: '#14173D',
    fontWeight: 'normal',
  },
  h4: {
    fontFamily: 'GilroyMedium',
    fontSize: '12pt',
    lineHeight: '24pt',
    textAlign: 'left',
    color: '#14173D',
    fontWeight: 'normal',
  },
  h5: {
    fontFamily: 'GilroyMedium',
    fontSize: '12pt',
    lineHeight: '24pt',
    textAlign: 'left',
    color: '#1FD6BA',
    fontWeight: 'normal',
  },
  h6: {
    fontFamily: 'GilroyMedium',
    fontSize: '12pt',
    lineHeight: '24pt',
    textAlign: 'left',
    color: '#EA573E',
    fontWeight: 'normal',
  },
  slashIcon: {
    width: '19px',
    height: '26px',
    marginRight: '4px',
  },
  logoIcon: {
    width: '35px',
    height: '35px',
    marginRight: '6px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  codeIcon: {
    width: '65px',
    height: '65px',
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={Logo} className={classes.logoIcon} alt="Remove this" />
          <h1 className={classes.h1}>zentity</h1>
        </div>

        <div>
          <h2 className={classes.h2}>
            <img src={Slash} className={classes.slashIcon} alt="Remove this" />
            John Cena
          </h2>
        </div>
        <div className={classes.alignItemsColumn}>
          <img src={Code} className={classes.codeIcon} alt="Remove this" />
          <h1 className={classes.h1}>
            <span>Welcome to testing</span>
            <br />
            <span>assignment at ZENTITY.</span>
          </h1>
        </div>
        <Button size="large" className={classes.button}>
          Start
          <ArrowForward className={classes.extendedIcon} />
        </Button>
      </div>
    </>
  );
};

export default Home;
