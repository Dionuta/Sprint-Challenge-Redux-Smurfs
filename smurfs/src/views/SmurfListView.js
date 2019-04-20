import React from "react";
import { connect } from "react-redux";

// import actions

import SmurfList from './../components/SmurfList';

import { getSmurf } from '../actions/index';

import Loader from "react-loader-spinner";

class SmurfListView extends React.Component {


  componentDidMount() {
    // call our action
    this.props.getSmurf();
  }

  render() {
    const { error, fetching, smurfs } = this.props;
   
    return (
      <div>
        {fetching && (
          <Loader type="Puff" color="red" height={80} width={80} />
        )}
        {error && (
          <div>Error! {error.message}</div>
        )}
        <div className="SmurfsList_wrapper">
           <SmurfList smurfs={smurfs} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.isLoading,
  error: state.error,
});



// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getSmurf }

)(SmurfListView);
