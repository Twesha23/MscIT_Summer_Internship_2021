import { Component } from 'react';
import Particles from 'react-particles-js';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}



 const initialstate = {
  input: '',
  imageURL: '',
  faceBoxes: [{}],
  isFaceDetected:null,
  route: 'login',
  isLoggedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joiningDate: ''
 }

}

class App extends Component {
  constructor(){
    super();
    this.state = initialstate;
 }

  componentDidMount(){
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(console.log)
      .catch(error => console.error('Error encountered: ', error));
  }

  onRouteChange = (route) => {
      
      if(route === 'home')
        this.setState({isLoggedIn: true});
      else
      {
        //this.setState({isLoggedIn: false});
        this.setState(initialstate);
      }
      this.setState({route: route});
  }
  
  loadUser = (data) => {
    this.setState({user : {
      id: data._id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joiningDate: data.joiningDate
    }})
    console.log(this.state.user)
  }
  


  calculateFaceBoxSize = (regions) => {
    const boxes = [{}];
    const image = document.getElementById('inputImage');
    const width = image.width;
    const height = image.height;
    regions.forEach(region => {
      const clarifaiFaceBox = region.region_info.bounding_box;
      boxes.push({
        topRow: clarifaiFaceBox.top_row * height,
        leftCol: clarifaiFaceBox.left_col * width,
        bottomRow: height - (clarifaiFaceBox.bottom_row * height),
        rightCol: width - (clarifaiFaceBox.right_col * width)
      });
    });
    this.setState({faceBoxes : boxes});
  }

  onInputChange= (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    fetch('http://localhost:3000/imageURL', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                imageURL: this.state.input
            })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const regions = response.outputs[0].data.regions;
      if(regions){
        fetch('http://localhost:3000/imageEntry', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: this.state.user,
                faces_detected: regions.length
            })
            })
            .then(response => response.json())
            .then(count => {
                this.setState(Object.assign(this.state.user,{entries: count}))      
            })
            .catch(error => console.error('Error encountered: ', error));
        this.setState({isFaceDetected: true});
        this.calculateFaceBoxSize(regions);
      } 
      else{
        this.setState({faceBoxes: [{}], isFaceDetected: false});
      }
      })
    .catch(err => console.error('Error encountered:', err));
  }

  render(){
    const { imageURL, faceBoxes, route, isLoggedIn , isFaceDetected} = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions}/>
        <Navigation isLoggedIn={isLoggedIn} onRouteChange={this.onRouteChange}/>
        <Logo/>
        { 
          route === 'home' ? 
          <div>
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition imageURL={imageURL} faceBoxes={faceBoxes} isFaceDetected={isFaceDetected}/>
          </div>
          : ( route === 'login' ? 
              <Login onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
            : <Registration onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          )
        }
        </div>
    );
  }
}

export default App;
