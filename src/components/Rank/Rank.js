import React from 'react';

const Rank =({name,entries})=>{
	return(
		<div>
			<div>
			 <p className='f3 pa0'>{`Hiii ${name} !! your current entries are.......`}</p>
			</div>
			<div>
			 <p className='f1 pa0'>{`${entries}`}</p>
			</div>
		</div>
		)

}
export default Rank;