import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store} from './actionables/store';
import jsPlumb from "jsplumb/dist/js/jsplumb.min";
//import { createStore } from "redux";
//import Reducer from './redux/reducers/reducer';
//const store = createStore(Reducer);

class MyJsPlumb extends Component {
  constructor(props) {
    super(props);
    this.state = { rps:0,apiResponse:"" }
    this.slidechanger=this.slidechanger.bind(this);
  }
  slidechanger(e) {
    //console.log("event value"+e);
    //var ref = e.target.value;
    this.setState({ rps: e });
  }
  callApi(){
    fetch("https://localhost:9000/testApi").then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}))
  }

/*rpsconnection =(rpsconnection)=>{
  this.setState({rps:rpsconnection})

}*/

  render() { 
    let jsplumb = jsPlumb.jsPlumb;
    return (  <div>
      <Provider store={store}>
      <Header slidechanger={this.slidechanger} jsplumb={jsplumb}/>
      {this.state.apiResponse}
      <Main rps={this.state.rps} jsplumb={jsplumb}/>
      </Provider>
      <Footer/>
    </div>);
  }
}
 
export default MyJsPlumb;


  