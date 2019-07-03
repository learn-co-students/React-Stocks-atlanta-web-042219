import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <div id="sort-by">
        <strong>Sort by:</strong>
        <br/>
        <label>
          <input type="radio" value="Alphabetically" checked={props.sorted==='Alphabetically'} onChange={ e => props.sortStocks(e.target.value)}/>
          Alphabetically
        </label>
        <br/>
        <label>
          <input type="radio" value="Price" checked={props.sorted==='Price'} onChange={ e => props.sortStocks(e.target.value)}/>
          Price
        </label>

        <br/><br/>

        <strong>Filter by:</strong>
        <br/>
        <select value={props.filtered} onChange={ e => props.filterStocks(e.target.value)}>
          <option value="Show All">Show All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </div>
    </div>
  );
}


export default SearchBar;
