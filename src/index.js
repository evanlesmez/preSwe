import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Restraunter extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }
  }
ReactDOM.render(
    <Restraunter name= "skwad" />,document.getElementById('root')
  );

  var restraunts = [
    {"mando's":{
      'rating': 5,
      'price' : '$',
      'hours' : '5-9'
    }}
  ]