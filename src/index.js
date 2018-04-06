import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const googlePlaces = 'AIzaSyAZnKYiC7hreOptN7KDJ94LIhBp43isywk'

function Restraunter(props) {
  const listy = (
    <ul>
      {props.restraunts.map((rest) => 
        <li key={rest.id}>
          Name: {rest.name}
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
  const restraunts = [   
    {id: 1, name: "mandos", rating: 5, price: '$', hours : '5-9'},
    {id: 2, name: "schwiftys", rating: 100, price : '-$', hours : '0-24'}
  ];
  // restraunts array has to be before ReactDOM.render
  ReactDOM.render(<Restraunter restraunts={restraunts} />,
    document.getElementById('root')
  );

 