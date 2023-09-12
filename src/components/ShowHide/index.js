import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstNameHide: true,
    lastNameHide: true,
  }

  onFirstName = () => {
    this.setState(preState => ({
      firstNameHide: !preState.firstNameHide,
    }))
  }

  onLastName = () => {
    this.setState(preState => ({
      lastNameHide: !preState.lastNameHide,
    }))
  }

  render() {
    const {firstNameHide, lastNameHide} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Show/Hide</h1>
          <div className="card-container">
            <div className="details-card">
              <button className="btn" type="button" onClick={this.onFirstName}>
                Show/Hide Firstname
              </button>
              {firstNameHide ? null : (
                <div className="name-card">
                  <p className="para">Joe</p>
                </div>
              )}
            </div>
            <div className="details-card">
              <button className="btn" type="button" onClick={this.onLastName}>
                Show/Hide Lastname
              </button>
              {lastNameHide ? null : (
                <div className="name-card">
                  <p className="para">Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
