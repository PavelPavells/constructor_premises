//import axios from 'axios';
import { FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './types';

/** ********** FUNCTION FOR FETCH BEGIN ********** */
export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
})

/** ********** FUNCTION FOR FETCH SUCCESS ********** */
export const fetchDataSuccess = products => ({
    type: FETCH_DATA_SUCCESS,
    payload: { products }
})

/** ********** FUNCTION FOR FETCH_FAILURE ********** */
export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: { error }
})