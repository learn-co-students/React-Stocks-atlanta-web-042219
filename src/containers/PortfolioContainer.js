import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          this.props.showPortfolio.map((stock, index) => (
            <div onClick={ e=> this.props.sellStock(stock) }>
              <Stock stock={stock} key={'portfolio-'+index} />
            </div> 
          ))
        }
      </div>
    );
  }
}

export default PortfolioContainer;
