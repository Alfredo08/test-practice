import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChangeName from './ChangeName';
import {Route, BrowserRouter, Link} from 'react-router-dom';

class App extends React.Component {

  constructor( props ){
    super( props );
    this.state = {
      name : "Alfredo"
    }
  }

  handleName = ( newName ) => {
    this.setState({
      name : newName
    });
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <h1> {this.state.name} </h1>
          <Link to="/change">
            Change Name
          </Link>
          <Link to="/">
            Back to Home 
          </Link>
          <Route path="/change" render={ () => <ChangeName handleName={this.handleName} /> }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
