import React from 'react'

const Stock = (props) => (
  <div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.stock.name}</h5>
        <p className="card-text">{props.stock.price}</p>
        {props.addStock ?
          <button onClick={() => props.addStock(props.stock)}> Buy Stock </button> :
          <button onClick={() => props.removeStock(props.stock)}> Sell Stock </button>}
      </div>
    </div>
  </div>
)

export default Stock
