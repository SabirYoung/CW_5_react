import React, { Component } from 'react';

class List extends Component {
    render() {
        const { items } = this.props;
        
        if (!items || items.length === 0) {
            return <p>No items to display</p>;
        }

        return (
            <ul className="list">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        );
    }
}

export default List;