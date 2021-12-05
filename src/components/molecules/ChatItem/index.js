import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({ isMe, message, time, photo }) => {
  if (isMe) {
    return <IsMe message={message} time={time} />
  } else {
    return <Other message={message} time={time} photo={photo} />
  }
}

export default ChatItem
