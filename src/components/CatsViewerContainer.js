import React, { Component } from 'react';
import Card from './Card';
import { loadCats } from './actions';
import { connect } from 'react-redux';

import CATS from '../data/cats.json';
import { getCats } from '../reducer';

class CatsViewerContainer extends Component {
  componentWillMount() {
    this.props.loadAllCats();
    this.state = {
      catIndex: 0,
    };
  }

  previous = () => {
    this.setState
  };

  render() {
    let { catIndex } = this.state;
    let { cats } = this.props;

    if (cats.length === 0) {
      return false;
    }

    return (
      <div>
        <div className='row'>
          <div className='col m4 offset-m4'>
            <Card cat={cats[catIndex]}/>
          </div>
        </div>
        <span>
          <a className='waves-effect waves-light btn' onClick={this.previous}>Previous</a>
          <a className='waves-effect waves-light btn' onClick={this.next}>Next</a>
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cats: getCats(state),
});

const mapDispatchToProps = dispatch => ({
  loadAllCats: () => {
    dispatch(loadCats(CATS));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CatsViewerContainer);
