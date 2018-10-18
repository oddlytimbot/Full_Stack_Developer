import React from 'react';
import {MemoryRouter, Switch} from 'react-router';
import {Link, Route} from 'react-router-dom';
import {Home} from './home'
import {RegisterContainer} from './containers/registerContainer';
import {Login} from './login';
import {APIContainer} from './containers/apiContainer';

export const Layout = (props)=>{
    return(
        <div>
            
            <MemoryRouter>
                <div>
                    <div>
                        <h1>Menu goes here</h1>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                    <APIContainer />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={RegisterContainer} />
                    </Switch>
                </div>
            </MemoryRouter>
        </div>
        ///props.logIn()
    )
}