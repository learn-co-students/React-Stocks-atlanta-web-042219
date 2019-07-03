import React from 'react';
import SearchBar from '../components/SearchBar'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'

const MainContainer = function(props) {
  return (
    <div>
      <SearchBar
        sorted={props.sorted}
        filtered={props.filtered}
        filterStocks={props.filterStocks}
        sortStocks={props.sortStocks}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer buyStock={props.buyStock} stocks={props.stocks} />
        </div>

        <div className="col-4">
          <PortfolioContainer sellStock={props.sellStock} portfolio={props.portfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
