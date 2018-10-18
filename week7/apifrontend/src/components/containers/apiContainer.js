import {connect} from 'react-redux';
import {API} from '../api';
import {actions} from '../../actions/actions';

export const APIContainer = connect(
    function mapStateToProps(state){
        return{
            registrationRequested: state.authReducer.registerStatus
        }
    },
    function mapDispatchToProps(dispatch){
        return{
            registerSuccess: ()=>{
                console.log("api container heard success");
                dispatch( actions.registerSuccess() );
            },
            registerFail: ()=>{
                dispatch(actions.registerFail() );
            }
        }
    }
)(API)