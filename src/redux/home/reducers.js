import * as actionTypes from './constants'

const initialState = {
    movieList: [],
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MOVIE_LIST_SUCCESS:
            return {
                ...state,
                movieList: action.payload.results
            }
        case actionTypes.GET_MOVIE_LIST_FAILURE:
            return {
                ...state,
                error: action.payload.message
            }
        default: return state;
    }
}

export default reducer;