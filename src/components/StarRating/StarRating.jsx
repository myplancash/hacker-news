import React from 'react'
import './StarRating.css';

const StarRating = () => {
  
  const [currentIndex, setCurrentIndex] = React.useState(null)

  const handleClink = (index) => {
    setCurrentIndex(index + 1)
  }
  // const stars = [ 'star1', 'star2', 'star3', 'star4' ];

  return (
    <div id='rating'>
      {Array.from(Array(5), (_, index) => (
          <span
            key={index}
            className={index < currentIndex ? 'active' : ''}
            onClick={() => handleClink(index)}
          >
            *
          </span>
        ))}
    </div>
  )
}

export default StarRating