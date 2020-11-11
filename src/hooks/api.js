/* eslint-disable import/prefer-default-export */
import { useReducer } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import * as serviceNetApi from '../api';
// import { useUserState } from '../contexts/user';
import { types, reducer, initialApiState } from '../reducers/apiReducer';

export const validateParams = props => {
  const { apiParams } = props;
  return Object.keys(apiParams).reduce((isValid, paramKey) => {
    const IS_NOT_VALID = !isValid;
    if (IS_NOT_VALID) {
      return isValid;
    }
    const IS_VALID = !!apiParams[paramKey];
    return IS_VALID;
  }, true);
};

export const useMakeRequest = props => {
  const {
    apiRequest,
    apiParams = {},
    immediateRequest = true,
    defaultReturn = {}
  } = props;

  const initialState = {
    ...initialApiState,
    shouldRequest: immediateRequest,
    data: defaultReturn
  };

  const [apiState, dispatch] = useReducer(reducer, initialState);
  const { isLoading, data, error, shouldRequest } = apiState;

  const executeRequest = () =>
    dispatch({ type: types.START_REQUEST, apiRequest });

  const hasValidParams = validateParams({ apiParams });
  //   const { user } = useUserState();

  useDeepCompareEffect(() => {
    const makeRequest = async () => {
      try {
        dispatch({ type: types.STARTED_REQUEST, apiRequest });
        // const headers = {
        //   Authorization: `Bearer ${user.accessToken}`
        // };
        const response = await serviceNetApi[apiRequest]({
          apiParams
          //   headers
        });

        dispatch({
          type: types.SUCCESSFUL_REQUEST,
          apiRequest,
          data: response.data
        });
      } catch (requestError) {
        dispatch({
          type: types.FAILED_REQUEST,
          apiRequest,
          error: requestError
        });
      } finally {
        dispatch({ type: types.FINISHED_REQUEST, apiRequest });
      }
    };

    if (shouldRequest && hasValidParams) {
      makeRequest();
    }
  }, [shouldRequest, hasValidParams, apiParams, apiRequest]);
  return { isLoading, data, error, executeRequest };
};
