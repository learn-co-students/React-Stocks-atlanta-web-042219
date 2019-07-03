import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

	state = {
		stocks: [],
		portfolio: [],
		filtered: 'Show All',
		sorted: false
	}

	getDisplay = (array)=> {
		// filter
		if(this.state.filtered !== 'Show All')
			array = array.filter(stock => stock.type === this.state.filtered)

		// sort
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
        	// state
        	sorted={this.state.sorted}
        	filtered={this.state.filtered}
        	stocks={this.getDisplay(this.state.stocks)}
        	portfolio={this.getDisplay(this.state.portfolio)}
        	// functions
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
