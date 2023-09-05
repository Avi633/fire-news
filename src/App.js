import React, { Component } from 'react'
import Navbar from './Navbar.js';
import News from './News.js';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
export default class App extends Component {
  constructor (){
    super();
    this.state={
      Mode:"light"
    }
  }
   toggle=()=>{
    if(this.state.Mode==="light"){
      this.setState({
        Mode:"dark"
        });
    }else{
      this.setState({
        Mode:"light"
        });
    }
  }
  
  render() {
    return (
      <>
       <Router>
       <Navbar mode={this.state.Mode} toggle={this.toggle} />
        <Switch>
          <Route path='/general'><News key={1} pagesize={10}  country="us"  category="general" /></Route >
          <Route path='/business'><News key={2} pagesize={10}  country="us"  category="business" /></Route >
          <Route path='/entertainment'><News key={3} pagesize={10}  country="us"  category="entertainment" /></Route >
          <Route path='/health'><News key={4} pagesize={10}  country="us"  category="health" /></Route >
          <Route path='/science'><News key={5}  pagesize={10}  country="us"  category="health" /></Route >
          <Route path='/sports'><News key={6} pagesize={10}  country="us"  category="sports" /></Route >
          <Route path='/technology'><News key={7}  pagesize={10}  country="us"  category="technology" /></Route >
         
        </Switch>
        </Router>
      </>
    )
  }
}

