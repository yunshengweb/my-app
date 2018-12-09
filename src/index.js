import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, NavLink,Switch } from "react-router-dom";


import {HeroDetails} from "./components/HeroDetails";
import {HeroHlLink, HeroVlLink} from "./components/hero";
import {EmailLogin} from "./components/emailvalidate";
import {UserEntry} from "./components/textvalidate";
import {Temp} from "./components/Temp";
import {AuthenticRoute} from './Authroute';
import {RestApi} from "./components/restapi";
import {fakeAuth} from "./auth";


class MyApp extends React.Component{
	render()
	{
		return(
			<BrowserRouter>
			<div>
				<TopNavigation></TopNavigation>
				<Switch>
				<Route path="/" component={HeroHlLink} exact/>
				<Route path="/Home" component={HeroHlLink} exact/>
				<Route path="/HeroesList" component={HeroVlLink}/>
				<AuthenticRoute path="/HeroDetails/:id/:name" component={HeroDetails}/>
				<Route path="/RestApi" component={RestApi}/>
				<Route path="/Loginout" component={Loginout} exact/>
				<Route path="/EmailLogin" component={EmailLogin}/>
				<AuthenticRoute path="/UserEntry" component={UserEntry}/>
				<Route path="/Temp" component={Temp}/>

				</Switch>
			</div>
			</BrowserRouter>	
		);
	}
}

export class TopNavigation extends React.Component{

	render(){
		return (
			<div className="nav">
				<div>
				<NavLink to="/Home">Dashbord</NavLink>
				<NavLink to="/HeroesList">Heroes</NavLink>	
				<NavLink to="/RestApi">REST</NavLink>	
				<NavLink to="/UserEntry">UserInfo</NavLink>	
				<NavLink to="/Temp">Temp</NavLink>	
				</div>
				<div className="topright">
					<NavLink to="/Loginout">{fakeAuth.isAuthenticated?'Logout':'Login'}</NavLink>	
				</div>
			</div>

		);
	}
	
}

export class Loginout extends React.Component {
	render(){
		if(fakeAuth.isAuthenticated)
		{
			fakeAuth.signout(()=>{console.log("logout")});      
			return (<Redirect to="/Home"></Redirect>); 
		}
		else
		{
			return (<Redirect to="/EmailLogin"></Redirect>); 
		}
	}
}

ReactDOM.render(<MyApp></MyApp>, document.getElementById('root'));
