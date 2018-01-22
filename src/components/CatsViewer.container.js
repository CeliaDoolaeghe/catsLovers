import { getCats } from '../reducer';
import { loadCats } from './actions';
import connect from 'react-redux/es/connect/connect';
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import CatsViewer from './CatsViewer';

import CATS from '../data/cats.json';

const mapStateToProps = state => ({
  cats: getCats(state),
});

const mapDispatchToProps = dispatch => ({
  loadAllCats: () => {
    dispatch(loadCats(CATS));
  }
});

const handlers = {
  previous: ({ setCatIndex, cats, catIndex }) => () => {
    setCatIndex(catIndex > 0 ? catIndex - 1 : cats.length - 1)
  },
  next: ({ setCatIndex, cats, catIndex }) => () => {
    setCatIndex((catIndex + 1) % cats.length)
  }
};

const lifeCycle = {
  componentWillMount() {
    this.props.loadAllCats();
  }
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(lifeCycle),
  withState('catIndex', 'setCatIndex', []),
  withHandlers(handlers),
);

export default enhance(CatsViewer);

// TODO withProps => cat = cats[catIndex]
