// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrencyItem extends Component {
  state = {coinList: [], isLoading: true}

  componentDidMount() {
    this.getCoinData()
  }

  getCoinData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    console.log(updatedData)
    this.setState({coinList: updatedData, isLoading: false})
  }

  render() {
    const {coinList, isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="table-container">
          <div className="nav-container">
            <p className="description">Coin Type</p>
            <div className="flex-container">
              <p className="description1">USD</p>
              <p className="description1">EURO</p>
            </div>
          </div>
          <ul className="coin-table">
            {isLoading ? (
              <Loader
                testid="loader"
                type="TailSpin"
                color="#00BFFF"
                height={50}
                width={50}
                className="loader"
              />
            ) : (
              coinList.map(item => (
                <CryptocurrenciesList coinData={item} key={item.id} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrencyItem
