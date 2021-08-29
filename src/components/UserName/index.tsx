import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useGlobalStyles from '../../styles/defaultStyles';

import Slash from '../../assets/Slash@2x.png';

const useStyles = makeStyles((theme) => ({
  slashIcon: {
    width: '19px',
    height: '26px',
    marginRight: '4px',
  },
}));

const UserName: React.FC = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <div>
      <h2 className={globalClasses.h2}>
        <img src={Slash} className={classes.slashIcon} alt="Remove this" />
        John Cena
      </h2>
    </div>
  );
};

export default UserName;
