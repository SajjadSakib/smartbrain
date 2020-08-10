import React from 'react';
import './FaceRecognation.css';
const FaceRecognation =({imageUrl,box})=>{
	return(
		<div className='center ma '>
			<div className=' center absolute center mt2'>
				<img className='center' id='face' src={imageUrl} alt='' width='500px' height='auto'/>
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>)
}
export default FaceRecognation;
// className='bounding-box' style={{top:box.topRow,left:box.leftCol,bottom:box.bottomRow,right:box.rightCol}}