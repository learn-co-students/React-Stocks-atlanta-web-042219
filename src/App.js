import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

	state = {
		stocks: [],
		portfolio: [],
		filtered: false,
		sorted: false
	}

	getDisplay = (array)=> {
		if(this.state.filtered)
			array = array.filter(stock => stock.type === this.state.filtered)
		if(this.state.sorted){
			if(this.state.sorted === 'Alphabetically')
				array = array.sort(this.compareName)
			else if(this.state.sorted === 'Price')
				array = array.sort( (a,b) => a.price - b.price )
		}
		return array
	}

	filterStocks = (type)=> this.setState({ filtered: type })
	sortStocks = (sortBy)=> this.setState({ sorted: sortBy })
	compareName = (a,b)=> {
		if(a.name > b.name) return  1
		if(a.name < b.name) return -1
		else return 0
	}

	buyStock = (stock)=> this.setState({ portfolio: [...this.state.portfolio, stock] })
	sellStock = (stock)=> {
		this.state.portfolio.splice(this.state.portfolio.indexOf(stock), 1)
		this.setState({ portfolio: this.state.portfolio })
	}

	componentDidMount() {
		fetch('http://localhost:3000/stocks')
		.then(resp => resp.json())
		.then(stocks => this.setState({ showStocks: stocks, stocks: stocks }))
	}

  render() {
    return (
      <div>
        <Header/>
        <MainContainer
        	sorted={this.state.sorted}
        	filtered={this.state.filtered}
        	showStocks={this.getDisplay(this.state.stocks)}
        	showPortfolio={this.getDisplay(this.state.portfolio)}
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
