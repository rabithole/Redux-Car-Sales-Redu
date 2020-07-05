import React from 'react';
// import { connect } from 'react-redux';
// import actions from '../actions/actions';

const AdditionalFeature = props => {
	console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.buyItem(props.feature.id)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default AdditionalFeature;
