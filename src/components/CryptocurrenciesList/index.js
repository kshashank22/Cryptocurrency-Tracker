// Write your JS code here
import './index.css'

const CryptocurrenciesList = props => {
  const {coinData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = coinData
  return (
    <li className="list-container">
      <div className="coin-container">
        <img src={currencyLogo} className="logo" alt={currencyName} />
        <p className="name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="values">{usdValue}</p>
        <p className="values">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrenciesList
