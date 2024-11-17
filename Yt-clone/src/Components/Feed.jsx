import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const Feed = () => {
  return (
    <div className='mx-5 '>
      <ButtonList/>
      <div className='w-60vw'>
      <VideoContainer/>
      </div>
      
    </div>
  )
}

export default Feed
