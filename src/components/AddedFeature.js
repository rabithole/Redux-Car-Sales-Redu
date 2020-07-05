import React from 'react';
// import { connect } from 'react-redux';

const AddedFeature = props => {
	console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature.id)}>X</button>
      {props.feature}
    </li>
  );
};

export default AddedFeature;
