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
    super(props);  // You will always need these for class
    this.state = {array: []};
  }
  
  
  componentDidMount() {
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.036275,%20-78.500208&radius=500&type=restaurant&key='+ googlePlaces)
      .then(response => {
        const results = response.data.results;
        var resties = [];
        var i;
        for (i= 0; i < results.length; i++) {
          
         
          var entry = {
            name: results[i].name,
            rating: results[i].rating,
            hours: results[i].opening_hours.open_now
          }
          resties.push(entry);

        }
      
        this.setState({
          array: resties
        });
        
        console.log(resties);
      })
      .catch(function (error){
        console.log(error);
      });
    
  }  

  render(){ 
  const listy = (
    
    <ul>
      {this.state.array.map((rest) => 
        <li key={rest.id}>
          <h1> Name: {rest.name} </h1>
          <p> Rating: {rest.rating} </p> 
          <p> Price: {rest.price} </p>
          <p> Hours: {rest.hours}</p>
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

 