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

interface Props {
  title: string;
  classStyle: string;
}

const UserName: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { classStyle, title } = props;
  return (
    <div>
      <h2 className={classStyle}>
        <img src={Slash} className={classes.slashIcon} alt="Remove this" />
        {title}
      </h2>
    </div>
  );
};

export default UserName;
