import React, { useRef } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Heart } from './Heart'
import {Card, CardLikes, ClockIcon, CardTitle } from './PostCard.styles';

const PostCard = ({ post }) => {
  const { author, story_title, story_url, created_at } = post;
  const [liked, setLiked] = React.useState(false);
  const heartRef = useRef(null);

  const handleCardClick = () => {
    if (story_url) {
      window.open(story_url, '_blank');
    }
  };

  const getTimeAgo = () => {
    const now = moment();
    const createdTime = moment(created_at);
    const duration = moment.duration(now.diff(createdTime));
    return duration.humanize();
  };

  const handleLikes = () => {
    setLiked(!liked);
  };

  return (
    <Card>
      <CardTitle onClick={handleCardClick}>
        <p>
          <ClockIcon icon={faClock} className='clock-icon' />
          {`${getTimeAgo()} ago by ${author}`}
        </p>
        <p>{story_title}</p>
      </CardTitle>
      <CardLikes>
        <Heart
          ref={heartRef}
          className={`heart-icon ${liked ? 'liked' : ''}`}
          onClick={handleLikes}
        />
      </CardLikes>
    </Card>
  );
};

export default PostCard;
