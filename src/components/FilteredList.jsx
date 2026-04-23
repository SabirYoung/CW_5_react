import React, { Component } from 'react';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'All'
        };
    }

    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { items } = this.props;
        const { filter } = this.state;

        const filteredItems = filter === 'All' 
            ? items 
            : items.filter(item => item.type === filter);

        return (
            <div className="filtered-list">
                <h2>Filtered List</h2>
                <div className="filter-controls">
                    <label>Filter by type: </label>
                    <select value={filter} onChange={this.handleFilterChange}>
                        <option value="All">All</option>
                        <option value="Fruit">Fruit</option>
                        <option value="Vegetable">Vegetable</option>
                    </select>
                </div>
                <ul className="item-list">
                    {filteredItems.map((item, index) => (
                        <li key={index} className="item">
                            {item.name} - <span className="item-type">{item.type}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FilteredList;