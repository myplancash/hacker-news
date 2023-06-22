import './PostCard.css'
import React from 'react';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const PostCard = ({ post }) => {
  const { author, story_title, story_url, created_at} = post;

  const handleCardClick = () => {
    if(story_url) {
      window.open(story_url, '_blank');
    }
  }

  const getTimeAgo = () => {
    const now = moment();
    const createdTime = moment(created_at);
    const duration = moment.duration(now.diff(createdTime));
    return duration.humanize();
  };

  return (
    <section className='card' onClick={handleCardClick} >
      <p>{story_title}</p>
      <p>
         <FontAwesomeIcon icon={faClock} className="clock-icon" />
        {`${getTimeAgo()} ago by ${author}`}
      </p>
    </section> 
  )
}

export default PostCard