import produce from 'immer';

const types = {
  STARTED_REQUEST: 'STARTED_REQUEST',
  SUCCESSFUL_REQUEST: 'SUCCESSFUL_REQUEST',
  FAILED_REQUEST: 'FAILED_REQUEST',
  FINISHED_REQUEST: 'FINISHED_REQUEST',
  START_REQUEST: 'START_REQUEST'
};

const initialApiState = {
  isLoading: false,
  data: '',
  error: null,
  shouldRequest: false,
  idToken: '',
  isAuthenticated: false
};

const reducer = produce((state = initialApiState, action) => {
  const { type, apiRequest, ...props } = action;
  console.log(`${apiRequest} type: `, type, props);
  switch (type) {
    case types.STARTED_REQUEST:
      return {
        ...state,
        isLoading: true,
        shouldRequest: false
      };
    case types.FINISHED_REQUEST:
      return {
        ...state,
        isLoading: false
      };
    case types.SUCCESSFUL_REQUEST:
      return {
        ...state,
        data: action.data
      };
    case types.FAILED_REQUEST:
      return {
        ...state,
        error: action.error
      };
    case types.START_REQUEST:
      return {
        ...state,
        shouldRequest: true
      };
    default:
      return state;
  }
});

export { types, initialApiState, reducer };
