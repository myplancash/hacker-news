import { PostCardContainer } from './PostCard.styles';

import React from 'react'

const PostCard = ({post}) => {
  const { author, story_title, story_url} = post;

  const handleClick = () => {
    return
  }

  return (
    <PostCardContainer onClick={handleClick} >
      <h1>{author}</h1>
      <p>{story_title}</p>
      <i>Reference here: {story_url}</i>
    </PostCardContainer> 
  )
}

export default PostCard