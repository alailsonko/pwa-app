import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Code from '../../assets/Code@3x.png';
import useGlobalStyles from '../../styles/defaultStyles';

const useStyles = makeStyles((theme) => ({
  codeIcon: {
    width: '65px',
    height: '65px',
  },
}));

const WelcomeMessage: React.FC = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <div className={globalClasses.alignItemsColumn}>
      <img src={Code} className={classes.codeIcon} alt="Remove this" />
      <h1 className={globalClasses.h1}>
        <span>Welcome to testing</span>
        <br />
        <span>assignment at ZENTITY.</span>
      </h1>
    </div>
  );
};

export default WelcomeMessage;
