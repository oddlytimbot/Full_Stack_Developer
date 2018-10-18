import {connect} from 'react-redux';
import {actions} from '../../actions/actions';
import {Register} from '../register';
export const RegisterContainer = connect(
    function mapStateToProps(state){
        return{
            authenticated: state.authReducer.authenticated,
            registrationRequested: state.authReducer.registerStatus
        }
    },
    function mapDispatchToProps(dispatch){
        return{
            register: (email, password)=>{
                dispatch( actions.register(email, password) );
            }
        }
    }
)(Register)