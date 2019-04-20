import React from "react";
import { connect } from "react-redux";

// import actions

import SmurfList from "./../components/SmurfList";

import { getSmurf, addSmurf, deleteItem } from "../actions/index";

import Loader from "react-loader-spinner";

class SmurfListView extends React.Component {
  state = {
    
      name: "",
      age: "",
      height: "",
      
    
  };

  componentDidMount() {
    // call our action
    this.props.getSmurf();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  };

  render() {
    const { error, fetching, smurfs } = this.props;

    return (
      <div>
        {fetching && <Loader type="Puff" color="red" height={80} width={80} />}
        {error && <div>Error! {error.message}</div>}
        <div className="SmurfsList_wrapper">
          <SmurfList smurfs={smurfs} deleteItem={deleteItem} />
        </div>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.isLoading,
  error: state.error
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getSmurf, addSmurf,deleteItem }
)(SmurfListView);
