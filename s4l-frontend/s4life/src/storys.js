import React from 'react';
import './Story.css';

const Story = ({ story }) => {
  return (
    <div className="story">
      <div className="story-border">
        <img 
          src={story.imageUrl || `https://i.pravatar.cc/150?img=${story.id}`} 
          alt={story.username} 
          className="story-avatar"
        />
      </div>
      <p className="story-username">{story.username}</p>
    </div>
  );
};

export default Story;