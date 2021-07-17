import React from 'react';
import './App.css';

class favoriteColor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {show: true};
  }

deleteAll = () => {
  this.setState({show: false});
}

render(){
  let allThings;
  if (this.state.show){
    allThings = <Child />;
  };

  //aca configuro para que se borre todo con el boton
  return(
    <div>
      {allThings}
    <button type ='button' onClick={this.deleteAll}>Delete.</button>
    </div>
    );
  }
}

//aca configuro un alert.
class Child extends React.Component {
  componentWillUnmount(){
    alert("The component named Header is about to be unmounted.");
  }
  render(){
    return(
      <h1>Hello World</h1>
    );
  }
}


export default favoriteColor;


