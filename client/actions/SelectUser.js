export const SelectUser= (user)=>{
	console.log("User: "+user.first+" Selected");
	return{
		type:"USER_SELECTED",
		payload:user
	}
}