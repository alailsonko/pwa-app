import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useGlobalStyles from '../../styles/defaultStyles';
import ErrorIcon from '../../assets/Error@3x.png';

const useStyles = makeStyles((theme) => ({
  errorIcon: {
    width: '34px',
    height: '34px',
  },
  errorWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '270px',
  },
}));

interface Props {
  error: string;
}

const Error: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const { error } = props;
  return (
    <div className={classes.errorWrapper}>
      <img src={ErrorIcon} className={classes.errorIcon} alt="Remove this" />
      <p className={globalClasses.p}>{error}</p>
    </div>
  );
};

export default Error;
