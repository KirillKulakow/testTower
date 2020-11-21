import { UPLOAD_USERS, SET_LOADING, SET_PAGE } from '../types'

const initialState = {
    loading: true,
    currentPage: 1
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_USERS:
            let array = action.payload
            let size = 5
            let newArray = []
            let allPages = Math.ceil(array.length/size)
            for (let i = 0; i < allPages; i++){
                newArray[i] = array.slice((i*size), (i*size) + size)
            }
            return { 
                ...state, 
                allUsers: [...action.payload],
                pages: [...newArray], 
                allPages: allPages 
            }
        case SET_LOADING:
            return {...state, loading: action.payload}
        case SET_PAGE:
            return { ...state, currentPage: action.payload}
        default:
            return state
    }
}

export default rootReducer