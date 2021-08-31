/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './styles.css';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import { makeStyles, alpha, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../../components/Logo';
import InputField from '../../components/InputField';
import UserName from '../../components/UserName';
import Selfie from '../../assets/Selfie@3x.png';
import useGlobalStyles from '../../styles/defaultStyles';

const BootstrapInput = withStyles((theme) => ({
  input: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    position: 'relative',
    width: theme.spacing(24),
    height: theme.spacing(5),
    paddingLeft: '18px',
    fontSize: '18pt',
    fontFamily: ['GilroyMedium'].join(','),
    // '&:focus': {
    //   color: '#14173D',
    //   fontSize: '18pt',
    //   border: '0.1px solid #1FD6BA',
    // },
    '&::placeholder': {
      color: '#14173D',
      fontSize: '18pt',
    },
    '&:disabled': {
      color: '#14173D',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  selfieIcon: {
    width: '65px',
    height: '65px',
  },
  navWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1vh 0',
  },
  editButton: {
    textTransform: 'none',
    color: '#1FD6BA',
    minWidth: '54px',
  },
  deleteButton: {
    textTransform: 'none',
    color: '#EA573E',
    minWidth: '54px',
  },
  inputWrapper: {
    position: 'relative',
  },
  iconWrapper: {
    position: 'absolute',
    bottom: theme.spacing(1.4),
    right: '0',
  },
}));

interface IFieldEditUser {
  value: string | any;
  isEditing: boolean;
}

interface IEditUser {
  name: IFieldEditUser;
  username: IFieldEditUser;
}

const initialStateEditUser: IEditUser = {
  name: {
    value: '',
    isEditing: false,
  },
  username: {
    value: '',
    isEditing: false,
  },
};

const EditUser: React.FC = () => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [editUser, setEditUser] = useState<IEditUser>(initialStateEditUser);
  const handleEditButton = (field: string, value: string) => {
    setEditUser({
      ...editUser,
      [field]: {
        value,
        isEditing: true,
      },
    });
  };
  const handleSaveButton = (field: string, value: string) => {
    setEditUser({
      ...editUser,
      [field]: {
        value,
        isEditing: false,
      },
    });
  };
  const handleCancelButton = () => {
    console.log('cancel');
  };
  const testingHandleEditButton = (name: string, value: string) => {
    console.log(name, value);
    setEditUser({
      ...editUser,
      [name]: {
        value,
        isEditing: true,
      },
    });
  };
  const testingHandleCancelButton = (name: string) => {
    console.log(name);
  };
  const testingHandleSaveButton = (name: string, value: string) => {
    console.log(name, value);
    setEditUser({
      ...editUser,
      [name]: {
        value,
        isEditing: false,
      },
    });
  };
  const testingHandleOnChange = (name: string, value: string) => {
    console.log(name, value);
    setEditUser({
      ...editUser,
      [name]: {
        value,
        isEditing: true,
      },
    });
  };

  return (
    <div className={globalClasses.alignItemsColumn}>
      <div className={classes.navWrapper}>
        <ArrowBack
          style={{
            color: '#EA573E',
          }}
        />
        <div
          style={{
            margin: '0 48px',
          }}
        >
          <Logo />
        </div>
        <img className={classes.selfieIcon} src={Selfie} alt="selfie" />
      </div>
      <UserName classStyle={globalClasses.h3} title="Edit your profile" />
      <div className={classes.inputWrapper}>
        {editUser.name && !editUser.name.isEditing ? (
          <InputLabel shrink htmlFor="name">
            name
          </InputLabel>
        ) : null}

        <BootstrapInput
          disabled={!!(editUser.name && !editUser.name.isEditing)}
          id="name"
          name="name"
          type="text"
          value={
            (editUser.name && editUser.name.value) ||
            (editUser.name && editUser.name.isEditing)
              ? editUser.name.value
              : 'John Cena'
          }
          onChange={(e) => {
            setEditUser({
              ...editUser,
              name: {
                value: e.target.value,
                isEditing: true,
              },
            });
          }}
          style={
            editUser.name && !editUser.name.isEditing
              ? {
                  width: '210px',
                }
              : editUser.name && editUser.name.isEditing
              ? {
                  border: '2px solid #1FD6BA',
                  paddingRight: '108px',
                }
              : {}
          }
        />
        {editUser.name && !editUser.name.isEditing ? (
          <>
            <Button className={classes.deleteButton}>Delete</Button>
            <Button
              onClick={() => handleEditButton('name', 'John Cena')}
              className={classes.editButton}
            >
              Edit
            </Button>
          </>
        ) : (
          <div className={classes.iconWrapper}>
            <Button
              classes={{
                root: classes.deleteButton,
              }}
              className={classes.deleteButton}
              onClick={handleCancelButton}
            >
              <CloseIcon />
            </Button>
            <Button
              classes={{
                root: classes.editButton,
              }}
              className={classes.editButton}
              onClick={() => {
                if (editUser.name) {
                  handleSaveButton('name', editUser.name.value);
                }
              }}
            >
              <ArrowForwardIcon />
            </Button>
          </div>
        )}
      </div>
      <InputField
        field={editUser.name}
        handleCancelButton={testingHandleCancelButton}
        handleSaveButton={testingHandleSaveButton}
        handleEditButton={testingHandleEditButton}
        handleOnChange={testingHandleOnChange}
        idInput="name"
        initialValue="John Cena"
        labelName="name"
        nameInput="name"
      />
      <InputField
        field={editUser.username}
        handleCancelButton={testingHandleCancelButton}
        handleSaveButton={testingHandleSaveButton}
        handleEditButton={testingHandleEditButton}
        handleOnChange={testingHandleOnChange}
        idInput="username"
        initialValue="Invisible john"
        labelName="Username"
        nameInput="username"
      />
    </div>
  );
};

export default EditUser;
