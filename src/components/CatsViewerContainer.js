import React, {Component} from 'react';
import {loadCats} from './actions';
import {connect} from 'react-redux';
import {getCats} from '../reducer';

import CATS from '../data/cats.json';
import CardClass from "./CardClass";

const setPrevious = ({catIndex}, {cats}) => ({
    catIndex: catIndex > 0 ? catIndex - 1 : cats.length - 1,
});

class CatsViewerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catIndex: 0,
        };
    }

    componentWillMount() {
        this.props.loadAllCats();
    }

    next = () => {
        this.setState({
            catIndex: (this.state.catIndex + 1) % this.props.cats.length,
        });
    };

    previous = () => {
        this.setState(setPrevious);
    };

    render() {
        let {catIndex} = this.state;
        let {cats} = this.props;

        if (cats.length === 0) {
            return false;
        }

        return (
            <div>
                <div className='row'>
                    <div className='col m4 offset-m4'>
                        <CardClass cat={cats[catIndex]}/>
                    </div>
                </div>
                <span>
          <a className='waves-effect waves-light btn' onClick={this.previous}>Previous</a> <a
                    className='waves-effect waves-light btn' onClick={this.next}>Next</a>
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
