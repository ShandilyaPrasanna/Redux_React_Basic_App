import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SelectUser} from './../actions/SelectUser';

class Userlist extends React.Component{

createList(){

	return this.props.Users.map((user)=>{
		return(
            <li key={user.id}
            onClick={()=>this.props.SelectUser(user)}>
            <h3>{user.first} {user.last}</h3>
            </li>
			);
	       })
           }


render(){
		
	return(

          <div>
           <ul>
            {this.createList()}
           </ul>
          </div>

			);
}
}


function mapStateToProps(state){
	return{
		Users:state.Users
	};
}

function matchDispatchToProps(dispatch){

	return bindActionCreators({SelectUser:SelectUser},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Userlist);