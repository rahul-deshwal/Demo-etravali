import { SET_LOADING } from './constants';
import { store } from '../../index';

export const setLoading = (isLoading) => 
    store.dispatch({type: SET_LOADING, payload: isLoading});