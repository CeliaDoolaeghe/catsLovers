import React, { Component } from 'react';

class CardClass extends Component {

    render() {
        const { cat } = this.props;

        return (
            <div className="card large" >
                <div className="card-image">
                    <img src={cat.url} alt={cat.race}  />
                    <span className="card-title">{cat.race}</span>
                </div>
                <div className="card-content">
                    <p>{cat.description}</p>
                </div>
            </div>
        );
    }
}

export default CardClass;
