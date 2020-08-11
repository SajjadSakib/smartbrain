import React,{Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation.js';
import Logo from './components/logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognation from './components/FaceRecognation/FaceRecognation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
const ParticleOption = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


const initialstate=  {
	input:'',
		imageUrl:'',
		box:{},
		route:'SignIn',
		isSignedIn:false,
		user:{
			id:'',
			name:'',
			email:'',
			entries:'',
			joined:''
}
}   
class  App extends Component {
	constructor(){
	super();
	this.state=initialstate;
}
loadUser=(data)=>{
	this.setState({user:{
			id:data.id,
			name:data.name,
			email:data.email,
			entries:data.entries,
			joined:data.joined
	}
			
	})

}
// componentDidMount(){
	// fetch('http://localhost:3000')
	// .then(response=>response.json())
	// .then(data=>console.log(data))

// }
calculateFace=(data)=>{
	const clarifaiFace =data.outputs[0].data.regions[0].region_info.bounding_box;
	const image =document.getElementById('face');
	const width=Number(image.width);
	const height =Number(image.height);
	return{
	  leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
	}
	
}
displayFaceBox =(box)=>{
	this.setState({box:box})
}
onInputChange=(event)=>{
	this.setState({input: event.target.value})
}
onButtonSubmit=()=>{
	this.setState({imageUrl:this.state.input})

	 
          fetch('https://frozen-mountain-28132.herokuapp.com/image', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response =>response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
              if (count) {  
				fetch('https://frozen-mountain-28132.herokuapp.com/imageurl',{
				 	method:'post',
				 	headers:{'Content-Type':'application/json'},
			        body:JSON.stringify({
			          url:this.state.imageUrl
			         
			      })
			    })
			     .then(response=>response.json())

				.then(response => {
			        
			        this.displayFaceBox(this.calculateFace(response))
			      })}
            })

     
      .catch(err => console.log(err));

  }
onRouteChange=(route)=>{
	if(route ==='SignIn'){
		this.setState(initialstate)
	}else if(route==='home'){
		this.setState({isSignedIn:true})
	}
	this.setState({route: route})
}

 render(){
  return (
    <div className="App">
     <Particles className='particles' 
                params={ParticleOption} />

      <Navigation isSignedIn={this.state.isSignedIn}onRouteChange={this.onRouteChange}/>
     {this.state.route === 'home'?
      <div>
	      <Logo/>
	      <Rank name={this.state.user.name} entries={this.state.user.entries}/>
	      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
	      <FaceRecognation box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
  	:(this.state.route === 'SignIn'?
  	<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
  		:<Register loadUser={this.loadUser}onRouteChange={this.onRouteChange}/>)}
    </div>
  )};
}

export default App;
