/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { makeStyles, alpha, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';

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

interface Props {
  field: {
    value: string;
    isEditing: boolean;
  };
  idInput: string;
  nameInput: string;
  initialValue: string;
  labelName: string;
  handleEditButton(name: string, value: string): void;
  handleCancelButton(name: string): void;
  handleSaveButton(name: string, value: string): void;
  handleOnChange(name: string, value: string): void;
}

const InputField: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const {
    field,
    handleOnChange,
    handleCancelButton,
    handleEditButton,
    handleSaveButton,
    idInput,
    nameInput,
    initialValue,
    labelName,
  } = props;
  return (
    <div className={classes.inputWrapper}>
      {field && !field.isEditing ? (
        <InputLabel shrink htmlFor={nameInput}>
          {labelName}
        </InputLabel>
      ) : null}

      <BootstrapInput
        disabled={!!(field && !field.isEditing)}
        id={idInput}
        name={nameInput}
        type="text"
        value={
          (field && field.value) || (field && field.isEditing)
            ? field.value
            : initialValue
        }
        onChange={(e) => {
          handleOnChange(e.target.name, e.target.value);
        }}
        style={
          field && !field.isEditing
            ? {
                width: '210px',
              }
            : field && field.isEditing
            ? {
                border: '2px solid #1FD6BA',
                paddingRight: '108px',
              }
            : {}
        }
      />
      {field && !field.isEditing ? (
        <>
          <Button className={classes.deleteButton}>Delete</Button>
          <Button
            onClick={() => handleEditButton(nameInput, initialValue)}
            className={classes.editButton}
          >
            Edit
          </Button>
        </>
      ) : (
        <>
          <div className={classes.iconWrapper}>
            <Button
              classes={{
                root: classes.deleteButton,
              }}
              className={classes.deleteButton}
              onClick={() => handleCancelButton(field.value)}
            >
              <CloseIcon />
            </Button>
            <Button
              classes={{
                root: classes.editButton,
              }}
              className={classes.editButton}
              onClick={() => {
                if (field) {
                  handleSaveButton(nameInput, field.value);
                }
              }}
            >
              <ArrowForwardIcon />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default InputField;
