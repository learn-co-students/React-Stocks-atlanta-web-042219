import React from 'react';
import Stock from '../components/Stock'

const StockContainer = function(props) {
  return (
    <div>
      <h2>Stocks</h2>
      { 
        props.showStocks.map((stock, index) => (
          <div onClick={ e => props.buyStock(stock) }>
            <Stock stock={stock} key={'all-'+index} />
          </div> 
        ))
      }
    </div>
  );
}

export default StockContainer;
