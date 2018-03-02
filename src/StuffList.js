import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from './actions/stuffActions';
import * as testActions from './actions/testActions';
import * as toggleActions from './actions/toggleActions';
import PropTypes from 'prop-types';
import React from 'react';

class stuffList extends React.Component {
  componentDidMount() {
    this.props.stuffActions.fetchStuff();
    this.props.testActions.testRedux();
    this.props.toggleActions.toggle(true);
    this.props.toggleActions.foobar();
  }

  renderData() {
    const stuffKeys = Object.keys(this.props.stuff)
    return <div>
      {stuffKeys.map(item => (
        <p key={`${item}-key`}>
          <span>{item}: {this.props.stuff[item]}</span>
        </p>
      ))}
    </div>;
  }

  render() {
    return (
      <div className="">
        {this.props.toggle.button ?
          <h2>Open</h2>
          :
          <h2>Closed</h2>
        }
        <button onClick={() => {
          this.props.toggleActions.toggle(this.props.toggle.button)
        }}>A button</button>
          {this.props.stuff.name ?
            this.renderData()
            :
            <div className="">
              No Data
            </div>
          }
      </div>
    );
  }
}

stuffList.propTypes = {
  stuffActions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    stuff: state.stuff,
    data: state.data,
    toggle: state.toggle
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch),
    testActions: bindActionCreators(testActions, dispatch),
    toggleActions: bindActionCreators(toggleActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(stuffList);
