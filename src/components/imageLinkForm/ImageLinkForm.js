import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =({onInputChange,onButtonSubmit})=>{
	return(
		<div>
			<p className='f3'>This Smartbrain will detect your face.Give it a try...</p>
			<div className='center '>
				<div className='sa pa4 br3 shadow-5 form'>
					<input className=' w-70 pa2 f4 ' type='text' onChange={onInputChange}></input>
					<button className=' w-30  grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>)
}
export default ImageLinkForm;