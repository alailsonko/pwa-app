import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Slash from '../../assets/Slash@2x.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
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
  h2: {
    fontFamily: 'GilroyMedium',
    fontSize: '18pt',
    lineHeight: '24pt',
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'normal',
  },
  slashIcon: {
    width: '19px',
    height: '26px',
    marginRight: '4px',
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div>
          <h2 className={classes.h2}>
            <img src={Slash} className={classes.slashIcon} alt="Remove this" />
            John Cena
          </h2>
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
