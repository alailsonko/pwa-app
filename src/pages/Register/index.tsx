/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import * as yup from 'yup';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import { makeStyles, alpha, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Logo from '../../components/Logo';
import UserName from '../../components/UserName';
import Error from '../../components/Error';
import User from '../../assets/User@3x.png';
import ErrorIcon from '../../assets/Error@3x.png';
import useGlobalStyles from '../../styles/defaultStyles';

const BootstrapInput = withStyles((theme) => ({
  input: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    position: 'relative',
    width: theme.spacing(30),
    height: theme.spacing(5),
    paddingLeft: '18px',
    fontSize: '18pt',
    fontFamily: ['GilroyMedium'].join(','),
    '&:focus': {
      color: '#FFFFFF',
      fontSize: '18pt',
    },
    '&::placeholder': {
      color: '#FFFFFF',
      fontSize: '18pt',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  userIcon: {
    width: '65px',
    height: '65px',
  },
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

const schema = yup.object().shape({
  username: yup
    .string()
    .min(3)
    .max(20)
    .matches(/^[a-zA-Z0-9\s]+$/, 'matchesError')
    .required('lengthError'),
});

interface IValid {
  value: string;
  isValid: boolean;
}

interface IRegisterData {
  username?: IValid;
  password?: IValid;
}

const Register: React.FC = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [error, setError] = useState<string>(
    'Ooops! Your username must contain only letters, numbers and spaces.'
  );
  const [registerData, setRegisterData] = useState<IRegisterData>({
    username: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (registerData.username) {
      schema
        .validate(
          {
            username: registerData.username.value,
          },
          { abortEarly: false }
        )
        .then((valid) => {
          setRegisterData({
            username: {
              value: valid.username,
              isValid: true,
            },
          });
        })
        .catch((err: Error) => {
          if (err.message === 'matchesError') {
            setError(
              'Ooops! Your username must contain only letters, numbers and spaces.'
            );
          }
        });
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setError('');
    setRegisterData({ [name]: { value } });
  };

  return (
    <>
      <div className={globalClasses.container}>
        <Logo />
        <UserName />
        <div className={globalClasses.alignItemsColumn}>
          <img src={User} className={classes.userIcon} alt="Remove this" />
          <h1 className={globalClasses.h1}>
            <span>Start by setting up</span>
            <br />
            <span>your username.</span>
          </h1>
        </div>
        <form className={globalClasses.alignItemsColumn}>
          <BootstrapInput
            style={{
              border: error ? '2px solid #EA573E' : '2px solid #FFFFFF',
              color: error ? '#EA573E' : '#FFFFFF',
            }}
            placeholder="Here, please!"
            id="username"
            name="username"
            onChange={handleChange}
          />
          {error ? <Error error={error} /> : null}
          <div className={globalClasses.alignItemsColumn}>
            <Button
              onClick={handleSubmit}
              type="submit"
              size="large"
              className={globalClasses.button}
            >
              Continue
              <ArrowForward className={globalClasses.extendedIcon} />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
