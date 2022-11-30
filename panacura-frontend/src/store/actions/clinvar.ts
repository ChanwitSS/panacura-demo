import axios from '../../axios';
import { clinvarAction } from '../reducers/clinvar';

export const getClinvarListLoading = () => {
  return {
    type: clinvarAction.GET_CLINVAR_LIST_LOADING,
  };
};

export const getClinvarListSuccess = (data: any, count: any) => {
  return {
    type: clinvarAction.GET_CLINVAR_LIST_SUCCESS,
    data,
    count,
  };
};

export const getClinvarListFailed = (error: any) => {
  return {
    type: clinvarAction.GET_CLINVAR_LIST_FAILED,
    error,
  };
};

export const getClinvarList = () => {
  return (dispatch: any) => {
    dispatch(getClinvarListLoading());
    return axios
      .get(`/clinvars/postgres`, {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('token')}`,
        // },
      })
      .then((response) => {
        dispatch(getClinvarListSuccess(response?.data, response?.data?.count));
      })
      .catch((error) => {
        dispatch(getClinvarListFailed(error?.response?.data?.message));
      });
  };
};

export const getClinvarLoading = () => {
  return {
    type: clinvarAction.GET_CLINVAR_LOADING,
  };
};

export const getClinvarSuccess = (data: any) => {
  return {
    type: clinvarAction.GET_CLINVAR_SUCCESS,
    data,
  };
};

export const getClinvarFailed = (error: any) => {
  return {
    type: clinvarAction.GET_CLINVAR_FAILED,
    error,
  };
};

export const getClinvar = (id: string) => {
  return (dispatch: any) => {
    dispatch(getClinvarLoading());
    return axios
      .get(`clinvars/postgres/${id}`, {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem(Key.TOKEN)}`,
        // },
      })
      .then((response) => {
        dispatch(getClinvarSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getClinvarFailed(error?.response?.data?.message));
      });
  };
};
