import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

const dummies = [   
  {id: 1, name: "mandos", rating: 5, price: '$', hours : '5-9'},
  {id: 2, name: "schwiftys", rating: 100, price : '-$', hours : '0-24'}
];
const googlePlaces = 'AIzaSyAZnKYiC7hreOptN7KDJ94LIhBp43isywk'
class Restraunter extends React.Component {
  constructor(props){
    super(props);
    this.state = {array: dummies};
  }
  
 
    
  /* componentDidMount() {
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.036275,%20-78.500208&radius=500&type=restaurant&key='+ googlePlaces);
}  */
// If success then add to array, if fail then don't
  render(){
  const listy = (
    <ul>
      {this.state.array.map((rest) => 
        <li key={rest.id}>
          <h1> Name: {rest.name} </h1>
          <li> Rating: {rest.rating} </li>
          <li> Price: {rest.price} </li>
          <li> Hours: {rest.hours}</li>
        </li>
        
      )}
    </ul>
    );
    return (
      <div>
        {listy}
      </div>
    );
  }
}

 
  // restraunts array has to be before ReactDOM.render
  ReactDOM.render(<Restraunter />,
    document.getElementById('root')
  );

 