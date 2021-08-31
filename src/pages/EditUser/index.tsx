/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './styles.css';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../components/Logo';
import InputField from '../../components/InputField';
import UserName from '../../components/UserName';
import Selfie from '../../assets/Selfie@3x.png';
import useGlobalStyles from '../../styles/defaultStyles';

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
