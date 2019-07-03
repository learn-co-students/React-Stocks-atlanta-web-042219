import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        { 
          this.props.showStocks.map((stock, index) => (
            <div onClick={ e => this.props.buyStock(stock) }>
              <Stock stock={stock} key={'all-'+index} />
            </div> 
          ))
        }
      </div>
    );
  }
}

export default StockContainer;
