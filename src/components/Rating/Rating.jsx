import React from 'react'
import './Rating.css'

class Rating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
    }
  }

  handleStarClick = (index) => {
    this.setState({rating: index + 1})
  }

  render() {
    const { rating } = this.state;

    return (
      <div id='rating'>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < rating ? 'active' : ''}
            onClick={() => this.handleStarClick(index)}
          >
            &#9733;
          </span>
        )) }
      </div>
    )
  }

} 

export default Rating;