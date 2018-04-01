import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

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
    <Restraunter name= "skwad" />
  );

  var restraunts = [
    {"mando's":{
      'rating': 5,
      'price' : '$',
      'hours' : '5-9'
    }}
  ]