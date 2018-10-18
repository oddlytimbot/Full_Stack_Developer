import {connect} from 'react-redux';
import {Layout} from '../layout';
import {actions} from "../../actions/actions";

export const AppContainer = connect(
    function mapStateToProps(state){
        return {
            authenticated: state.authReducer.authenticated
        }
    },
    function mapDispatchToProps(dispatch){
        return{
            logIn: ()=>{
                dispatch( actions.logIn() )
            }
        }
    }
)(Layout);