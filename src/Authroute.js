import React from "react";
import {Route,Redirect} from "react-router-dom";
import {fakeAuth} from "./auth";

export const AuthenticRoute = ({ component: Component, ...rest})=>{
    return (
        <Route 
        {...rest}
        render={props=>{
            if(fakeAuth.isAuthenticated){
                return (<Component {...props}/>);
            }
            else{
                return (
                    <Redirect to={{
                        pathname:"/EmailLogin",
                        state:{
                            from:props.location
                        }
                    }}
                    />
                );
            }
        }
        }
        />
    );
};