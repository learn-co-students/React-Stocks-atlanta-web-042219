import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    myStocks: [],
    filter: 'All',
    sort: null
  }

  componentDidMount() {
    fetch(`http://localhost:3000/stocks`)
      .then(res => res.json())
      .then(stocks => this.setState({ stocks, showStocks: stocks }))
  }

  filterStocks = () => {
    if (this.state.filter === 'All') {
      return this.state.stocks
    } else {
      const stocks = this.state.stocks
      return stocks.filter(stock => stock.type === this.state.filter)
    }
  }

  handleFilter = filter => {
    this.setState({ filter })
  }

  handleBuy = (stock) => {
    this.setState({ myStocks: [...this.state.myStocks, stock] })
  }

  handleSell = (sellStock) => {
    let newPort = this.state.myStocks
    const idx = this.state.myStocks.findIndex(stock => stock.id === sellStock.id)
    newPort.splice(idx, 1)
    this.setState({ myStocks: newPort })
  }

  handleSort = e => {
    this.setState({ sort: e.target.value })
    let showStocks = this.state.stocks
    if (e.target.value === 'Alphabetically') {
      showStocks.sort((a, b) => {
        if (a.name < b.name) { return -1 }
        if (a.name > b.name) { return 1 }
        return 0
      })
    } else if (e.target.value === 'Price') {
      showStocks.sort((a, b) => a.price - b.price)
    }
    this.setState({ showStocks })
  }


  render() {
    return (
      <div>
        <SearchBar handleSort={this.handleSort} sort={this.state.sort} handleFilter={this.handleFilter} />

        <div className="row">
          <div className="col-8">

            <StockContainer stocks={this.filterStocks()} handleBuy={this.handleBuy} />

          </div>
          <div className="col-4">

            <PortfolioContainer stocks={this.state.myStocks} handleSell={this.handleSell} />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
