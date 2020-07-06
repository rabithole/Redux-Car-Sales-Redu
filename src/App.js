import React from 'react';
import { connect } from 'react-redux'; // Connect is a higher order function. 
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
// import AdditionalFeature from './components/AdditionalFeature';
import { buyItem, removeFeature } from './actions/actions';
import Total from './components/Total';
import actions from './actions/actions';

// import { AddedFeatures, removeFeatures } from './actions/actions';

const App = (props) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    // console.log('REMOVE FEATURE!!!!', item)
    props.removeFeature(item)
  };

  // console.log(props )
  // props.buyItem();

  const buyItem = item => {
    // dipsatch an action here to add an item
    // console.log('BUY ITEM:', item)
    // item.dispatch({ type: 'ADD_FEATURE', payload: item.id });
    props.buyItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures 
          car={props.car} 
          removeFeature={removeFeature}
          additionalFeatures={props.additionalFeatures}
        />
      </div>
      <div className="box">
        <AdditionalFeatures 
          additionalFeatures={props.additionalFeatures} 
          buyItem={buyItem}
        />
        <Total 
          car={props.car} 
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) { 
// store parameter in the mapStateToProps is our global state. Assigned in index file. 
// mapStateToProps is assigning prop values to the component behind the scenes.
// Each key below is a prop value 
// console.log(state.additionalFeatures)
// console.log(state)
  return {
    // additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // AddedFeatures: props.dispatch,
    // removeFeatures: props.dispatch
    buyItem: (item) => dispatch(buyItem(item)),
    removeFeature: (item) => dispatch(removeFeature(item))
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App); // Calling a function twice is currying. Connect is a HOC.
