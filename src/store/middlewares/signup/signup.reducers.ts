import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT,
} from './signup.types';

const initialState = {
  loading: false,
  session: {},
  isLogged: false,
  error: '',
};

interface SignUpActionTypes {
  type: string;
  payload: any;
}

export default function signup(
  state = initialState,
  action: SignUpActionTypes
) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        session: action.payload,
        isLogged: true,
        error: '',
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        session: {},
        isLogged: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
}
