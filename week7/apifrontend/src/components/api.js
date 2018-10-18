import React from 'react';
import {Component} from 'react';


export class API extends Component{
    constructor(props){
        super(props);
        console.log("API is ready to rock!");
    }
    registrationSuccess(){
        this.props.registerSuccess();
    }
    registrationFail(){
        this.props.registerFail();
    }
    componentWillReceiveProps(nextProps){
        console.log("I know a prop changed at API");
        console.log(nextProps.registrationRequested);
        if(nextProps.registrationRequested=="requested"){
            //fake success call to database api
            this.registrationFail();
        }
    }

    render(){
        return null;
    }
};