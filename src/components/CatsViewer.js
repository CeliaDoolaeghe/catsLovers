import React from 'react';
import Card from './Card';

export default ({isCatsLoaded, cat, previous, next}) => (
    <div>
        {isCatsLoaded &&
        <div>
            <div className='row'>
                <div className='col m4 offset-m4'>
                    <Card cat={cat}/>
                </div>
            </div>
            <a className='waves-effect waves-light btn' onClick={previous}>Previous</a> <a
            className='waves-effect waves-light btn' onClick={next}>Next</a>
        </div>
        }
    </div>
);
