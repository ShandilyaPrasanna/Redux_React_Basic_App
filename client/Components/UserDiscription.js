import React from 'react';
import {connect} from 'react-redux';

class UserDiscription extends React.Component{

	render(){
		if(!this.props.Activeuser){
return(
<div>
<ul><li><h3>SELECT USER</h3></li></ul>
</div>
	);
}
		
		else{
		return(
			<div>
<ul><li><h3>{this.props.Activeuser.description}</h3></li></ul>
		</div>
			);
	}

}
}
function mapStateToProps(state){
	return{
		Activeuser:state.Activeuser
	}
}

export default connect(mapStateToProps)(UserDiscription);