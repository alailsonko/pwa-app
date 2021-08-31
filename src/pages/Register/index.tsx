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
import PasswordIcon from '../../assets/Password@3x.png';
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

const schemaUsername = yup.object().shape({
  username: yup
    .string()
    .min(3, 'lengthError')
    .max(20, 'lengthError')
    .matches(/^[a-zA-Z0-9\s]+$/, 'matchesError')
    .required('lengthError'),
});

const schema = yup.object().shape({
  password: yup
    .string()
    .min(9, 'lengthPasswordError')
    .required('lengthPasswordError'),
  passwordConfirm: yup
    .string()
    .min(9, 'lengthPasswordError')
    .oneOf([yup.ref('password'), null], 'matchesPasswordError'),
});

interface IValid {
  value: string;
  isValid: boolean;
}

interface IRegisterData {
  username?: IValid;
  password?: IValid;
  passwordConfirm?: IValid;
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
    passwordConfirm: {
      value: '',
      isValid: false,
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (registerData.username && !registerData.username.isValid) {
      schemaUsername
        .validate(
          {
            username: registerData.username.value,
          },
          { abortEarly: false }
        )
        .then((valid) => {
          setRegisterData({
            ...registerData,
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
          } else if (err.message === 'lengthError') {
            setError(
              'Ooops! Your username must be between 3 and 20 characters long.'
            );
          } else {
            setError(
              'Ooops! Your username must be between 3 and 20 characters long.'
            );
          }
        });
    }
    if (
      registerData.username &&
      registerData.username.isValid &&
      registerData.password &&
      !registerData.password.isValid &&
      registerData.passwordConfirm &&
      !registerData.passwordConfirm.isValid
    ) {
      schema
        .validate(
          {
            password: registerData.password.value,
            passwordConfirm: registerData.passwordConfirm.value,
          },
          { abortEarly: false }
        )
        .then((valid) => {
          setRegisterData({
            ...registerData,
            password: {
              value: valid.password,
              isValid: true,
            },
            passwordConfirm: {
              value: valid.password,
              isValid: true,
            },
          });
          console.log('success');
        })
        .catch((err: Error) => {
          if (err.message === 'matchesPasswordError') {
            setError(
              "Ooops! Those passwords don't match. Try it again, please."
            );
          } else if (err.message === 'lengthPasswordError') {
            setError(
              'Ooops! That password is too weak. Password must be at least 9 characters long'
            );
          } else {
            setError(
              'Ooops! That password is too weak. Password must be at least 9 characters long'
            );
          }
        });
    }
    return null;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setError('');
    setRegisterData({ ...registerData, [name]: { value, isValid: false } });
  };

  return (
    <>
      <div className={globalClasses.container}>
        <Logo />
        <UserName classStyle={globalClasses.h2} title="John Cena" />
        {registerData.username && !registerData.username.isValid ? (
          <div className={globalClasses.alignItemsColumn}>
            <img src={User} className={classes.userIcon} alt="user" />
            <h1 className={globalClasses.h1}>
              <span>Start by setting up</span>
              <br />
              <span>your username.</span>
            </h1>
          </div>
        ) : (
          <div className={globalClasses.alignItemsColumn}>
            <img src={PasswordIcon} className={classes.userIcon} alt="user" />
            <h1 className={globalClasses.h1}>
              <span>Great, now your</span>
              <br />
              <span>password, please.</span>
            </h1>
          </div>
        )}

        <form className={globalClasses.alignItemsColumn}>
          {registerData.username && !registerData.username.isValid ? (
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
          ) : (
            <>
              <BootstrapInput
                style={{
                  border: error ? '2px solid #EA573E' : '2px solid #FFFFFF',
                  color: error ? '#EA573E' : '#FFFFFF',
                  marginBottom: '20px',
                }}
                placeholder="Make it strong!"
                id="password"
                name="password"
                onChange={handleChange}
                type="password"
              />
              <BootstrapInput
                style={{
                  border: error ? '2px solid #EA573E' : '2px solid #FFFFFF',
                  color: error ? '#EA573E' : '#FFFFFF',
                }}
                placeholder="And once again..."
                id="passwordConfirm"
                name="passwordConfirm"
                onChange={handleChange}
                type="password"
              />
            </>
          )}

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
