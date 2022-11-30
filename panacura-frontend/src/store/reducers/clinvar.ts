export const clinvarAction = {
  GET_CLINVAR_LIST_LOADING: 'GET_CLINVAR_LIST_LOADING',
  GET_CLINVAR_LIST_SUCCESS: 'GET_CLINVAR_LIST_SUCCESS',
  GET_CLINVAR_LIST_FAILED: 'GET_CLINVAR_LIST_FAILED',

  GET_CLINVAR_LOADING: 'GET_CLINVAR_LOADING',
  GET_CLINVAR_SUCCESS: 'GET_CLINVAR_SUCCESS',
  GET_CLINVAR_FAILED: 'GET_CLINVAR_FAILED',
};

// Reducer
const initialState = { all: [], loading: false, count: 0 };
const reducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case clinvarAction.GET_CLINVAR_LIST_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case clinvarAction.GET_CLINVAR_LIST_SUCCESS:
      return {
        ...state,
        all: action.data,
        loading: false,
        count: action.count,
        error: undefined,
      };
    case clinvarAction.GET_CLINVAR_LIST_FAILED:
      return {
        ...state,
        all: [],
        count: 0,
        loading: false,
        error: action.error,
      };
    case clinvarAction.GET_CLINVAR_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case clinvarAction.GET_CLINVAR_SUCCESS:
      return {
        ...state,
        loading: false,
        GET: action.data,
        error: undefined,
      };
    case clinvarAction.GET_CLINVAR_FAILED:
      return {
        ...state,
        loading: false,
        GET: undefined,
        error: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
