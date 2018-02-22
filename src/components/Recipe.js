import React from 'react';

export default class Recipe extends React.Component {
    render() {
        return (
                <div className="plat"> {this.props.details.nom}</div>
        )
    }
}
