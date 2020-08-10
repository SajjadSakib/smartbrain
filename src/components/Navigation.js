import React from 'react';

const navigation =({onRouteChange,isSignedIn})=>{
	// eslint-disable-next-line
		{if(isSignedIn){
			return(
			<nav style={{display:'flex', justifyContent:'flex-end'}}>
			 <p className='f3 link dim black underline pointer' onClick={()=>onRouteChange('SignIn')}>SignOut</p>
			</nav>)
		}else{
			return(
			<nav style={{display:'flex', justifyContent:'flex-end'}}>
			 <p className='f3 link dim black underline pointer mr2' onClick={()=>onRouteChange('SignIn')}>SignIn</p>
			 <p className='f3 link dim black underline pointer' onClick={()=>onRouteChange('Register')}>Register</p>
			</nav>
			)
 		}
 	}
		


}
export default navigation;