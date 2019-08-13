import React, { Component } from 'react'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'


class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: [],
      myPortfolio: [],
      filterArray: []
    }
  }


  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => this.setState({stocks: data, filterArray: data}))
  }


  addStock = (stockObject) => {
    this.state.myPortfolio.includes(stockObject) ?
      alert('You already have this stock in your portfolio, you greedy cunt.') :
      this.setState({
        myPortfolio: [...this.state.myPortfolio, stockObject]
      })
  }


  removeStock = (stockObject) => {
    let stockArray = this.state.myPortfolio.filter(stocks => {
      return stocks !== stockObject
    })

    this.setState({myPortfolio: stockArray})
  }


  filterStocks = (e) => {
    let filteredStocks = this.state.filterArray.filter(stock => {
      if (stock.type === e.target.value) return stock
      else return null
    })

    this.setState({stocks: filteredStocks})
  }


  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} />
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.stocks} addStock={this.addStock} />
            </div>
            <div className="col-4">
              <PortfolioContainer myPortfolio={this.state.myPortfolio} removeStock={this.removeStock} />
            </div>
          </div>
      </div>
    )
  }

}

export default MainContainer
