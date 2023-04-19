import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  selectedId = event => {
    this.setState({countryId: event.target.value})
  }

  getCountry = countryId => {
    const countryAndCapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === countryId,
    )
    return countryAndCapital.country
  }

  render() {
    const {countryId} = this.state
    const country = this.getCountry(countryId)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select"
              onChange={this.selectedId}
              value={countryId}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  key={eachCountry.id}
                  value={eachCountry.id}
                  className="option"
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para-question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
