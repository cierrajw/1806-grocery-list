import React, { Component } from 'react'

class Grocery extends Component {
  render() {
    const { name, starred, addGrocery } = this.props

    return(
      <article 
        className={`Grocery ${starred ? 'starred' : ''}`}>
        <h3>{name}</h3>
        <button 
          className="purchase"
          onClick={addGrocery}
        >Purchase
        </button>
      </article>
    )
  }
}

export default Grocery
