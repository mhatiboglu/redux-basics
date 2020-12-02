import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCretors from "../../store/actions/action"

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions/action";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubCounter} />
        <hr />
        <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.storedResults.map((storedResult) => (
            <li
              onClick={() => this.props.onDeleteResult(storedResult.id)}
              key={storedResult.id}
            >
              {storedResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCretors.increment()),
    onDecrementCounter: () => dispatch(actionCretors.decrement()),
    onAddCounter: () => dispatch(actionCretors.add(5)),
    onSubCounter: () => dispatch(actionCretors.sub(5)),
    onStoreResult: (result) => dispatch(actionCretors.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCretors.deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
