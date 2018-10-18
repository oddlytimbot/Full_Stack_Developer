///provide an initial state
const initialState = {
    authenticated: false,
    login: 'not-requested',
    registerStatus: 'not-requested',
    userInfo:{
        firstName:"Tim",
        status:"Suuuuuper happy"
    }
}

///reducers are organized by their concerns
//concerned with authentication

export function authReducer(state=initialState, action){
    switch(action.type){
        case 'LOGIN':
        return Object.assign({}, state, {
            login: 'requested'
        })
        case 'UNAUTHENTICATED':
        return{
            authenticated: false
        }
        case "AUTHENTICATED":
        return{
            authenticated: true
        }
        case "REGISTER_REQUEST":
        if(action.payLoad.status=="success"){
            return{
                registerStatus:"completed"
            }
        }
        if(action.payLoad.status=="fail"){
            return{
                registerStatus:"fail"
            }
        }
        return{
            registerStatus: "requested"
        }
        default:
        return state;
    }
}
