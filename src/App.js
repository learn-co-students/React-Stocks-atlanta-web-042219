import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

	state = {
		stocks: [],
		showStocks: [],
		portfolio: [],
		showPortfolio: [],
		filtered: false,
		sorted: ''
	}

	filterStocks = (type)=> {
		let newStocks = this.state.stocks
		newStocks = newStocks.filter(stock => stock.type === type)

		let newPortfolio = this.state.portfolio
		newPortfolio = newPortfolio.filter(stock => stock.type === type)

		this.setState({ filtered: type, showStocks: newStocks, showPortfolio: newPortfolio })
	}

	compareName = (a,b)=> {
		if(a.name > b.name) return 1
		if(a.name < b.name) return -1
		else return 0
	}

	sortStocks = (sortBy)=> {
		let newPortfolio = this.state.portfolio
		let newStocks = this.state.stocks

		if(sortBy === 'Alphabetically') {
			newPortfolio.sort(this.compareName)
			newStocks.sort(this.compareName)
		}
		else if(sortBy === 'Price') {
			newPortfolio.sort((a,b) => a.price - b.price)
			newStocks.sort((a,b) => a.price - b.price)
		}

		console.log(sortBy)

		this.setState({ sorted: sortBy, filtered: false, showStocks: newStocks, showPortfolio: newPortfolio })
	}

	buyStock = (stock)=> {
		let newPortfolio = this.state.portfolio
		newPortfolio.push(stock)

		this.setState({
			portfolio: newPortfolio,
			showPortfolio: newPortfolio,
			sorted: false
		})
	}

	sellStock = (stock)=> {
		let newPortfolio = this.state.portfolio

		let index = newPortfolio.indexOf(stock)
		newPortfolio.splice(index, 1)

		this.setState({
			portfolio: newPortfolio,
			showPortfolio: newPortfolio,
			sorted: false
		})
	}

	componentDidMount() {
		fetch('http://localhost:3000/stocks')
		.then(resp => resp.json())
		.then(stocks => this.setState({ showStocks: stocks, stocks: stocks }))
	}

  render() {
  	// console.log(this.state)
    return (
      <div>
        <Header/>
        <MainContainer
        	sorted={this.state.sorted}
        	filtered={this.state.filtered}
        	showStocks={this.state.showStocks}
        	showPortfolio={this.state.showPortfolio}
        	buyStock={this.buyStock}
        	sellStock={this.sellStock}
        	filterStocks={this.filterStocks}
        	sortStocks={this.sortStocks}
        />
      </div>
    );
  }
}

export default App;
