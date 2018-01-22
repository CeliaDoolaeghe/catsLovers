import React from 'react';
import Card from './Card';

export default ({cats, catIndex, previous, next }) => (
  <div>
    {cats.length !== 0 &&
      <div>
        <div className='row'>
          <div className='col m4 offset-m4'>
            <Card cat={cats[catIndex]}/>
          </div>
        </div>
        <span>
        <a className='waves-effect waves-light btn' onClick={previous}>Previous</a>
          <a className='waves-effect waves-light btn' onClick={next}>Next</a>
        </span>
      </div>
    }
  </div>
);