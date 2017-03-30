import React from 'react';
import Userlist from './Userlist';
import UserDiscription from './UserDiscription';
class App extends React.Component{


render(){
	return(
	<div>
	<h2>Username List:</h2>
	<Userlist />
    <hr/>
    <h2>User Details:</h2>
    <UserDiscription />
    </div>
);
}}

module.exports=App;