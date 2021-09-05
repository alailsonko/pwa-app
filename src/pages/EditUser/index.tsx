/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useDispatch, connect } from 'react-redux';
import Logo from '../../components/Logo';
import InputField from '../../components/InputField';
import UserName from '../../components/UserName';
import Selfie from '../../assets/Selfie@3x.png';
import useGlobalStyles from '../../styles/defaultStyles';
import { logout } from '../../store/middlewares/signup/signup.actions';

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
  button: {
    fontFamily: 'GilroyBold',
    fontSize: '18pt',
    lineHeight: '24pt',
    textAlign: 'left',
    color: '#EA573E',
    textTransform: 'none',
    border: '2px solid #EA573E',
    borderRadius: '0',
    padding: '10pt',
    // position: 'absolute',
    bottom: '6vh',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      border: '2px solid #EA573E',
      color: '#EA573E',
      boxShadow: 'none',
    },
  },
  iconsWrapper: {
    marginLeft: '-247px',
    marginBottom: '30px',
  },
  iconSize: {
    width: '30px',
    height: '30px',
  },
  iconButtonWrapper: {
    width: '30px',
    height: '30px',
    marginRight: '7px',
    minWidth: '0',
  },
}));

interface IFieldEditUser {
  value: string | any;
  isEditing: boolean;
}

interface IEditUser {
  name: IFieldEditUser;
  username: IFieldEditUser;
  address: IFieldEditUser;
  city: IFieldEditUser;
  postalCode: IFieldEditUser;
  email: IFieldEditUser;
  phoneNumber: IFieldEditUser;
  socialMedia: IFieldEditUser;
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
  address: {
    value: '',
    isEditing: false,
  },
  city: {
    value: '',
    isEditing: false,
  },
  postalCode: {
    value: '',
    isEditing: false,
  },
  email: {
    value: '',
    isEditing: false,
  },
  phoneNumber: {
    value: '',
    isEditing: false,
  },
  socialMedia: {
    value: '',
    isEditing: false,
  },
};

interface Props {
  session: any;
}

const EditUser: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState<IEditUser>(initialStateEditUser);
  const { session } = props;
  const handleEditButton = (name: string, value: string) => {
    console.log(name, value);
    setEditUser({
      ...editUser,
      [name]: {
        value,
        isEditing: true,
      },
    });
  };
  const handleCancelButton = (name: string) => {
    console.log(name);
  };
  const handleSaveButton = (name: string, value: string) => {
    console.log(name, value);
    setEditUser({
      ...editUser,
      [name]: {
        value,
        isEditing: false,
      },
    });
  };
  const handleOnChange = (name: string, value: string) => {
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
        handleCancelButton={handleCancelButton}
        handleSaveButton={handleSaveButton}
        handleEditButton={handleEditButton}
        handleOnChange={handleOnChange}
        idInput="name"
        initialValue={`${session.name} ${session.surname}`}
        labelName="name"
        nameInput="name"
        isDeleteRequired={false}
      />
      <InputField
        field={editUser.username}
        handleCancelButton={handleCancelButton}
        handleSaveButton={handleSaveButton}
        handleEditButton={handleEditButton}
        handleOnChange={handleOnChange}
        idInput="username"
        initialValue={session.displayName}
        labelName="Username"
        nameInput="username"
        isDeleteRequired={false}
      />
      <InputField
        field={editUser.address}
        handleCancelButton={handleCancelButton}
        handleSaveButton={handleSaveButton}
        handleEditButton={handleEditButton}
        handleOnChange={handleOnChange}
        idInput="address"
        initialValue={`${session.contact.locations[0].address.streetName} ${session.contact.locations[0].address.streetNumber}`}
        labelName="Address"
        nameInput="address"
        isDeleteRequired
      />
      <InputField
        field={editUser.city}
        handleCancelButton={handleCancelButton}
        handleSaveButton={handleSaveButton}
        handleEditButton={handleEditButton}
        handleOnChange={handleOnChange}
        idInput="city"
        initialValue={session.contact.locations[0].address.suburb}
        labelName="City"
        nameInput="city"
        isDeleteRequired
      />
      <InputField
        field={editUser.postalCode}
        handleCancelButton={handleCancelButton}
        handleSaveButton={handleSaveButton}
        handleEditButton={handleEditButton}
        handleOnChange={handleOnChange}
        idInput="postalCode"
        initialValue={session.contact.locations[0].address.postalCode}
        labelName="Postal Code"
        nameInput="postalCode"
        isDeleteRequired
      />
      <InputField
        field={editUser.email}
        handleCancelButton={handleCancelButton}
        handleSaveButton={handleSaveButton}
        handleEditButton={handleEditButton}
        handleOnChange={handleOnChange}
        idInput="email"
        initialValue={session.contact.email}
        labelName="E-mail"
        nameInput="email"
        isDeleteRequired
      />
      <InputField
        field={editUser.phoneNumber}
        handleCancelButton={handleCancelButton}
        handleSaveButton={handleSaveButton}
        handleEditButton={handleEditButton}
        handleOnChange={handleOnChange}
        idInput="phoneNumber"
        initialValue={session.contact.phoneNumber.replace(
          /^(.{3})(.{3})(.*)$/,
          '+420 $1 $2 $3'
        )}
        labelName="Phone"
        nameInput="phoneNumber"
        isDeleteRequired
      />
      <InputField
        field={editUser.socialMedia}
        handleCancelButton={handleCancelButton}
        handleSaveButton={handleSaveButton}
        handleEditButton={handleEditButton}
        handleOnChange={handleOnChange}
        idInput="socialMedia"
        initialValue={session.contact.socialNetworks[0].name}
        labelName="Social Media"
        nameInput="socialMedia"
        isDeleteRequired
      />
      <div className={classes.iconsWrapper}>
        <Button
          classes={{
            root: classes.iconButtonWrapper,
          }}
          type="button"
        >
          <FacebookIcon className={classes.iconSize} />
        </Button>
        <Button
          classes={{
            root: classes.iconButtonWrapper,
          }}
          type="button"
        >
          <TwitterIcon className={classes.iconSize} />
        </Button>
      </div>
      <div className={globalClasses.alignItemsColumn}>
        <Button
          onClick={() => dispatch(logout())}
          size="large"
          className={classes.button}
        >
          Logout
          <ArrowForward className={globalClasses.extendedIcon} />
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  session: state.signup.session,
});

export default connect(mapStateToProps)(EditUser);
