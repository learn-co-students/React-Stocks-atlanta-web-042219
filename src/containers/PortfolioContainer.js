import React from 'react';
import Stock from '../components/Stock'

const PortfolioContainer = function(props) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        props.showPortfolio.map((stock, index) => (
          <div onClick={ e => props.sellStock(stock) }>
            <Stock stock={stock} key={'portfolio-'+index} />
          </div> 
        ))
      }
    </div>
  );
}

export default PortfolioContainer;
