export const actions = {
    logIn: (email, password, status="requested")=>{
        return{
            type: 'LOGIN',
            payLoad: {email:email, password:password, status:status}
        }

    },
    register: (email, password)=>{
        return{
            type: 'REGISTER_REQUEST',
            payLoad: {email:email, password:password}
        }
    },
    registerSuccess: ()=>{
        return{
            type: 'REGISTER_REQUEST',
            payLoad: {status:"success"}
        }
    },
    registerFail: ()=>{
        return{
            type: 'REGISTER_REQUEST',
            payLoad: {status:"fail"}
        }
    }
}