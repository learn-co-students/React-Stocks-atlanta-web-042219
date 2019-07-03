import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar
          sorted={this.props.sorted}
          filtered={this.props.filtered}
          filterStocks={this.props.filterStocks}
          sortStocks={this.props.sortStocks}
        />

          <div className="row">

            <div className="col-8">
              <StockContainer buyStock={this.props.buyStock} showStocks={this.props.showStocks} />
            </div>

            <div className="col-4">
              <PortfolioContainer sellStock={this.props.sellStock} showPortfolio={this.props.showPortfolio} />
            </div>

          </div>
      </div>
    );
  }

}

export default MainContainer;
