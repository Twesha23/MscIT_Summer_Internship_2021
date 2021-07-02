import { Component } from 'react';
import Particles from 'react-particles-js';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import WelcomeMsg from './components/WelcomeMsg/WelcomeMsg';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

const app = new Clarifai.App({
  apiKey: 'c9931ed723514370afd46f804f1f9c2d'
 });

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
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
  }

  componentDidMount(){
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(console.log)
      .catch(error => console.error('Error encountered: ', error));
  }

  onRouteChange = (route) => {
      this.setState({route: route});
      if(route === 'home')
        this.setState({isLoggedIn: true});
      else
        this.setState({isLoggedIn: false});
  }
  
  loadUser = (data) => {
    this.setState({user : {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joiningDate: data.joiningDate
    }})
    console.log(this.state.user)
  }
  
  calculateFaceBoxSize = (regions) => {
    const clarifaiFaceBox = regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = image.width;
    const height = image.height;
    this.setState({box : {
      topRow: clarifaiFaceBox.top_row * height,
      leftCol: clarifaiFaceBox.left_col * width,
      bottomRow: height - (clarifaiFaceBox.bottom_row * height),
      rightCol: width - (clarifaiFaceBox.right_col * width)
    }})
  }

  onInputChange= (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      const regions = response.outputs[0].data.regions;
      if(regions){
        fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
            })
            })
            .then(response => response.json())
            .then(count => {
                this.setState(Object.assign(this.state.user,{entries: count}))      
            })
        this.calculateFaceBoxSize(regions);
      } 
      else{
        console.log('No face detected');
      }
      })
    .catch(err => console.log('Error encountered:', err));
  }

  render(){
    const { imageURL, box, route, isLoggedIn} = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions}/>
        <Navigation isLoggedIn={isLoggedIn} onRouteChange={this.onRouteChange}/>
        <Logo/>
        { 
          route === 'home' ? 
          <div>
            <WelcomeMsg name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition imageURL={imageURL} box={box}/>
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
